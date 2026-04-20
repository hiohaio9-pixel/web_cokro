import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection({ aboutImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-36 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30" />
              <img
                src={aboutImage}
                alt="Práce v dílně COKRO"
                loading="lazy"
                decoding="async"
                className="relative w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
              O značce
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Příběh COKRO
            </h2>

            <div className="w-16 h-px bg-primary mt-8 mb-8" />

            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              COKRO vzniklo z lásky k tradici, řemeslu a detailu. Za značkou stojí
              švadlena a vyšívačka Jana Coufalová, která propojuje historii
              s&nbsp;dnešní dobou.
            </p>

            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mt-6">
              Každý kus je originál — ručně i strojově zpracovaný s&nbsp;důrazem
              na kvalitu, detail a respekt k tradici. Naše práce oživuje
              tradiční moravské krojové řemeslo v&nbsp;moderním kontextu.
            </p>

            <div className="flex items-center gap-8 mt-12">
              <div>
                <span className="font-display text-3xl lg:text-4xl text-primary">20+</span>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">let zkušeností</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="font-display text-3xl lg:text-4xl text-primary">100%</span>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">originální tvorba</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}