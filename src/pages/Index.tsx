import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";
import Pastilles from "@/components/Pastilles";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Workshops />
        <Pastilles />
        <Pricing />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
