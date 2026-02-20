import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Sun, Moon, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const offerings = [
    {
      icon: Sun,
      title: t.services.morningFlow.title,
      description: t.services.morningFlow.desc,
      price: t.services.morningFlow.price
    },
    {
      icon: Moon,
      title: t.services.yinRestore.title,
      description: t.services.yinRestore.desc,
      price: t.services.yinRestore.price
    },
    {
      icon: Star,
      title: t.services.soulCoaching.title,
      description: t.services.soulCoaching.desc,
      price: t.services.soulCoaching.price
    },
    {
      icon: Heart,
      title: t.services.retreats.title,
      description: t.services.retreats.desc,
      price: t.services.retreats.price
    }
  ];

  return (
    <section id="services" className="px-6 py-24 sm:px-12 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                {t.services.label}
            </span>
            <h2 className="font-editorial text-5xl text-primary sm:text-6xl uppercase tracking-wider">
                {t.services.title}
            </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offer, index) => (
            <motion.a
              key={offer.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2rem] bg-cream p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-rose/30"
            >
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary group-hover:bg-rose transition-colors">
                  <offer.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-editorial text-2xl text-primary uppercase tracking-wide">
                    {offer.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-muted">
                    {offer.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t border-primary/10 pt-6">
                <span className="font-medium text-primary">{offer.price}</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary transition-all group-hover:bg-primary group-hover:text-cream">
                    <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
