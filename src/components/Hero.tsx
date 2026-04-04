import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conversation dans un café parisien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/15" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Oh my <span className="italic text-gold">French!</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <p className="font-display text-xl md:text-2xl text-primary-foreground/90 italic mb-2">
            {t.hero.tagline}
          </p>
          {t.hero.taglineSub && (
            <p className="font-body text-base md:text-lg text-primary-foreground/50">
              {t.hero.taglineSub}
            </p>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary-foreground/40" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
