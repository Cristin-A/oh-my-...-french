import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface TallyDialogProps {
  formId?: string;
  triggerClassName?: string;
  children: ReactNode;
  title?: string;
}

const TallyDialog = ({
  formId = "J9kePo",
  triggerClassName = "",
  children,
  title = "Inscription",
}: TallyDialogProps) => {
  const [open, setOpen] = useState(false);

  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        {children}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden bg-card border-gold/30">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative w-full h-[80vh] bg-card">
            <iframe
              src={src}
              title={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              allow="payment"
            />
            {/* Mask the "Made with Tally" badge */}
            <div
              aria-hidden
              className="absolute bottom-0 right-0 h-12 w-44 bg-card pointer-events-none"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TallyDialog;
