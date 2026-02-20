import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface StoryProps {
  onBack: () => void;
}

export function Story({ onBack }: StoryProps) {
  const { t } = useLanguage();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-cream pt-32 pb-20 px-6 sm:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-auto max-w-5xl"
      >
        <button 
            onClick={onBack}
            className="group mb-12 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
        >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.story.back}
        </button>

        <header className="mb-24 text-center">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-editorial text-6xl sm:text-8xl lg:text-9xl text-primary"
            >
                {t.story.title}
            </motion.h1>
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl text-accent italic font-editorial"
            >
                {t.story.subtitle}
            </motion.p>
        </header>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-[2rem]"
            >
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1712257159639-3d3c8320bfc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBpbnN0cnVjdG9yJTIwcG9ydHJhaXQlMjBoYXBweSUyMG5hdHVyYWx8ZW58MXx8fHwxNzcxNDk1NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Alexandra meditating"
                    width={1080}
                    height={1440}
                    className="h-full w-full object-cover"
                />
            </motion.div>

            <div className="space-y-8 text-lg leading-relaxed text-muted font-light">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-4xl float-left mr-2 mt-[-10px] font-editorial text-primary">I</span> {t.story.p1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {t.story.p2}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    {t.story.p3}
                </motion.p>
            </div>
        </div>

        <div className="my-32">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                 <div className="aspect-square overflow-hidden rounded-2xl">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1605958031637-ae1ce21c9daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdyaXRpbmclMjBqb3VybmFsJTIwY296eSUyMHdpbmRvdyUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE0OTU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Journaling"
                        width={1080}
                        height={1080}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 <div className="aspect-square overflow-hidden rounded-2xl sm:mt-12">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1763202370511-c9ca7580adfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWwlMjBmb3Jlc3R8ZW58MXx8fHwxNzcxNDk1Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Nature"
                        width={1080}
                        height={1080}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                 </div>
            </motion.div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-editorial text-4xl sm:text-6xl text-primary mb-8">{t.story.missionTitle}</h2>
            <p className="text-xl text-muted leading-relaxed mb-12">
                {t.story.missionText}
            </p>
            <p className="text-lg font-editorial italic text-accent">
                "{t.story.quote}"
            </p>
            
            <div className="mt-16">
                <button 
                    onClick={onBack}
                    className="inline-block border-b border-primary pb-1 text-primary text-sm uppercase tracking-widest hover:border-transparent hover:text-accent transition-all"
                >
                    {t.story.returnHome}
                </button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
