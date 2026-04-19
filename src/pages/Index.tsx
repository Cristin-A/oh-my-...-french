import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Workshops from "@/components/Workshops";
import Pastilles from "@/components/Pastilles";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <IntroSection />
        <Workshops />
        <Pastilles />
          <Pricing />
          <Contact />
          <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
