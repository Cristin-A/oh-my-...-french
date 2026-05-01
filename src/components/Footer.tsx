import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/config/links";
import logo from "@/assets/logo-ohmyfrench.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Oh my French!" className="h-28 w-28 md:h-32 md:w-32 rounded-md" />
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
