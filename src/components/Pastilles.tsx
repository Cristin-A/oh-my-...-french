import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import PastilleCard from "@/components/PastilleCard";
import { PASTILLES } from "@/data/pastilles";

const Pastilles = () => {
  const { t } = useLanguage();
  const featured = PASTILLES[0];

  return (
    <section id="pastilles" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <PastilleCard pastille={featured} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
              {t.capsules.label}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t.capsules.title}
            </h2>
            <p className="font-body text-base text-primary-foreground/70 leading-relaxed">
              Trois volets, une expression : découvre, comprends, place-la. Glisse de gauche à droite pour explorer la pastille.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-10"
        >
          <p className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-6">
            D'autres pastilles arrivent bientôt — inscrivez-vous pour être parmi les premiers·ères à y avoir accès.
          </p>
          <a
            href="https://tally.so/r/J9kePo"
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

export default Pastilles;

