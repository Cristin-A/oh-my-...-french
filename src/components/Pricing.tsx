import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CALENDLY_BOOKING_URL } from "@/config/links";

const Pricing = () => {
  const { t } = useLanguage();

  const features = [
    "1h30 de session",
    "Groupe de 5 à 6 participants maximum",
    "Thème proposé par Oh my French! ou soumis par les participant·e·s à la session précédente",
    "Échanges authentiques et bienveillants",
  ];

  const packFeatures = [
    "5 ateliers de conversation",
    "Valables pendant 2 mois",
    "Économisez 20% (25€)",
    "Flexibilité totale",
  ];

  return (
    <section id="tarifs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            {t.pricing.label}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.pricing.title}
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary text-primary-foreground border-2 border-gold rounded-xl p-8 flex flex-col"
          >
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
              Atelier de conversation
            </h3>
            <div className="mb-6">
              <span className="font-display text-5xl font-bold text-gold">25€</span>
              <span className="font-body text-sm ml-2 text-primary-foreground/50">
                / séance
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span className="font-body text-sm text-primary-foreground/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://tally.so/r/J9kePo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded font-body font-semibold text-sm transition-all duration-300 bg-gold text-accent-foreground hover:brightness-110"
            >
              S'inscrire
            </a>
          </motion.div>

          <p className="text-center font-body text-muted-foreground mt-8 italic">
            D'autres formules à venir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
