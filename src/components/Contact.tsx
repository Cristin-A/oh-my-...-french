import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_EMAIL } from "@/config/links";

const Contact = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = subject.trim() || "Contact — Oh my French!";
    const body = `${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client silently in a hidden way
    window.location.href = mailto;
    setSent(true);
  };

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

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-sm p-8 md:p-10">
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle2 className="text-gold mx-auto mb-4" size={48} />
              <h3 className="font-display text-2xl font-bold text-primary mb-2">
                Merci&nbsp;!
              </h3>
              <p className="font-body text-base text-muted-foreground">
                Votre message est prêt à être envoyé. Nous vous répondrons très vite.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
                className="mt-6 font-body text-sm text-gold hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-medium text-primary mb-2"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm font-medium text-primary mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                  placeholder="Atelier, pastilles, autre…"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-sm font-medium text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                  placeholder="Dites-nous tout…"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3.5 rounded-lg font-body font-semibold text-sm hover:brightness-110 transition-all duration-300"
              >
                Envoyer le message
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
