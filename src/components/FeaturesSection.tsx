import React, { useEffect, useRef } from 'react';

/* ── Feature images ── */
import vaultImg from '../assets/features/vault.png';
import galleryImg from '../assets/features/gallery.png';
import keyboardImg from '../assets/features/keyboard.png';
import p2pImg from '../assets/features/p2p.png';

/* ─────────────────────────────────────────────────────────────
   Apple-style Features — each feature is a full-bleed showcase
   ───────────────────────────────────────────────────────────── */

interface Feature {
  id: string;
  overline: string;
  headline: React.ReactNode;
  description: string;
  image: string;
  techPills: string[];
  accentColor: string;       // for the overline + glow
  glowGradient: string;      // radial glow behind the image
  layout: 'left' | 'right';  // text side
}

const features: Feature[] = [
  {
    id: 'vault',
    overline: 'Global Semantic Search',
    headline: (
      <>
        The Ultimate
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Meme Vault
        </span>
      </>
    ),
    description:
      'Search through a curated, ever-expanding database of over 70,000 images and videos. Just describe the scene, the joke, or the vibe in plain English, and our AI retrieves the exact match in milliseconds.',
    image: vaultImg,
    techPills: ['FAISS', 'Gemini Embeddings', '70K+ Media'],
    accentColor: '#00d4ff',
    glowGradient:
      'radial-gradient(ellipse at center, rgba(0,212,255,0.12) 0%, transparent 70%)',
    layout: 'left',
  },
  {
    id: 'gallery',
    overline: 'On-Device Local Search',
    headline: (
      <>
        Search Your Gallery.
        <br />
        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Completely Secure.
        </span>
      </>
    ),
    description:
      'Stop scrolling endlessly to find that one screenshot from three years ago. MEME-Finder indexes your local device gallery entirely offline, letting you context-search your own personal collection with zero privacy compromises.',
    image: galleryImg,
    techPills: ['On-Device Index', 'Zero Cloud Upload', '100% Offline'],
    accentColor: '#a855f7',
    glowGradient:
      'radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 70%)',
    layout: 'right',
  },
  {
    id: 'keyboard',
    overline: 'MEME-Finder Keyboard',
    headline: (
      <>
        Never Switch
        <br />
        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Apps Again
        </span>
      </>
    ),
    description:
      'Bring the power of AI search directly into WhatsApp, iMessage, or Instagram. With the native MEME-Finder Keyboard, you can search, preview, and drop videos, GIFs, and custom stickers right into your active chat.',
    image: keyboardImg,
    techPills: ['Custom Keyboard', 'Rich Media', 'All Chat Apps'],
    accentColor: '#7c3aed',
    glowGradient:
      'radial-gradient(ellipse at center, rgba(124,58,237,0.10) 0%, transparent 70%)',
    layout: 'left',
  },
  {
    id: 'p2p',
    overline: 'Serverless P2P Sharing',
    headline: (
      <>
        Off-the-Grid
        <br />
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          P2P Sharing
        </span>
      </>
    ),
    description:
      'Want to drop a massive meme folder to a friend in the same room? Bypass the cloud completely. Use our serverless peer-to-peer transfer to beam high-quality videos and images directly between devices at lightning speed.',
    image: p2pImg,
    techPills: ['Mesh Network', 'No Cloud', 'Lightning Fast'],
    accentColor: '#00d4ff',
    glowGradient:
      'radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.06) 50%, transparent 80%)',
    layout: 'right',
  },
];

/* ─────────────────────────────
   Component
   ───────────────────────────── */

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const els = sectionRef.current?.querySelectorAll('[data-animate]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef}>
      {/* ── Section Intro ── */}
      <div className="features-intro">
        <div className="features-intro__inner" data-animate>
          <p className="features-intro__overline">Core Technology</p>
          <h2 className="features-intro__headline">
            Built different.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Built to matter.
            </span>
          </h2>
          <p className="features-intro__sub">
            Four foundational technologies. Each one designed
            <br className="hidden sm:block" />
            to solve a real problem, not create a new one.
          </p>
        </div>
      </div>

      {/* ── Feature Showcases ── */}
      {features.map((f) => (
        <div key={f.id} className="feature-showcase" id={`feature-${f.id}`}>
          {/* Background glow */}
          <div
            className="feature-showcase__glow"
            style={{ background: f.glowGradient }}
            aria-hidden
          />

          <div
            className={`feature-showcase__grid ${
              f.layout === 'right' ? 'feature-showcase__grid--reversed' : ''
            }`}
          >
            {/* Text Block */}
            <div className="feature-showcase__text" data-animate>
              <p
                className="feature-showcase__overline"
                style={{ color: f.accentColor }}
              >
                {f.overline}
              </p>
              <h3 className="feature-showcase__headline">{f.headline}</h3>
              <p className="feature-showcase__description">{f.description}</p>
              <div className="feature-showcase__pills">
                {f.techPills.map((pill) => (
                  <span
                    key={pill}
                    className="feature-showcase__pill"
                    style={{
                      borderColor: `${f.accentColor}22`,
                      color: f.accentColor,
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Block */}
            <div className="feature-showcase__visual" data-animate>
              <img
                src={f.image}
                alt={`${f.overline} illustration`}
                className="feature-showcase__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;