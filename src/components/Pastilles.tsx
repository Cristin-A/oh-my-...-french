import { motion } from "framer-motion";
import { BookOpen, PenTool, Globe, Theater } from "lucide-react";
import { useState } from "react";
import pastillesImage from "@/assets/pastilles-theme.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
const categoryIcons = [BookOpen, PenTool, Theater, Globe];
const categoryColors = [
  "from-blue-600/20 to-blue-500/5",
  "from-emerald-600/20 to-emerald-500/5",
  "from-amber-600/20 to-amber-500/5",
  "from-rose-600/20 to-rose-500/5",
];

const Pastilles = () => {
  const [activeLevel, setActiveLevel] = useState<typeof levels[number]>("B1");
  const { t } = useLanguage();

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
            <img
              src={pastillesImage}
              alt="Livre ouvert avec des mots français"
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
            />
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
            <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
              {t.capsules.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-16 flex-wrap"
        >
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeLevel === level
                  ? "bg-gold text-accent-foreground"
                  : "bg-primary-foreground/10 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/15"
              }`}
            >
              {level}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.capsules.categories.map((cat, index) => {
            const Icon = categoryIcons[index];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${categoryColors[index]} border border-primary-foreground/10 rounded-xl p-8 hover:border-gold/30 transition-all duration-300 cursor-pointer group`}
              >
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">
                  {cat.title}
                </h3>
                <p className="font-body text-primary-foreground/60 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-gold uppercase tracking-wider">
                    {t.capsules.levelLabel} {activeLevel}
                  </span>
                  <span className="font-body text-xs text-primary-foreground/40">
                    {t.capsules.available}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pastilles;
