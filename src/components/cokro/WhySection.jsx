import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Hand, Heart, Clock, Gem, Fingerprint } from 'lucide-react';

const reasons = [
  { icon: Hand, title: 'Ruční práce a detail', text: 'Každý steh je promyšlený, každý detail pečlivě zpracovaný.' },
  { icon: Fingerprint, title: 'Individuální přístup', text: 'Nasloucháme vašim přáním a vytváříme přesně podle vašich představ.' },
  { icon: Heart, title: 'Respekt k tradici', text: 'Ctíme odkaz našich předků a zachováváme autentické postupy.' },
  { icon: Clock, title: 'Dlouholeté zkušenosti', text: 'Více než 20 let praxe v krojovém řemesle.' },
  { icon: Gem, title: 'Originální tvorba', text: 'Žádné dva kusy nejsou stejné — každý je unikát.' },
];

export default function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" className="py-24 lg:py-36 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
            Proč si vybrat nás
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
            Proč COKRO
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-accent/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                  <Icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}