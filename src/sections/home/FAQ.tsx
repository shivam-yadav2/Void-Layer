import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers, before you ask."
        />

        <div className="mt-14 mx-auto max-w-3xl divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium">{f.question}</span>
                  <span
                    className={cn(
                      "inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-transform",
                      isOpen && "rotate-45",
                    )}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 -mt-1 text-sm text-white/60 text-pretty">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
