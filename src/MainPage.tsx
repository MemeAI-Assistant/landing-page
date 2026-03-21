import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
// import HowItWorksSection from "./components/HowItWorksSection"; // Temporarily disabled: product not ready
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import PrivacyPage from "./PrivacyPage";

const MainPage: React.FC = () => {
  const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const normalizedPath =
    basePath && basePath !== "/" && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const isPrivacyRoute = normalizedPath === "/privacy";

  return (
    <div>
      <Header/>
      {isPrivacyRoute ? (
        <PrivacyPage/>
      ) : (
        <>
          <HeroSection/>
          <FeaturesSection/>
          {/* <HowItWorksSection/> */}
          <TeamSection/>
          <ContactSection/>
        </>
      )}
      <Footer/>
    </div>
  );
};

export default MainPage;
