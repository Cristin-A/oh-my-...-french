import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();
  const featuredIndex = 1;

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
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const featured = index === featuredIndex;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-xl p-8 flex flex-col ${
                  featured
                    ? "bg-primary text-primary-foreground border-2 border-gold relative"
                    : "bg-card border border-border"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-accent-foreground text-xs font-body font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    {t.pricing.popular}
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-semibold mb-2 ${
                    featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-body text-sm mb-6 ${
                    featured ? "text-primary-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`font-display text-5xl font-bold ${
                      featured ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {plan.price}€
                  </span>
                  <span
                    className={`font-body text-sm ml-2 ${
                      featured ? "text-primary-foreground/50" : "text-muted-foreground"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                      <span
                        className={`font-body text-sm ${
                          featured ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded font-body font-semibold text-sm transition-all duration-300 ${
                    featured
                      ? "bg-gold text-accent-foreground hover:brightness-110"
                      : "bg-primary text-primary-foreground hover:bg-navy-light"
                  }`}
                >
                  {t.pricing.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
