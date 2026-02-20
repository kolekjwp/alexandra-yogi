import React from "react";
import Slider from "react-slick";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MoveHorizontal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const images = [
  { src: "https://images.unsplash.com/photo-1677741447423-a2dded1b9495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0JTIwYm9obyUyMGFlc3RoZXRpYyUyMG91dGRvb3J8ZW58MXx8fHwxNzYzNjQ1MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Yoga instructor outdoor portrait in boho aesthetic" },
  { src: "https://images.unsplash.com/photo-1707257969667-68804d47f5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3RyZXRjaGluZyUyMHN1bnJpc2UlMjBuYXR1cmUlMjBib2hvfGVufDF8fHx8MTc2MzY0NTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Yoga stretching at sunrise in nature" },
  { src: "https://images.unsplash.com/photo-1728547066727-f3bc117738e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd29tYW4lMjBjbG9zZSUyMHVwJTIwc2VyZW5lJTIwYm9ob3xlbnwxfHx8fDE3NjM1Njc2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Serene woman in meditation close-up" },
  { src: "https://images.unsplash.com/photo-1632182591734-633b89f42d17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMGFydGlzdGljJTIwbGlnaHQlMjBib2hvfGVufDF8fHx8MTc2MzY0NTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "Artistic yoga pose in soft boho light" },
];

export function Gallery() {
  const { t } = useLanguage();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        }
      }
    ]
  };

  return (
    <section id="stories" className="py-24 overflow-hidden bg-cream relative">
      <div className="mb-12 text-center flex flex-col items-center gap-4">
        <h2 className="font-editorial text-4xl text-primary sm:text-5xl tracking-wide">
           {t.gallery.title}
        </h2>
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent text-sm tracking-widest uppercase"
        >
             <MoveHorizontal className="w-4 h-4 animate-pulse" />
             <span>{t.gallery.drag}</span>
             <MoveHorizontal className="w-4 h-4 animate-pulse" />
        </motion.div>
      </div>

      <div className="px-4 cursor-grab active:cursor-grabbing">
        <Slider {...settings} className="gallery-slider">
          {images.map((image, index) => (
            <div key={index} className="px-4 outline-none">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg shadow-rose/30 group"
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  width={1080}
                  height={1440}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        /* Slick Slider Base Styles */
        .slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
        .slick-list{position:relative;display:block;overflow:visible;margin:0;padding:0}
        .slick-list:focus{outline:0}
        .slick-list.dragging{cursor:pointer;cursor:hand}
        .slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
        .slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
        .slick-track:before,.slick-track:after{display:table;content:''}
        .slick-track:after{clear:both}
        .slick-loading .slick-track{visibility:hidden}
        .slick-slide{display:none;float:left;height:100%;min-height:1px}
        [dir='rtl'] .slick-slide{float:right}
        .slick-slide img{display:block}
        .slick-slide.slick-loading img{display:none}
        .slick-slide.dragging img{pointer-events:none}
        .slick-initialized .slick-slide{display:block}
        .slick-loading .slick-slide{visibility:hidden}
        .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
        .slick-arrow.slick-hidden{display:none}
        
        /* Dots Styles */
        .slick-dots {
            display: block;
            list-style: none;
            text-align: center;
            padding: 0;
            margin: 2rem 0 0 0;
            width: 100%;
        }
        .slick-dots li {
            display: inline-block;
            margin: 0 4px;
        }
        .slick-dots li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 12px;
            height: 12px;
            padding: 0;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background: transparent;
            position: relative;
        }
        .slick-dots li button:before {
          content: '•';
          font-size: 20px;
          line-height: 20px;
          color: var(--color-rose);
          opacity: 0.5;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .slick-dots li.slick-active button:before {
          color: var(--color-accent);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
