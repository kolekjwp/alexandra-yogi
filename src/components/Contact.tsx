import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:px-12 sm:py-32 text-center">
       <div className="relative z-10 mx-auto max-w-3xl">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mb-12 inline-block"
            >
                <span className="block text-8xl sm:text-9xl mb-4 animate-bounce-slow">🌸</span>
            </motion.div>

            <h2 className="mb-8 font-editorial text-5xl text-[#4A4A40] sm:text-7xl leading-tight tracking-wide">
                {t.contact.title} <br />
                <span className="italic text-[#B99C88]">{t.contact.subtitle}</span>
            </h2>

            <p className="mb-12 text-lg text-[#6B6B60] sm:text-xl">
                {t.contact.desc}
            </p>

            <motion.a
                href="mailto:hello@alexandrayogi.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-[#4A4A40] px-10 py-5 text-lg font-medium tracking-wide text-[#FDFBF7] transition-all hover:bg-[#5E5E52] shadow-lg shadow-[#4A4A40]/20"
            >
                hello@alexandrayogi.com
            </motion.a>

            <div className="mt-24 flex flex-col items-center justify-center gap-8 border-t border-[#4A4A40]/10 pt-12 text-[#8C8C80] sm:flex-row">
                <a href="#" className="hover:text-[#4A4A40] transition-colors">Instagram</a>
                <span className="hidden h-1 w-1 rounded-full bg-[#DCCBC1] sm:block"></span>
                <a href="#" className="hover:text-[#4A4A40] transition-colors">Insight Timer</a>
                <span className="hidden h-1 w-1 rounded-full bg-[#DCCBC1] sm:block"></span>
                <a href="#" className="hover:text-[#4A4A40] transition-colors">Spotify</a>
            </div>
            
            <p className="mt-12 text-xs uppercase tracking-[0.2em] text-[#4A4A40]/40">
                © {new Date().getFullYear()} Alexandra Yogi. {t.contact.copyright}
            </p>
       </div>
       
       {/* Decorative blob */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-[#EFECE4] rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
    </section>
  );
}
