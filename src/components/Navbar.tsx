import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lang, langLabels } from "@/i18n/translations";
import logo from "@/assets/logo-ohmyfrench.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.workshops, href: "#ateliers" },
    { label: t.nav.capsules, href: "#pastilles" },
    { label: t.nav.pricing, href: "#tarifs" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#accueil" className="flex items-center" aria-label="Oh my French!">
          <img
            src={logo}
            alt="Oh my French!"
            className="h-24 w-24 md:h-28 md:w-28 rounded-md"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-300 font-body text-[15px] font-medium uppercase tracking-widest"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-primary-foreground/70 hover:text-gold transition-colors font-body text-sm font-medium uppercase tracking-wider"
            >
              {langLabels[lang]}
              <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 bg-primary border border-primary-foreground/10 rounded-lg shadow-xl overflow-hidden min-w-[60px]"
                >
                  {(Object.keys(langLabels) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full px-4 py-2 text-left font-body text-sm transition-colors ${
                        l === lang
                          ? "text-gold bg-gold/10"
                          : "text-primary-foreground/60 hover:text-gold hover:bg-primary-foreground/5"
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#tarifs"
            className="bg-gold text-accent-foreground px-6 py-2.5 rounded font-body font-semibold text-sm hover:brightness-110 transition-all duration-300"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-widest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Mobile language selector */}
              <li className="flex gap-2">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); }}
                    className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      l === lang
                        ? "bg-gold text-accent-foreground"
                        : "text-primary-foreground/50 hover:text-gold"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </li>
              <li>
                <a
                  href="#tarifs"
                  onClick={() => setIsOpen(false)}
                  className="bg-gold text-accent-foreground px-6 py-2.5 rounded font-body font-semibold text-sm"
                >
                  {t.nav.book}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
