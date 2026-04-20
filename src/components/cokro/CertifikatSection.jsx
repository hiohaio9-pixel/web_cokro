import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function CertifikatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-36 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
            Certifikát kvality
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
            Brněnsko — originální produkt
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text + logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <img
              src="https://media.base44.com/images/public/69e3402c3325c2718601fe8c/6e0549709_0c958611-995e-11eb-ad1a-00155d09326e-brnensko-op-logo.png"
              alt="Brněnsko originální produkt"
              className="h-32 w-auto mb-10 object-contain"
            />

            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
              Jsme hrdými držiteli certifikátu <strong className="text-foreground">Brněnsko — originální produkt</strong>,
              který uděluje MAS (Místní akční skupina) Slavkovské bojiště, z.s.
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              MAS je společenství občanů, neziskových organizací, soukromé podnikatelské sféry
              a veřejné správy, které spolupracují na rozvoji venkova, zemědělství a při získávání
              finanční podpory z EU a z národních programů pro svůj region. Díky úzkému partnerství
              zemědělců, podnikatelů, institucí a všech obyvatel obcí — na principech metody LEADER —
              dochází k udržitelnému rozvoji venkova a růstu kvality života ve venkovském prostoru.
            </p>

            <a
              href="https://www.podbrnensko.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-300 group"
            >
              www.podbrnensko.cz
              <ExternalLink className="w-3 h-3" />
              <span className="ml-1 w-6 h-px bg-primary group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
            </a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border border-accent/30" />
              <img
                src="https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3ff161d41_IMG_24662.jpg"
                alt="Jana Coufalová s certifikátem Brněnsko originální produkt"
                loading="lazy"
                decoding="async"
                className="relative w-full aspect-[3/4] object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}