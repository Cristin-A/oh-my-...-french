import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const IntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.description}
        </motion.p>
      </div>
    </section>
  );
};

export default IntroSection;
