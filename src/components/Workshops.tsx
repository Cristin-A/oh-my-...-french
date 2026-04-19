import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, Star } from "lucide-react";
import atelierImage from "@/assets/atelier-conversation.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { CALENDLY_BOOKING_URL } from "@/config/links";

const icons = [MessageCircle, Users, Calendar, Star];

const Workshops = () => {
  const { t } = useLanguage();

  return (
    <section id="ateliers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
              {t.workshops.label}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.workshops.title}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Rejoignez un atelier ou proposez votre propre thème de discussion. D'autres apprenant·e·s intéressé·e·s s'inscriront pour former un groupe dynamique de 5 à 6 participants maximum, en ligne.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={atelierImage}
              alt="Atelier de conversation en groupe"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.workshops.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-card border border-border rounded-xl p-10"
        >
          <p className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Prochains ateliers bientôt disponibles — rejoignez la liste d'attente
          </p>
          <a
            href="https://tally.so/r/GxBXaZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-accent-foreground px-8 py-4 rounded font-body font-semibold text-base hover:brightness-110 transition-all duration-300"
          >
            S'inscrire
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
