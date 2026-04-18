import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const kroje = [
  {
    region: 'Kyjov',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/32ae849fb_kyjovskpnsky.png',
      popis: 'Mužský kyjovský kroj je charakteristický tmavou modrou vestou bohatě zdobenou barevnou výšivkou a zlatými knoflíky, bílou vyšívanou košilí s krajkovými manžetami, tmavými kalhotami s červenou výšivkou a vysokými černými holínkami.',
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/00e001be9_kyjovsky_zensky.png',
      popis: 'Ženský kyjovský kroj tvoří bílý vyšívaný šátek s krajkou přes ramena, červený živůtek, černá sukně s bohatou barevnou květinovou výšivkou a červeným spodním lemem s krajkou. Doplňuje ho barevný věnec na hlavě.',
    },
  },
  {
    region: 'Vranovice',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f0c990123_vranovice_muzsky-2.png',
      popis: 'Mužský vranovický kroj je charakteristický tmavou vestou s bohatou zlatou výšivkou a řadami zlatých knoflíků, bílou lněnou košilí, světlými vlněnými kalhotami a vysokými černými botami s lidovými výšivkami.',
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/05662b664_vranovice_damsky.png',
      popis: 'Ženský vranovický kroj se skládá z bílé blůzy s krajkovými manžetami, červeného vyšívaného živůtku se zlatými detaily, černé saténové sukně s červenými pruhy a bílé vzorované spodní sukně s krajkou.',
    },
  },
  {
    region: 'Valašsko',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/92c3f802f_valasky_muzsky-2.png',
      popis: 'Mužský valašský kroj se vyznačuje bílou lněnou košilí, červeným sametovým živůtkem s barevnými knoflíky a výšivkou, tmavými soukenými kalhotami a tradičními krpci.',
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/0180554e0_valasky_zensky.png',
      popis: 'Ženský valašský kroj tvoří bílá vyšívaná blůza, tmavá sukně s barevnou tkanou zástěrou s geometrickými vzory a tmavý živůtek s lidovou výšivkou.',
    },
  },
];

function KrojCard({ kroj, gender, isInView, delay }) {
  const data = gender === 'muz' ? kroj.muz : kroj.zena;
  const label = gender === 'muz' ? 'Mužský' : 'Ženský';

  return (
    <motion.div
      className="group relative bg-black overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-black flex items-center justify-center">
        <img
          src={data.img}
          alt={`${label} kroj — ${kroj.region}`}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Labels */}
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-primary text-primary-foreground">
          {kroj.region}
        </span>
        <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-white/40 text-white/80">
          {label}
        </span>
      </div>

      {/* Description — appears on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="font-body text-xs text-white/80 leading-relaxed">
          {data.popis}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center mt-4 font-body text-[10px] tracking-[0.2em] uppercase text-accent hover:text-white transition-colors duration-300 group/link"
        >
          Chci na míru
          <span className="ml-2 w-4 h-px bg-accent group-hover/link:w-8 transition-all duration-500" />
        </a>
      </div>
    </motion.div>
  );
}

export default function KrojeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section id="kroje" className="py-24 lg:py-36 bg-black">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
              Naše kroje
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Kroje podle regionů
            </h2>
            <div className="w-16 h-px bg-primary mt-8" />
          </div>

          {/* Region Tabs */}
          <div className="flex gap-2">
            {kroje.map((k, i) => (
              <button
                key={k.region}
                onClick={() => setActive(i)}
                className={`font-body text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  active === i
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white/80'
                }`}
              >
                {k.region}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards — pair */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <KrojCard
            kroj={kroje[active]}
            gender="muz"
            isInView={isInView}
            delay={0.1}
          />
          <KrojCard
            kroj={kroje[active]}
            gender="zena"
            isInView={isInView}
            delay={0.25}
          />
        </div>

        {/* Navigation arrows — mobile */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:hidden">
          <button
            onClick={() => setActive((a) => (a - 1 + kroje.length) % kroje.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-body text-xs tracking-widest uppercase text-white/40">
            {active + 1} / {kroje.length}
          </span>
          <button
            onClick={() => setActive((a) => (a + 1) % kroje.length)}
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}