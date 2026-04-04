import { Mail, MapPin, Phone } from "lucide-react";
import logoSpark from "@/assets/logo-spark.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.workshops, href: "#ateliers" },
    { label: t.nav.capsules, href: "#capsules" },
    { label: t.nav.pricing, href: "#tarifs" },
  ];

  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSpark} alt="" className="w-7 h-7" />
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Oh my <span className="text-gold">French!</span>
              </h3>
            </div>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed italic mb-1">
              {t.footer.tagline}
            </p>
            {t.footer.taglineSub && (
              <p className="font-body text-primary-foreground/40 text-xs leading-relaxed mb-4">
                {t.footer.taglineSub}
              </p>
            )}
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              {t.footer.brand}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <span className="font-body text-sm text-primary-foreground/60">
                  contact@ohmyfrench.fr
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <span className="font-body text-sm text-primary-foreground/60">
                  +33 1 23 45 67 89
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold" />
                <span className="font-body text-sm text-primary-foreground/60">
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Oh my French! {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
