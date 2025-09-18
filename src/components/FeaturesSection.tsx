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
      description: "Our AI understands the context of your conversations and suggests relevant memes automatically."
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Smart Keyboard Integration",
      description: "Seamlessly integrated into your keyboard for instant meme access while typing."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Powerful Search Engine",
      description: "Find any meme instantly with our advanced search powered by image recognition and tags."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cross-Platform App",
      description: "Available as both a keyboard extension and standalone app for all your devices."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get meme suggestions in milliseconds with our optimized AI engine."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Access millions of memes curated and rated by our active community."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose MemeFinder?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of meme discovery with our AI-powered platform that brings viral content from Instagram, TikTok, and Reddit to your fingertips.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <div className="text-purple-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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