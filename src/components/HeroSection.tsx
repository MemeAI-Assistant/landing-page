import React, { useState, useEffect } from 'react';
import { Download, Play, Star, Users, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentMeme, setCurrentMeme] = useState(0);
  const memes = ['😂', '🔥', '💯', '👑', '⚡'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              <span>AI-Powered Meme Discovery</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Perfect Meme{' '}
              </span>
              for Every Chat
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              MemeFinder is the smart keyboard that understands your conversations and suggests the perfect memes. Never send a boring message again!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download size={20} />
                <span>Download Free</span>
              </button>
              
              <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 transition-all duration-200">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 transition-all duration-300">
                  {memes[currentMeme]}
                </div>
                <p className="text-gray-600">AI analyzing your chat...</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3 text-right">
                  <p className="text-gray-700">"I just finished my exam!"</p>
                </div>
                <div className="bg-purple-100 rounded-lg p-3">
                  <p className="text-purple-700">Perfect meme suggestions:</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-white px-3 py-1 rounded-full text-sm">🎉 Celebration</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm">😮‍💨 Relief</span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm">🔥 Success</span>
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