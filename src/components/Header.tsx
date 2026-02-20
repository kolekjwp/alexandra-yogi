import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4A4A40]">
    {/* Moon */}
    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.5 22 14.9 21.6 16.2 20.9C15.4 20.96 14.7 21 14 21C9.02944 21 5 16.9706 5 12C5 7.02944 9.02944 3 14 3C14.7 3 15.4 3.04 16.2 3.1C14.9 2.4 13.5 2 12 2Z" fill="currentColor" />
    {/* Eye Shape */}
    <path d="M18 8C15 8 12 10 11 12C12 14 15 16 18 16C21 16 24 14 25 12C24 10 21 8 18 8ZM18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14Z" fill="currentColor" />
    {/* Eye Markings (Horus style) */}
    <path d="M18 16V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 19L20 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M24 12L28 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { title: t.header.about, href: "#philosophy" },
    { title: t.header.offerings, href: "#services" },
    { title: t.header.journal, href: "#stories" },
    { title: t.header.connect, href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-8 text-[#4A4A40]"
      >
        <a href="#" onClick={(e) => handleNavigation(e, '#')} className="flex items-center gap-3 group">
          <motion.div
             whileHover={{ rotate: 180 }}
             transition={{ duration: 0.5 }}
          >
            <LogoIcon />
          </motion.div>
          <div className="text-2xl font-editorial italic tracking-widest relative">
             <span className="relative z-10">ALEXANDRA YOGI.</span>
             <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#4A4A40] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        <div className="flex items-center gap-6">
            <button
                onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-all hover:text-[#B99C88]"
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:block">{language === 'en' ? 'EN' : 'PL'}</span>
            </button>

            <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 mix-blend-difference"
            >
            <span className="hidden text-xs uppercase tracking-[0.2em] transition-all group-hover:tracking-[0.3em] sm:block">
                {t.header.menu}
            </span>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#4A4A40]/20 transition-transform duration-500 group-hover:rotate-90 group-hover:border-[#4A4A40]">
                <Menu className="h-4 w-4" />
            </div>
            </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#F5F2EB]/95 backdrop-blur-sm text-[#4A4A40]"
          >
            <div className="flex justify-end p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3"
              >
                <span className="text-xs uppercase tracking-[0.2em]">{t.header.close}</span>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#4A4A40]/20 transition-transform duration-500 group-hover:rotate-90 group-hover:border-[#4A4A40]">
                    <X className="h-4 w-4" />
                </div>
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative font-editorial text-5xl sm:text-7xl italic tracking-wider text-[#4A4A40] transition-colors"
                >
                  <span className="relative z-10 group-hover:text-[#B99C88] transition-colors duration-500 uppercase">{item.title}</span>
                  <motion.span
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F5F2EB] opacity-0 text-[120px] font-sans font-bold pointer-events-none select-none z-0 group-hover:opacity-10"
                  >
                    {index + 1}
                  </motion.span>
                </motion.a>
              ))}
            </nav>

            <div className="p-12 text-center text-xs uppercase tracking-[0.2em] text-[#4A4A40]/60">
              <p>{t.header.grounded}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
