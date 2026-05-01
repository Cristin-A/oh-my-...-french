import { Mail, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/config/links";

const Contact = () => {
  const { t } = useLanguage();

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Contact — Oh my French!"
  )}`;

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
            {t.nav.contact}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
            Une question, une idée&nbsp;?
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            Écrivez-nous directement — nous vous répondrons rapidement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-sm p-8 md:p-10">
          <ul className="space-y-5 mb-8">
            <li className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-gold" size={20} />
              </span>
              <div className="text-left">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <a
                  href={mailtoHref}
                  className="font-body text-base font-medium text-primary hover:text-gold transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-gold" size={20} />
              </span>
              <div className="text-left">
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  Téléphone
                </p>
                <a
                  href={`tel:${CONTACT_PHONE_HREF}`}
                  className="font-body text-base font-medium text-primary hover:text-gold transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </li>
          </ul>

          <a
            href={mailtoHref}
            className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3.5 rounded font-body font-semibold text-sm hover:brightness-110 transition-all duration-300"
          >
            Nous écrire un email
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
