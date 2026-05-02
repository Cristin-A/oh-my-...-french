import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import logo from "@/assets/logo-ohmyfrench-transparent.svg";
import { REGISTERS, CLOSING_LINES, type Pastille } from "@/data/pastilles";

interface Props {
  pastille: Pastille;
}

function Dots({
  active,
  onSelect,
  variant = "light",
}: {
  active: number;
  onSelect: (i: number) => void;
  variant?: "light" | "dark";
}) {
  const inactive =
    variant === "light" ? "rgba(255,255,255,0.35)" : "rgba(8,28,58,0.25)";
  return (
    <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
      {[0, 1, 2].map((i) => (
        <button
          key={i}
          aria-label={`Aller au volet ${i + 1}`}
          onClick={() => onSelect(i)}
          className="h-2 rounded-full transition-all"
          style={{
            width: i === active ? 20 : 8,
            backgroundColor: i === active ? "hsl(var(--gold))" : inactive,
          }}
        />
      ))}
    </div>
  );
}

function PronunciationButton({ phonetic }: { phonetic: string }) {
  const [open, setOpen] = useState(false);
  const [showPhonetic, setShowPhonetic] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2 rounded-full text-[12px] tracking-wide font-display text-white border border-gold bg-transparent hover:bg-gold/10 transition-colors"
        >
          Prononciation
        </button>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={() =>
              toast("Audio bientôt disponible", {
                description: "L'audio sera branché plus tard.",
              })
            }
            className="px-4 py-2 rounded-full text-[12px] flex items-center gap-2 bg-gold text-primary font-display"
          >
            <span>🔊</span> Écouter
          </button>
          <button
            onClick={() => setShowPhonetic((s) => !s)}
            className="px-4 py-2 rounded-full text-[12px] flex items-center gap-2 border border-gold text-white font-display"
          >
            <span>👁</span> Lire
          </button>
        </div>
      )}
      {showPhonetic && (
        <div className="italic text-[14px] tracking-wide text-gold font-display">
          {phonetic}
        </div>
      )}
    </div>
  );
}

