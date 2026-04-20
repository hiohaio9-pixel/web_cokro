import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const kroje = [
  {
    region: 'Kyjov',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/32ae849fb_kyjovskpnsky.png',
      polozky: [
        { nazev: 'Košile (košula)', popis: 'Bílá plátěná košile s vyšívanými rukávy a límcem. Manžety se stahují černou tkanicí.' },
        { nazev: 'Kordulka (vesta)', popis: 'Bohatě vyšívaná vesta, často červené, modré nebo černé barvy, nosí se přes košili.' },
        { nazev: 'Nohavice (kalhoty)', popis: 'Tmavomodré úzké soukenné kalhoty, nosí se zastrčené do bot.' },
        { nazev: 'Čižmy (holínky)', popis: 'Vysoké černé kožené boty, často vrapené (skládané).' },
        { nazev: 'Klobúk (klobouk)', popis: 'Černý klobouk, obvykle ozdobený šňůrkami, stužkami nebo kosárkem (paví pera).' },
        { nazev: 'Šátek', popis: 'Vyšívaný šátek, který si svobodní mládenci (stárci) provlékají za pas.' },
        { nazev: 'Mašle a kokardy', popis: 'Hodové kytky a mašle darované od stárky, připevněné na kordulce a holínkách.' },
      ],
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/c520efac2_kyjovsky_zensky.png',
      polozky: [
        { nazev: 'Rukávce', popis: 'Bílé plátěné rukávce s bohatou černou výšivkou na límci a rukávech, lemované černou krajkou „smrťovou".' },
        { nazev: 'Kordulka (vesta)', popis: 'Černá brokátová vesta bohatě zdobená červenou, případně barevnou výšivkou a flitry.' },
        { nazev: 'Sukně', popis: 'Vlněná sukně nejčastěji červené barvy, po obvodu zdobená bohatou žlutobílou výšivkou s motivy kvítků.' },
        { nazev: 'Fěrtoch (zástěra)', popis: 'Pestře vyšitá zástěra zakončená na spodním okraji paličkovanou krajkou.' },
        { nazev: 'Spodničky', popis: 'Pod sukní se nosí několik naškrobených spodniček (často 3), které kroji dodávají objem.' },
        { nazev: 'Úprava hlavy', popis: 'Čepec (vdané ženy) s uvázaným tureckým šátkem.' },
        { nazev: 'Obuv', popis: 'Vysoké vrapené kožené boty (kordovánky, krabůvky).' },
      ],
    },
  },
  {
    region: 'Vranovice',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f0c990123_vranovice_muzsky-2.png',
      polozky: [
        { nazev: 'Vesta', popis: 'Tm. modrá nebo černá, žlutě vyšívané dírky, zlaté knoflíky. Materiál: sukno vlněné.' },
        { nazev: 'Košile', popis: 'Plátěná, nabírané rukávy.' },
        { nazev: 'Kalhoty', popis: 'Kožené, jelenicové nebo dyftýnové, končí pod koleny vyšívaným úvazem.' },
        { nazev: 'Na nohou', popis: 'Modré podkolenice, vysoké černé kožené boty.' },
        { nazev: 'Kolem krku', popis: 'Černý flór (šátek).' },
        { nazev: 'Na hlavě', popis: 'Černý klobouk se širokou krempou.' },
      ],
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b7eb6f8af_vranovice_damsky.png',
      polozky: [
        { nazev: 'Bílé rukávce', popis: 'Plátěné s krajkou na rukávech a kolem krku.' },
        { nazev: 'Kordulka (vesta)', popis: 'Brokátová, kolem výstřihu naskládané mašle, zlaté knoflíčky, žlutě vyšívané dírky.' },
        { nazev: 'Zadní sukně', popis: 'Plátěná — drobné květiny, modrotisk nebo kanafas proužky.' },
        { nazev: 'Zástěra', popis: 'Jednobarevná, uprostřed sešitá ozdobnými stehy. Materiál: satén, taft, hedvábí.' },
        { nazev: 'Na nohou', popis: 'Bílé podkolenky a střevíce — černé s mašlí a širokou sponou.' },
        { nazev: 'Úprava hlavy', popis: 'Svobodná: věneček, drdol. Vdaná: turecký šátek vypodložený bílým plátěným šátkem.' },
      ],
    },
  },
  {
    region: 'Valašsko',
    muz: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/92c3f802f_valasky_muzsky-2.png',
      polozky: [
        { nazev: 'Košile', popis: 'Bílá plátěná nebo lněná košile, drobná výšivka kolem krku.' },
        { nazev: 'Frýdka (vesta)', popis: 'Tm. červené sukno, zdobená šňůrováním (barva dle oblasti), zlaté knoflíčky a výšivka.' },
        { nazev: 'Kalhoty', popis: 'Vlněné sukno barva hřebíčková, opásané řemenem.' },
        { nazev: 'Na nohou', popis: 'Vlněné kopice a kožené krpce.' },
      ],
    },
    zena: {
      img: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/64c734453_valasky_zensky.png',
      polozky: [
        { nazev: 'Rukávce', popis: 'Bílé plátno zdobené jemnou výšivkou kolem krku a na ramenou.' },
        { nazev: 'Frýdka (vesta)', popis: 'Červené sukno, zelené lemování, filigránové knoflíky.' },
        { nazev: 'Zadní sukně', popis: 'Plátěná — bílá — kanafas.' },
        { nazev: 'Zástěra', popis: 'Modrotisk.' },
      ],
    },
  },
];

