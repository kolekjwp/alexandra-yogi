import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 min-h-screen bg-cream pt-32 pb-20 px-6 sm:px-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-auto max-w-6xl"
      >
        <button 
            onClick={onBack}
            className="group mb-12 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
        >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.contactPage.back}
        </button>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Content */}
            <div className="space-y-12">
                <header>
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-editorial text-6xl sm:text-7xl lg:text-8xl text-primary leading-none"
                    >
                        {t.contactPage.title}<br />
                        <span className="italic text-accent">{t.contactPage.subtitle}</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-8 text-xl text-muted font-light leading-relaxed max-w-md"
                    >
                        {t.contactPage.desc}
                    </motion.p>
                </header>

                <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative aspect-[4/5] overflow-hidden rounded-[2rem] hidden lg:block"
                >
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGxhbnRzJTIwc3VubGlnaHQlMjBlc3RoZXRpY3xlbnwxfHx8fDE3NzE0OTU3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Yoga Studio Aesthetic"
                        width={1080}
                        height={1350}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Right Form */}
            <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-warm p-8 sm:p-12 rounded-[2rem]"
            >
                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-cream"
                        >
                            <Send className="h-8 w-8" />
                        </motion.div>
                        <h3 className="font-editorial text-3xl text-primary">{t.contactPage.successTitle}</h3>
                        <p className="text-muted">{t.contactPage.successDesc}</p>
                        <button 
                            onClick={() => { setIsSuccess(false); setFormState({ name: "", email: "", subject: "General Inquiry", message: "" }); }}
                            className="mt-8 border-b border-primary pb-1 text-primary text-sm uppercase tracking-widest hover:border-transparent hover:text-accent transition-all"
                        >
                            {t.contactPage.sendAnother}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-primary/60">{t.contactPage.name}</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:border-accent focus:outline-none transition-colors font-body text-lg"
                                placeholder={t.contactPage.namePlaceholder}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-primary/60">{t.contactPage.email}</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:border-accent focus:outline-none transition-colors font-body text-lg"
                                placeholder={t.contactPage.emailPlaceholder}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-xs uppercase tracking-widest text-primary/60">{t.contactPage.topic}</label>
                            <div className="relative">
                                <select 
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:border-accent focus:outline-none transition-colors font-body text-lg appearance-none cursor-pointer"
                                >
                                    <option value="General Inquiry">{t.contactPage.options.general}</option>
                                    <option value="Private Session">{t.contactPage.options.private}</option>
                                    <option value="Retreats">{t.contactPage.options.retreats}</option>
                                    <option value="Collaboration">{t.contactPage.options.collab}</option>
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest text-primary/60">{t.contactPage.message}</label>
                            <textarea 
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/20 py-3 text-primary focus:border-accent focus:outline-none transition-colors resize-none font-body text-lg"
                                placeholder={t.contactPage.messagePlaceholder}
                            />
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-cream py-4 rounded-full uppercase tracking-widest hover:bg-primary-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                            >
                                {isSubmitting ? t.contactPage.submitting : t.contactPage.submit}
                                {!isSubmitting && <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />}
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
