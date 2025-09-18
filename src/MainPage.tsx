import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

const MainPage: React.FC = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
};

export default MainPage;
