import { Mail, Phone } from "lucide-react";
import logoSpark from "@/assets/logo-spark.png";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/config/links";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logoSpark} alt="" className="w-7 h-7" />
            <h3 className="font-display text-2xl font-bold text-primary-foreground">
              Oh my <span className="text-gold">French!</span>
            </h3>
          </div>
          <p className="font-body text-primary-foreground/70 text-base leading-relaxed italic mb-8">
            Oh my French! — De point en point, le français se dessine.
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <a
                href={`tel:${CONTACT_PHONE_HREF}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </li>
          </ul>

          <div className="border-t border-primary-foreground/10 pt-6">
            <p className="font-body text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Oh my French! Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
