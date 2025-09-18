import React from 'react';
import { Brain, Keyboard, Search, Smartphone, Zap, Users } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Context Analysis",
      description: "Our AI understands your conversation context and suggests viral memes, GIFs, and trending content that match the mood."
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Smart Keyboard Integration",
      description: "Seamlessly integrated keyboard that suggests memes as you type, just like GIF keyboards but smarter."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Advanced Meme Search",
      description: "Find any meme format, viral video, or trending content instantly with our powerful search engine."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform App",
      description: "Available as keyboard extension and standalone app - works with WhatsApp, Instagram, TikTok, and more."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Trending Content",
      description: "Access the latest viral memes, Instagram Reels formats, and TikTok trends updated daily."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Curated",
      description: "Millions of memes rated by users, with fresh content from Reddit, Instagram, and TikTok communities."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose MemeFinder?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of meme discovery with our AI-powered platform that brings viral content from Instagram, TikTok, and Reddit to your fingertips.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200 hover:scale-105 hover:border-cyan-500/30">
              <div className="text-cyan-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;