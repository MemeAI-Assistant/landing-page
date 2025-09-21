import React, { useEffect, useRef, useCallback, useMemo } from 'react';

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_BEHIND_GRADIENT =
  'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20
} as const;

const clamp = (value: number, min = 0, max = 100): number => Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3): number => parseFloat(value.toFixed(precision));

const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number): number => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '',
  iconUrl = '',
  grainUrl = '',
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Team Member',
  title = 'Developer',
  handle = 'developer',
  status = 'Available',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration: number,
      startX: number,
      startY: number,
      card: HTMLElement,
      wrap: HTMLElement
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add('active');
    card.classList.add('active');
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove('active');
      card.classList.remove('active');
    },
    [animationHandlers]
  );

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const { beta, gamma } = event;
      if (!beta || !gamma) return;

      animationHandlers.updateCardTransform(
        card.clientHeight / 2 + gamma * mobileTiltSensitivity,
        card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        card,
        wrap
      );
    },
    [animationHandlers, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      if (typeof (window.DeviceMotionEvent as any).requestPermission === 'function') {
        (window.DeviceMotionEvent as any)
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch((err: any) => console.error(err));
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };

    card.addEventListener('pointerenter', pointerEnterHandler);
    card.addEventListener('pointermove', pointerMoveHandler);
    card.addEventListener('pointerleave', pointerLeaveHandler);
    card.addEventListener('click', handleClick);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);

    return () => {
      card.removeEventListener('pointerenter', pointerEnterHandler);
      card.removeEventListener('pointermove', pointerMoveHandler);
      card.removeEventListener('pointerleave', pointerLeaveHandler);
      card.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    enableMobileTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardStyle = useMemo(
    () =>
      ({
        '--icon': iconUrl ? `url(${iconUrl})` : 'none',
        '--grain': grainUrl ? `url(${grainUrl})` : 'none',
        '--behind-gradient': showBehindGradient ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT) : 'none',
        '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
        '--pointer-x': '50%',
        '--pointer-y': '50%',
        '--pointer-from-center': '0',
        '--pointer-from-top': '0.5',
        '--pointer-from-left': '0.5',
        '--card-opacity': '0',
        '--rotate-x': '0deg',
        '--rotate-y': '0deg',
        '--background-x': '50%',
        '--background-y': '50%',
        '--card-radius': '30px'
      }) as React.CSSProperties,
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      <style>{`
        .pc-card-wrapper {
          perspective: 500px;
          transform: translate3d(0, 0, 0.1px);
          position: relative;
          touch-action: none;
        }

        .pc-card-wrapper::before {
          content: '';
          position: absolute;
          inset: -10px;
          background: inherit;
          background-position: inherit;
          border-radius: inherit;
          transition: all 0.5s ease;
          filter: contrast(2) saturate(2) blur(36px);
          transform: scale(0.8) translate3d(0, 0, 0.1px);
          background-size: 100% 100%;
          background-image: var(--behind-gradient);
        }

        .pc-card-wrapper:hover,
        .pc-card-wrapper.active {
          --card-opacity: 1;
        }

        .pc-card-wrapper:hover::before,
        .pc-card-wrapper.active::before {
          filter: contrast(1) saturate(2) blur(40px) opacity(1);
          transform: scale(0.9) translate3d(0, 0, 0.1px);
        }

        .pc-card {
          height: 350px;
          display: grid;
          aspect-ratio: 0.65;
          border-radius: var(--card-radius);
          position: relative;
          background-blend-mode: color-dodge, normal, normal, normal;
          box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px)
            calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
          transition: transform 1s ease;
          transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
          background-size: 100% 100%;
          background-position: 0 0, 0 0, 50% 50%, 0 0;
          background-image:
            radial-gradient(
              farthest-side circle at var(--pointer-x) var(--pointer-y),
              hsla(186, 100%, 90%, var(--card-opacity)) 4%,
              hsla(186, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%,
              hsla(186, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%,
              hsla(186, 0%, 60%, 0) 100%
            ),
            radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%),
            radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%),
            conic-gradient(from 124deg at 50% 50%, #00c1ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #00c1ffff 100%);
          overflow: hidden;
        }

        .pc-card:hover,
        .pc-card.active {
          transition: none;
          transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
        }

        .pc-card * {
          display: grid;
          grid-area: 1/-1;
          border-radius: var(--card-radius);
          transform: translate3d(0, 0, 0.1px);
          pointer-events: none;
        }

        .pc-inside {
          inset: 1px;
          position: absolute;
          background-image: var(--inner-gradient);
          background-color: rgba(0, 0, 0, 0.9);
          transform: translate3d(0, 0, 0.01px);
        }

        .pc-content {
          max-height: 100%;
          overflow: hidden;
          text-align: center;
          position: relative;
          transform: translate3d(
            calc(var(--pointer-from-left) * -6px + 3px),
            calc(var(--pointer-from-top) * -6px + 3px),
            0.1px
          ) !important;
          z-index: 5;
          mix-blend-mode: luminosity;
        }

        .pc-details {
            position: relative;        /* no absolute/top */
            margin: 0;
            padding: 0;
            min-height: 72px;          /* locks header height */
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 20px;
        }

        .pc-details h3 {
          font-weight: 600;
          margin: 0;
          font-size: 1.25em;
          text-align: center;
          background-image: linear-gradient(to bottom, #fff, #6f6fbe);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .pc-details p {
          font-weight: 600;
          position: relative;
          top: -12px;
          white-space: nowrap;
          font-size: 14px;
          margin: 15px auto;
          width: min-content;
          background-image: linear-gradient(to bottom, #fff, #4a4ac0);
          background-size: 1em 1.5em;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .pc-avatar-content {
          mix-blend-mode: screen;
          overflow: hidden;
          position: relative;
        }

        .pc-avatar-content .avatar {
          width: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scale(1);
          bottom: 2px;
          opacity: calc(1.75 - var(--pointer-from-center));
        }

        .pc-avatar-content::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          backdrop-filter: blur(30px);
          mask: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 60%,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 1) 100%
          );
          pointer-events: none;
        }

        .pc-user-info {
          position: absolute;
          margin-top: auto;
          bottom: 15px;
          left: 15px;
          right: 15px;
          z-index: 2;
          height: 56px;
          margin: 0;                 /* <-- remove margin-top:auto */
  width: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 10px 12px;
          pointer-events: auto;
        }

        .pc-user-details {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .pc-mini-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .pc-mini-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .pc-user-text {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 4px;
        }

        .pc-handle {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1;
        }

        .pc-status {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1;
        }

        .pc-contact-btn {
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 3;
          margin-left: 5px;
          width: 60px;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          background: transparent;
        }

        .pc-contact-btn:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-1px);
        }
      `}</style>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-content pc-avatar-content">
            <img
              className="avatar"
              src={avatarUrl}
              alt={`${name || 'User'} avatar`}
              loading="lazy"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || 'User'} mini avatar`}
                      loading="lazy"
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = '0.5';
                        target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
                <button
                  className="pc-contact-btn"
                  onClick={handleContactClick}
                  style={{ pointerEvents: 'auto' }}
                  type="button"
                  aria-label={`Contact ${name || 'user'}`}
                >
                  {contactText}
                </button>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;