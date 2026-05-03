import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const tallySrc =
    "https://tally.so/embed/GxBXaZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-gold font-semibold">
            {t.nav.contact}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">
            Une question, une idée&nbsp;?
          </h2>
          <p className="font-body text-base text-muted-foreground">
            Écrivez-nous — nous vous répondrons rapidement.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-sm p-4 md:p-6 relative overflow-hidden">
          <iframe
            src={tallySrc}
            title="Formulaire de contact"
            loading="lazy"
            className="w-full border-0"
            style={{ minHeight: "600px" }}
          />
          {/* Mask the "Made with Tally" badge */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 h-12 w-44 bg-card pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
