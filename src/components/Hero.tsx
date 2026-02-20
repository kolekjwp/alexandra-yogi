import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-cream px-4 py-20 text-primary sm:px-8">
      
      {/* Decorative background elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-sand blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-rose blur-[150px]" 
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-center gap-4 sm:gap-8">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="self-start relative z-20"
        >
            <h1 className="font-editorial text-[12vw] leading-[0.9] tracking-wide italic text-primary sm:text-[14vw]">
                {t.hero.your}
            </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="self-center relative z-20"
        >
             <h1 className="font-editorial text-[12vw] leading-[0.9] tracking-wide text-primary sm:text-[14vw]">
                {t.hero.spiritual}
            </h1>
        </motion.div>

        <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
             className="self-end relative z-20"
        >
            <h1 className="font-editorial text-[12vw] leading-[0.9] tracking-wide italic text-accent sm:text-[14vw]">
                {t.hero.bestie}
            </h1>
        </motion.div>
      </div>

      {/* Hero Image - Bottom Left */}
      <motion.div 
        style={{ y }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-0 w-[40vw] max-w-[500px] min-w-[280px] opacity-80 mix-blend-multiply pointer-events-none"
      >
         <div className="relative w-full aspect-[3/4] overflow-hidden rounded-tr-[100px]">
             <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent z-10" />
             <ImageWithFallback
                src="https://images.unsplash.com/photo-1664747315593-91e13fc2adeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2hvJTIweW9nYSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzYzNjQ0NzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Yoga Teacher"
                width={1080}
                height={1440}
                className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
             />
         </div>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ opacity }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
          <p className="max-w-xs text-center text-sm font-medium uppercase tracking-[0.2em] text-muted sm:text-base">
            {t.hero.guide}
          </p>
      </motion.div>
    </section>
  );
}
