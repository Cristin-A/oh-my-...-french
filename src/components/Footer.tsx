import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/config/links";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gold text-2xl leading-none tracking-tight">•••</span>
            <h3 className="font-display text-2xl font-bold text-primary-foreground">
              Oh my <span className="text-gold">French!</span>
            </h3>
          </div>

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
