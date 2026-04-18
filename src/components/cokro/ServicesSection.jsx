import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, RefreshCw, Shirt, PenTool, Sparkles } from 'lucide-react';

const services = [
  { icon: Scissors, title: 'Výroba krojů na míru', description: 'Kompletní výroba tradičních krojů přesně podle vašich představ a tělesných měr.' },
  { icon: RefreshCw, title: 'Opravy a rekonstrukce', description: 'Šetrná oprava a obnova historických krojů s respektem k jejich původnímu charakteru.' },
  { icon: Shirt, title: 'Krojové oblečení', description: 'Moderní oblečení inspirované tradičními kroji pro každodenní i slavnostní nošení.' },
  { icon: PenTool, title: 'Výšivky', description: 'Ruční i strojové výšivky s tradičními moravskými motivy na míru.' },
  { icon: Sparkles, title: 'Doplňky inspirované folklorem', description: 'Originální doplňky, které propojují tradiční řemeslo s moderním stylem.' },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-36 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">Naše služby</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">Co děláme</h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30" />
              <img
                src="https://media.base44.com/images/public/69e3402c3325c2718601fe8c/ec45dc204_fotka_6.png"
                alt="Tradiční kroj"
                className="relative w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          {/* Services list */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="flex items-start gap-5 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-accent/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <Icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium mb-1">{service.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}