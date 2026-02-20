import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Story } from "./components/Story";
import { ContactPage } from "./components/ContactPage";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

function MainApp() {
  const [view, setView] = useState<"home" | "story" | "contact">("home");
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    if (view === "home" && targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setTargetSection(null);
    } else if (view === "home" && targetSection === "") {
       window.scrollTo({ top: 0, behavior: "smooth" });
       setTargetSection(null);
    }
  }, [view, targetSection]);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "contact") {
      setView("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (view !== "home") {
      setView("home");
      setTargetSection(sectionId);
    } else {
      if (sectionId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-primary selection:bg-rose selection:text-primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-cream focus:px-4 focus:py-2 focus:rounded-full">
        Skip to content
      </a>
      <Header onNavigate={handleNavigate} />
      <main id="main-content">
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Philosophy onReadStory={() => {
                  setView("story");
                  window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
              <Gallery />
              <Services />
              <Contact />
            </motion.div>
          ) : view === "story" ? (
            <motion.div
              key="story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Story onBack={() => setView("home")} />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactPage onBack={() => setView("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
