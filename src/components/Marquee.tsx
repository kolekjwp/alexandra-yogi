import React from "react";
import { motion } from "motion/react";

interface MarqueeProps {
  text: string;
  className?: string;
  repeat?: number;
}

export function Marquee({ text, className = "", repeat = 4 }: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden bg-[#B99C88] py-4 text-[#F5F2EB] ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8 text-sm uppercase tracking-[0.3em] font-medium">
            {text} — {text} —
          </span>
        ))}
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap absolute top-4 left-full"
        animate={{ x: "-150%" }}
        transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
        }}
      >
           {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="mx-8 text-sm uppercase tracking-[0.3em] font-medium">
            {text} — {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
}