// imgGender = pohlaví zobrazeného obrázku (front)
// textGender = pohlaví textu na rubu (back)
// isFlipped = řídí flip zvenku (desktop) nebo zevnitř (mobil)
function KrojCard({ kroj, imgGender, textGender, isInView, delay, onHoverChange, desktopFlipped }) {
  const imgData = imgGender === 'muz' ? kroj.muz : kroj.zena;
  const textData = textGender === 'muz' ? kroj.muz : kroj.zena;
  const imgLabel = imgGender === 'muz' ? 'Mužský' : 'Ženský';
  const textLabel = textGender === 'muz' ? 'Mužský' : 'Ženský';

  const [flipped, setFlipped] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
  const isFlipped = isMobile ? flipped : !!desktopFlipped;

  return (
    <motion.div
      className="aspect-[3/4] cursor-pointer"
      style={{ perspective: '1200px' }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => { if (isMobile) setFlipped((f) => !f); }}
      onMouseEnter={() => { if (!isMobile && onHoverChange) onHoverChange(true); }}
      onMouseLeave={() => { if (!isMobile && onHoverChange) onHoverChange(false); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT — obrázek */}
        <div
          className="absolute inset-0 bg-black overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={imgData.img}
            alt={`${imgLabel} kroj — ${kroj.region}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain opacity-90"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-primary text-primary-foreground">
              {kroj.region}
            </span>
            <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-white/40 text-white/80">
              {imgLabel}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 sm:hidden">
            <span className="font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 bg-black/60 border border-white/20 text-white/60">
              Klikněte pro detail
            </span>
          </div>
        </div>

        {/* BACK — text */}
        <div
          className="absolute inset-0 bg-foreground overflow-y-auto p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="mb-5">
            <div className="flex gap-2 mb-3">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 bg-primary text-primary-foreground">
                {kroj.region}
              </span>
              <span className="font-body text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-background/30 text-background/70">
                {textLabel}
              </span>
            </div>
            <div className="w-8 h-px bg-accent" />
          </div>

          <ul className="flex-1 space-y-3">
            {textData.polozky.map((item, i) => (
              <li key={i} className="border-b border-background/10 pb-3 last:border-0">
                <p className="font-body text-[11px] tracking-[0.12em] uppercase text-accent mb-0.5">
                  {item.nazev}
                </p>
                <p className="font-body text-xs text-background/70 leading-relaxed">
                  {item.popis}
                </p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center mt-5 font-body text-[10px] tracking-[0.2em] uppercase text-accent hover:text-background transition-colors duration-300 group/link"
          >
            Chci na míru
            <span className="ml-2 w-4 h-px bg-accent group-hover/link:w-8 transition-all duration-500" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function KrojeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  // desktop: která karta je hovered (null | 'muz' | 'zena')
  const [hoveredGender, setHoveredGender] = useState(null);

  // Na desktopu: najetím na pánskou kartu se otočí dámská (zobrazí pánský popis) a naopak
  const muzFlipped = hoveredGender === 'zena';
  const zenaFlipped = hoveredGender === 'muz';

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
          {/* Pánská karta: obrázek pánský, text dámský */}
          <KrojCard
            kroj={kroje[active]}
            imgGender="muz"
            textGender="zena"
            isInView={isInView}
            delay={0.1}
            desktopFlipped={muzFlipped}
            onHoverChange={(h) => setHoveredGender(h ? 'muz' : null)}
          />
          {/* Dámská karta: obrázek dámský, text pánský */}
          <KrojCard
            kroj={kroje[active]}
            imgGender="zena"
            textGender="muz"
            isInView={isInView}
            delay={0.25}
            desktopFlipped={zenaFlipped}
            onHoverChange={(h) => setHoveredGender(h ? 'zena' : null)}
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