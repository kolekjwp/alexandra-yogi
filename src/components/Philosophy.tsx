import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

interface PhilosophyProps {
  onReadStory: () => void;
}

export function Philosophy({ onReadStory }: PhilosophyProps) {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="philosophy" className="px-6 py-24 sm:px-12 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        
        <div className="order-2 lg:order-1 relative">
             <motion.div 
                style={{ y, rotate }}
                className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl shadow-[#DCCBC1]/50"
            >
               <ImageWithFallback
                 src="https://images.unsplash.com/photo-1755223738985-d7ca7894cab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hvJTIweW9nYSUyMHdvbWFuJTIwc3Bpcml0dWFsJTIwYmVpZ2UlMjBhZXN0aGV0aWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                 alt="Woman in spiritual contemplation"
                 className="h-full w-full object-cover"
               />
            </motion.div>
            
            {/* Decorative Frame */}
            <div className="absolute top-8 -left-8 w-full h-full border border-[#4A4A40]/20 rounded-[3rem] -z-0" />
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2 text-center lg:text-left">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#B99C88]">
            {t.philosophy.label}
          </span>
          <h2 className="mb-8 font-editorial text-5xl text-[#4A4A40] sm:text-6xl lg:text-7xl leading-none tracking-wide">
            {t.philosophy.title} <br/> <span className="italic text-[#B99C88]">{t.philosophy.subtitle}</span>.
          </h2>
          <div className="space-y-6 text-lg text-[#6B6B60] leading-relaxed font-light">
            <p>
              {t.philosophy.p1}
            </p>
            <p>
              {t.philosophy.p2}
            </p>
          </div>
          
          <div className="mt-12 flex justify-center lg:justify-start">
               <button 
                  onClick={onReadStory}
                  className="group relative px-8 py-4 overflow-hidden rounded-full bg-[#4A4A40] text-[#F5F2EB] transition-all hover:bg-[#5e5e52]"
                >
                   <span className="relative z-10 text-sm uppercase tracking-widest">{t.philosophy.button}</span>
               </button>
          </div>
        </div>
      </div>
    </section>
  );
}
