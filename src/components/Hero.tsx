import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

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

      {/* Tagline just below the navbar/logo */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 px-6 pt-20 font-body text-xs md:text-sm text-primary-foreground/60 italic"
      >
        {t.hero.tagline}
      </motion.p>

      {/* Spacer to push content to the bottom */}
      <div className="flex-1" />

      {/* Bottom area: headline + buttons */}
      <div className="relative z-10 px-6 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground leading-tight mb-8"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ateliers"
            className="bg-gold text-accent-foreground px-8 py-4 rounded font-body font-semibold text-base hover:brightness-110 transition-all duration-300"
          >
            {t.hero.ctaWorkshops}
          </a>
          <a
            href="#capsules"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded font-body font-medium text-base hover:border-gold hover:text-gold transition-all duration-300"
          >
            {t.hero.ctaCapsules}
          </a>
        </motion.div>
      </div>

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
