import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import PastilleCard from "@/components/PastilleCard";
import { PASTILLES } from "@/data/pastilles";

const Pastilles = () => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const current = PASTILLES[index];

  const prev = () => setIndex((i) => (i - 1 + PASTILLES.length) % PASTILLES.length);
  const next = () => setIndex((i) => (i + 1) % PASTILLES.length);

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
            <div className="relative">
              <PastilleCard key={current.id} pastille={current} />

              {/* Prev / Next pastille controls */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prev}
                  aria-label="Pastille précédente"
                  className="h-10 w-10 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="font-display text-sm text-primary-foreground/70 tabular-nums">
                  {index + 1} / {PASTILLES.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Pastille suivante"
                  className="h-10 w-10 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
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
            <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-6">
              Trois volets, une expression : découvre, comprends, place-la. Glisse de gauche à droite pour explorer la pastille — et passe à la suivante avec les flèches.
            </p>

            {/* Quick list of all pastilles */}
            <ul className="flex flex-wrap gap-2">
              {PASTILLES.map((p, i) => (
                <li key={p.id}>
                  <button
                    onClick={() => setIndex(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-display border transition-colors ${
                      i === index
                        ? "bg-gold text-primary border-gold"
                        : "border-primary-foreground/20 text-primary-foreground/70 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {p.phrase}
                  </button>
                </li>
              ))}
            </ul>
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
            D'autres pastilles arrivent bientôt — inscrivez-vous pour être parmi les premiers·ères à recevoir les nouveautés.
          </p>
          <TallyDialog
            triggerClassName="inline-block bg-gold text-accent-foreground px-8 py-4 rounded font-body font-semibold text-base hover:brightness-110 transition-all duration-300"
          >
            S'inscrire
          </TallyDialog>
        </motion.div>
      </div>
    </section>
  );
};

export default Pastilles;
