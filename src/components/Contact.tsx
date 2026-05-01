import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TALLY_CONTACT_URL } from "@/config/links";

const TALLY_FORM_ID = "GxBXaZ";

const Contact = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://tally.so/widgets/embed.js"]'
    );
    const loadEmbeds = () => {
      // @ts-expect-error Tally global injected by the embed script
      if (typeof window.Tally !== "undefined") window.Tally.loadEmbeds();
    };
    if (existing) {
      loadEmbeds();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-gold">
              {t.nav.contact}
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Une question, une idée&nbsp;?
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground">
            Écrivez-nous via le formulaire ci-dessous — nous vous répondrons rapidement.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <iframe
            data-tally-src={`${TALLY_CONTACT_URL}?transparentBackground=1`}
            loading="lazy"
            width="100%"
            height="600"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Formulaire de contact Oh my French!"
            src={`${TALLY_CONTACT_URL}?transparentBackground=1`}
          />
        </div>

        <p className="text-center mt-6 font-body text-sm text-muted-foreground">
          Le formulaire ne s'affiche pas&nbsp;?{" "}
          <a
            href={TALLY_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline font-medium"
          >
            Ouvrir dans un nouvel onglet
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
