import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, ChevronDown } from 'lucide-react';

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

const ContactSection: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const teamEmails: TeamMember[] = [
    { name: "Ahmet Kılavuz", email: "kilavuz.ahmet@metu.edu.tr", role: "Full-Stack Developer" },
    { name: "Mithat Timurcan", email: "mithat.timurcan@metu.edu.tr", role: "Mobile Developer" },
    { name: "Alperen Ovak", email: "alperen.ovak@metu.edu.tr", role: "AI Engineer" },
    { name: "Eray Pasinlioğlu", email: "eray.pasinlioglu@metu.edu.tr", role: "Backend Developer" },
    { name: "Adilhan Çetin", email: "adilhan.cetin@metu.edu.tr", role: "Data Engineer" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSelect = (email: string, name: string) => {
    setSelectedEmail(`${name} (${email})`);
    setFormData(prev => ({
      ...prev,
      email: email
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("✅ Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSelectedEmail("");

    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about MemeFinder? Want to suggest new features? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're a meme enthusiast, content creator, or just curious about our AI-powered platform, 
              we're here to help you find the perfect viral content for every situation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Discord Server</h4>
                  <p className="text-gray-300">Available for community support</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office Hours</h4>
                  <p className="text-gray-300">Monday - Friday, 2PM - 6PM (UTC+3)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-300">METU Campus, Ankara, Turkey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-300 mb-2">
                    Contact Team Member
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white text-left flex items-center justify-between"
                    >
                      <span className={selectedEmail ? "text-white" : "text-gray-400"}>
                        {selectedEmail || "Select team member to contact"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
                        {teamEmails.map((member, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleEmailSelect(member.email, member.name)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-700 transition-colors text-white border-b border-gray-600 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <div className="font-medium">{member.name}</div>
                            <div className="text-sm text-gray-400">{member.role}</div>
                            <div className="text-sm text-cyan-400">{member.email}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
              {successMessage && (
                <p className="mt-2 text-green-400 font-medium">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;