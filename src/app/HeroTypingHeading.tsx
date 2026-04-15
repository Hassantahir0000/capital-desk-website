"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";

const LINE1 = "The Capital Desk Underwriting";
const LINE2 = "Calculator is launching in beta";
const CHAR_MS = 40;
const PAUSE_BETWEEN_LINES_MS = 320;

const fullLabel = `${LINE1} ${LINE2}`;

type HeroTypingHeadingProps = {
  variants: Variants;
  className?: string;
};

export default function HeroTypingHeading({ variants, className }: HeroTypingHeadingProps) {
  const [line1Len, setLine1Len] = useState(0);
  const [line2Len, setLine2Len] = useState(0);
  const [showCaret, setShowCaret] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setLine1Len(LINE1.length);
      setLine2Len(LINE2.length);
      setShowCaret(false);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const clear = () => {
      if (timeoutId) clearTimeout(timeoutId);
    };

    const schedule = (fn: () => void, ms: number) => {
      clear();
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    let i = 0;
    const typeLine1 = () => {
      if (cancelled) return;
      i += 1;
      if (i <= LINE1.length) {
        setLine1Len(i);
        schedule(typeLine1, CHAR_MS);
      } else {
        schedule(startLine2, PAUSE_BETWEEN_LINES_MS);
      }
    };

    let j = 0;
    const typeLine2 = () => {
      if (cancelled) return;
      j += 1;
      if (j <= LINE2.length) {
        setLine2Len(j);
        schedule(typeLine2, CHAR_MS);
      } else {
        schedule(() => setShowCaret(false), 900);
      }
    };

    const startLine2 = () => {
      if (cancelled) return;
      j = 0;
      typeLine2();
    };

    schedule(typeLine1, 180);

    return () => {
      cancelled = true;
      clear();
    };
  }, [reducedMotion]);

  return (
    <motion.h1
      variants={variants}
      aria-label={fullLabel}
      className={[
        "font-['Faktum_Test'] text-3xl sm:text-4xl lg:text-[48px] leading-tight text-[#1A3347] font-bold tracking-tight mb-4 sm:mb-6 px-4",
        "min-h-[4.75rem] sm:min-h-[5.5rem] lg:min-h-[7rem]",
        className ?? "",
      ].join(" ")}
    >
      <span aria-hidden="true" className="inline-block">
        {LINE1.slice(0, line1Len)}
        <br />
        {LINE2.slice(0, line2Len)}
        <span
          className={[
            "inline-block align-baseline ml-0.5 w-[3px] sm:w-[3px] h-[0.85em] rounded-sm bg-[#007BDA] translate-y-[0.06em]",
            "shadow-[0_0_12px_rgba(0,123,218,0.45)]",
            "transition-opacity duration-500",
            showCaret ? "opacity-100 [animation:hero-caret-blink_1.05s_ease-in-out_infinite]" : "opacity-0",
          ].join(" ")}
          aria-hidden="true"
        />
      </span>
    </motion.h1>
  );
}