function Slide1({ pastille }: { pastille: Pastille }) {
  const [showRegisterLabel, setShowRegisterLabel] = useState(false);
  const reg = REGISTERS[pastille.register];

  return (
    <div className="relative h-full w-full flex flex-col px-7 pt-6 pb-20 bg-primary">
      <div className="flex items-start justify-between">
        <img
          src={logo}
          alt="Oh my French!"
          className="h-20 w-20 object-contain -ml-2 -mt-2"
        />
        <div className="relative flex flex-col items-end pt-2">
          <button
            aria-label={reg.label}
            onMouseEnter={() => setShowRegisterLabel(true)}
            onMouseLeave={() => setShowRegisterLabel(false)}
            onClick={() => setShowRegisterLabel((s) => !s)}
            className="rounded-full"
            style={{
              width: 14,
              height: 14,
              backgroundColor: reg.color,
              boxShadow: `0 0 12px ${reg.color}80`,
            }}
          />
          {showRegisterLabel && (
            <div className="mt-2 text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded bg-white/10 text-white font-display">
              {reg.label}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-2">
        <h3
          className="text-center text-white font-display font-bold"
          style={{ fontSize: 38, lineHeight: 1.15, letterSpacing: "0.01em" }}
        >
          {pastille.phrase}
        </h3>
        <PronunciationButton phonetic={pastille.phonetic} />
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] mb-1 text-gold font-display">
            Littéralement
          </div>
          <div className="italic text-[14px] text-white/75 font-display">
            {pastille.literal}
          </div>
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-[0.18em] mb-1 text-gold font-display">
            En clair
          </div>
          <div className="italic text-[14px] text-white/75 font-display">
            {pastille.meaning}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide2({
  pastille,
  goNext,
}: {
  pastille: Pastille;
  goNext: () => void;
}) {
  const block = (label: string, body: string) => (
    <div className="py-3.5">
      <div className="text-[9px] uppercase tracking-[0.2em] mb-1.5 text-gold font-display">
        {label}
      </div>
      <p className="text-[13.5px] text-primary font-display" style={{ lineHeight: 1.55 }}>
        {body}
      </p>
    </div>
  );

  return (
    <div
      className="relative h-full w-full flex flex-col px-7 pt-6 pb-16 overflow-y-auto no-scrollbar"
      style={{ backgroundColor: "hsl(var(--cream, 40 33% 97%))" }}
    >
      <div className="flex items-start justify-end mb-2">
        <div className="text-[9px] uppercase tracking-[0.18em] text-primary/50 font-display">
          {pastille.category}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b border-primary/10">{block("Hier", pastille.hier)}</div>
        <div className="border-b border-primary/10">
          {block("Aujourd'hui", pastille.aujourdhui)}
        </div>
        <div>
          {block("Demain", pastille.demain)}
          <div className="mt-2 flex justify-end pb-2">
            <button
              onClick={goNext}
              className="px-5 py-2.5 text-[12px] border border-primary/25 text-primary font-display rounded-2xl hover:bg-primary/5 transition-colors"
            >
              À toi de jouer →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide3({ pastille }: { pastille: Pastille }) {
  const [stage, setStage] = useState<"intro" | "input" | "done">("intro");
  const [text, setText] = useState("");
  const [closingLine, setClosingLine] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    const line = CLOSING_LINES[Math.floor(Math.random() * CLOSING_LINES.length)];
    setClosingLine(line);
    setStage("done");
  };

  return (
    <div className="relative h-full w-full flex flex-col px-7 pt-6 pb-16 overflow-y-auto no-scrollbar bg-primary">
      <div className="flex items-start justify-end mb-6">
        <div className="text-[9px] uppercase tracking-[0.18em] text-white/55 font-display">
          À toi de jouer !
        </div>
      </div>

      {stage === "intro" && (
        <>
          <div className="text-[9px] uppercase tracking-[0.2em] mb-3 text-gold font-display">
            Utile quand...
          </div>
          <ul className="space-y-2.5 mb-6">
            {pastille.situations.map((s, i) => (
              <li
                key={i}
                className="text-[14px] flex gap-3 text-white/85 font-display"
                style={{ lineHeight: 1.5 }}
              >
                <span className="text-gold">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] italic mb-2 text-white font-display" style={{ lineHeight: 1.5 }}>
            Et toi ? Tu t'y reconnais ?
          </p>
          <p className="text-[14px] italic mb-5 text-white font-display" style={{ lineHeight: 1.5 }}>
            Tu as vécu — ou tu imagines — une situation où{" "}
            <span className="text-gold not-italic font-medium font-display">
              tu aurais pu / tu pourrais la placer
            </span>{" "}
            ?
          </p>

          <div className="mt-auto flex justify-end pb-2">
            <button
              onClick={() => setStage("input")}
              className="px-6 py-3 rounded-full text-[12px] font-medium bg-gold text-primary font-display"
            >
              Oui, je la place !
            </button>
          </div>
        </>
      )}

      {stage === "input" && (
        <div className="flex-1 flex flex-col gap-4">
          <label className="text-[9px] uppercase tracking-[0.2em] text-gold font-display">
            Raconte ta situation
          </label>
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            placeholder="Une fois..."
            className="w-full p-4 text-[14px] bg-transparent outline-none resize-none placeholder:italic text-white border border-gold/40 rounded-xl font-display"
          />
          <button
            onClick={handleSubmit}
            disabled={!text.trim()}
            className="self-end px-5 py-2.5 rounded-full text-[12px] font-medium disabled:opacity-40 bg-gold text-primary font-display"
          >
            Valider →
          </button>
        </div>
      )}

      {stage === "done" && (
        <div className="flex-1 flex items-center justify-center">
          <div
            key={closingLine}
            className="italic text-[22px] text-center px-2 animate-in fade-in slide-in-from-bottom-2 duration-700 text-gold font-display"
            style={{ lineHeight: 1.35 }}
          >
            {closingLine}
          </div>
        </div>
      )}
    </div>
  );
}

const PastilleCard = ({ pastille }: Props) => {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(2, i));
    setActive(next);
    containerRef.current?.scrollTo({
      left: next * containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) goTo(active + (dx < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <div
      className="relative w-full max-w-[360px] mx-auto overflow-hidden shadow-2xl rounded-[28px] bg-primary"
      style={{ height: "min(640px, 80vh)" }}
    >
      <div
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="h-full w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        <div className="min-w-full h-full snap-center">
          <Slide1 pastille={pastille} />
        </div>
        <div className="min-w-full h-full snap-center">
          <Slide2 pastille={pastille} goNext={() => goTo(2)} />
        </div>
        <div className="min-w-full h-full snap-center">
          <Slide3 pastille={pastille} />
        </div>
      </div>
      <Dots active={active} onSelect={goTo} variant={active === 1 ? "dark" : "light"} />
    </div>
  );
};

export default PastilleCard;
