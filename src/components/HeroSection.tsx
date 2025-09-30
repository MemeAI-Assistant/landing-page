import React, { useState, useEffect } from 'react';
import { Download, Play, Star, Users, Zap } from 'lucide-react';
import MetallicLogo from '../ReactBits/MetallicPaint/MetallicLogo';

interface MemeFormat {
  text: string;
  type: string;
}

const HeroSection: React.FC = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const memes: MemeFormat[] = [
    { text: 'Drake pointing', type: 'Popular Format' },
    { text: 'Woman yelling at cat', type: 'Reaction Meme' },
    { text: 'This is fine dog', type: 'Situation Meme' },
    { text: 'Distracted boyfriend', type: 'Choice Meme' },
    { text: 'SpongeBob mocking', type: 'Text Meme' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              <span>AI-Powered Meme Discovery</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Find the
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Perfect Meme{' '}
              </span>
              for Every Chat
            </h1>

            <MetallicLogo />
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              MemeFinder is the smart keyboard that analyzes your conversations and suggests the perfect viral memes, GIFs, and trending content. Turn every chat into comedy gold!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <Download size={20} />
                <span>Download Free</span>
              </button>
              
              <button className="inline-flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-gray-700 hover:border-cyan-500 transition-all duration-200">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="bg-gray-900 border border-gray-600 rounded-lg p-4 mb-2 min-h-[80px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-cyan-400 mb-1">
                      {memes[currentMeme].text}
                    </div>
                    <div className="text-sm text-gray-400">
                      {memes[currentMeme].type}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400">AI analyzing your chat context...</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-700 rounded-lg p-3 text-right">
                  <p className="text-gray-200">"I can't believe I have to work on Saturday 😭"</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-3">
                  <p className="text-cyan-400">Perfect meme suggestions:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">😩 Work Struggle</span>
                    <span className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">🏃‍♂️ Weekend Gone</span>
                    <span className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">📺 Office Memes</span>
                  </div>
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