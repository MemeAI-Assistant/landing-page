import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Step {
  step: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      step: "1",
      title: "Install MemeFinder",
      description: "Download our keyboard extension or standalone app from your device's app store.",
      image: "📱"
    },
    {
      step: "2",
      title: "Start Chatting",
      description: "Our AI analyzes your conversation context in real-time to understand the vibe and topic.",
      image: "💬"
    },
    {
      step: "3",
      title: "Get Viral Content",
      description: "Receive perfect suggestions from trending memes, Instagram Reels formats, and viral videos.",
      image: "🔥"
    },
    {
      step: "4",
      title: "Share & Go Viral",
      description: "Send the perfect meme with one tap and become the comedy king of your group chats!",
      image: "👑"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with MemeFinder in just a few simple steps and transform your messaging experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;