import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Detail tradiční výšivky"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-12 lg:left-24 w-px h-32 bg-accent/30" />
      <div className="absolute bottom-0 right-12 lg:right-24 w-px h-32 bg-accent/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-white/70 mb-6">
            COKRO — Tradiční řemeslo
          </p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] max-w-4xl">
            Tradice, která žije
            <br />
            <span className="italic text-accent">v každém stehu</span>
          </h1>

          <p className="font-body text-sm sm:text-base text-white/70 mt-8 max-w-xl leading-relaxed tracking-wide">
            Výroba krojů, krojového oblečení a doplňků inspirovaných folklorem
          </p>

          <a
            href="#contact"
            className="inline-flex items-center mt-10 px-8 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-500 group"
          >
            Kontaktujte nás
            <span className="ml-3 w-6 h-px bg-primary-foreground/60 group-hover:w-10 transition-all duration-500" />
          </a>
        </motion.div>
      </div>

      {/* Brněnsko logo */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-10">
        <img
          src="https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f09d738b0_mas_bl.png"
          alt="Brněnsko originální produkt"
          className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}