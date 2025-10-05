import React from 'react';
import { Play, Star, Users, Search } from 'lucide-react';
import MetallicLogo from '../ReactBits/MetallicPaint/MetallicLogo';
import LiquidEther from '../ReactBits/LiquidEther/LiquidEther';
import RotatingText from '../ReactBits/RotatingText/RotatingText';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black pt-28 pb-16 overflow-hidden">
      <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 0
          }}>
            <LiquidEther
              colors={['#5227FF', '#FF9FFC', '#B19EEF']}
              mouseForce={20}
              cursorSize={100}
              resolution={0.5}
              dt={0.014}
              BFECC={true}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              isBounce={false}
              autoDemo={false}
              autoSpeed={0}
              autoIntensity={0}
              takeoverDuration={0}
              autoResumeDelay={999999}
              autoRampDuration={0}
              className="pointer-events-auto touch-auto"
            />
          </div>
      <div style={{ zIndex: 1, position: 'relative', pointerEvents: 'none' }}>
        {/* Decorative logo: subtle, out of flow, won’t push content */}
        <div
          aria-hidden
          className="absolute left-6 bottom-10 hidden md:block opacity-20"
        >
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start lg:items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: tightened sizes & spacing */}
            <div className="max-w-2xl space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 shrink-0">
                  <MetallicLogo />
                </span>
                <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-400 sm:text-sm">
                  <span>AI-Powered Meme Search</span>
                </div>
              </div>

              <h1 className="font-bold leading-tight tracking-tight text-white">
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  Search Memes
                </span>
                <span className="flex items-baseline text-cyan-400 bg-clip-text text-4xl sm:text-5xl lg:text-6xl">
                  Like You{' '}
                  <RotatingText
                    texts={['Talk', 'Feel', 'Remember', 'Describe', 'Chat']}
                    mainClassName="px-2 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-2 font-bold"
                    elementLevelClassName=""
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl">
                  About Them
                </span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                Just describe what you're looking for in plain English. “Will Smith slap
                Chris Rock”, “Drake pointing meme”, “Surprised Pikachu” — we’ll find it
                instantly!
              </p>
            </div>

            {/* RIGHT: unchanged content, just bounded width & centered */}
            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-md rounded-3xl border border-gray-700/50 bg-gray-800/50 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <div className="mb-6">
                  <div className="relative">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />
                    <input
                      type="text"
                      value="will smith slap"
                      className="w-full rounded-xl border border-gray-600/50 bg-gray-900/80 px-12 py-3.5 text-sm text-white outline-none transition-colors focus:border-cyan-500 md:py-4 md:text-base"
                      readOnly
                    />
                  </div>
                </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50 transition-all hover:border-cyan-500">
                  
                  <img
                    src="src/assets/memes/will-smith-1.jpg"
                    alt="Will Smith slap meme 1"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50 transition-all hover:border-purple-500">
                  <img
                    src="src/assets/memes/will-smith-2.jpg"
                    alt="Will Smith slap meme 2"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-gray-600/30 bg-gray-900/50 transition-all hover:border-orange-500">
                  <img
                    src="src/assets/memes/will-smith-3.jpg"
                    alt="Will Smith slap meme 3"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

                <div className="mt-5 text-center">
                  <p className="text-sm text-gray-400">3 results found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
