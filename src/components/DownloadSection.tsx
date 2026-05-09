import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────
   SVG Store Badges (inline — no external dependencies)
   ───────────────────────────────────────────────────── */

const AppleLogo: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidLogo: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
    <path d="M17.523 15.341A5.5 5.5 0 0 0 18 13a5.5 5.5 0 0 0-.477-2.341l1.769-1.021a.5.5 0 0 0-.5-.866L17.03 9.79A5.48 5.48 0 0 0 14 8.05V6a.5.5 0 0 0-1 0v1.974A5.496 5.496 0 0 0 10 8.05L8.208 6.772a.5.5 0 1 0-.5.866L9.477 10.66A5.5 5.5 0 0 0 9 13a5.5 5.5 0 0 0 .477 2.341l-1.769 1.021a.5.5 0 0 0 .5.866L10 16.21A5.48 5.48 0 0 0 13 17.95V20a.5.5 0 0 0 1 0v-2.05a5.496 5.496 0 0 0 3-1.9l1.792 1.035a.5.5 0 1 0 .5-.866l-1.769-1.021zM13 17a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm1-4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

/* ─────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────── */

const DownloadSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('[data-animate]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="download"
      ref={sectionRef}
      className="download-section"
    >
      <div className="download-section__inner download-section__inner--centered">
        {/* ── Center: Text + Buttons ── */}
        <div className="download-section__text" data-animate>
          <div className="download-section__badge-attention">
            <span className="pulse-dot-attention"></span>
            AVAILABLE NOW !!!
          </div>

          <h2 className="download-section__headline" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Stop searching.
            <br />
            <span className="bg-gradient-to-r from-[#ff0055] via-[#ff00ff] to-[#00d4ff] bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 20px rgba(255,0,255,0.4))' }}>
              Start finding.
            </span>
          </h2>

          <p className="download-section__sub">
            The ultimate AI-powered meme search engine is finally here. Download MEME-Finder for free on iOS and Android.
          </p>

          {/* Store buttons */}
          <div className="download-section__buttons download-section__buttons--centered">
            {/* App Store */}
            <a
              href="#"
              id="btn-app-store"
              className="store-btn store-btn--apple"
              aria-label="Download on the App Store"
            >
              <AppleLogo />
              <div className="store-btn__text">
                <span className="store-btn__sub">Download on the</span>
                <span className="store-btn__main">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              id="btn-google-play"
              className="store-btn store-btn--android"
              aria-label="Get it on Google Play"
            >
              <AndroidLogo />
              <div className="store-btn__text">
                <span className="store-btn__sub">Get it on</span>
                <span className="store-btn__main">Google Play</span>
              </div>
            </a>
          </div>

          {/* Social proof */}
          <div className="download-section__proof download-section__proof--centered">
            <div className="download-proof__item">
              <span className="download-proof__value">70K+</span>
              <span className="download-proof__label">Media in Vault</span>
            </div>
            <div className="download-proof__divider" />
            <div className="download-proof__item">
              <span className="download-proof__value">100%</span>
              <span className="download-proof__label">Offline Search</span>
            </div>
            <div className="download-proof__divider" />
            <div className="download-proof__item">
              <span className="download-proof__value">Free</span>
              <span className="download-proof__label">To Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
