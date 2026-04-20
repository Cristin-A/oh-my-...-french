import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { CALENDLY_BOOKING_URL } from "@/config/links";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conversation dans un café parisien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/10 to-primary/30" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      {/* Headline at the top, centered */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 pt-24 text-center font-display text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground"
      >
        {t.hero.headline}
      </motion.h1>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Buttons at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 pb-20 flex flex-col sm:flex-row gap-4 justify-center px-6"
      >
        <a
          href="#ateliers"
          className="bg-gold text-accent-foreground px-8 py-4 rounded font-body font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-lg"
        >
          Découvrir les ateliers
        </a>
        <a
          href="https://tally.so/r/J9kePo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gold border-2 border-gold px-8 py-4 rounded font-body font-semibold text-base hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
        >
          S'inscrire
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary-foreground/40" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
