import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const ALL_IMAGES = [
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/6e2e4a5e1_detail_vyivka.png', label: 'Detail výšivky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/495a13cdc_DSC_0679.jpg', label: 'Kroj s houslemi' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/ad44a4186_DSC_0698.jpg', label: 'Kroj s houslemi' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/40b7b05ee_DSC_38021.jpg', label: 'Krojová sukně' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/fdfff7064_DSC_4920.jpg', label: 'Valašský kroj' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/59fc38809_DSC_4943.jpg', label: 'Valašský kroj' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/5895c6ce0_DSC_5034.jpg', label: 'Skupinový kroj' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b335206b2_DSC_5055.jpg', label: 'Krojové oblečení' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/8a302af14_DSC_5374.jpg', label: 'Skupinový kroj' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/f72747802_DSC_5419.jpg', label: 'Krojová skupina' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/406560baf_DSC_5634.jpg', label: 'Skupinové foto' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b28ebb887_DSC_7046.jpg', label: 'Krojová dívka' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/44f93d2ee_fotka_6.png', label: 'Práce v dílně' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b6945435b_IMG_24662.jpg', label: 'Certifikát' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/dc3616e44_IMG_24803.jpg', label: 'Práce v dílně' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/d74341a9b_IMG_7658.jpg', label: 'Šití na stroji' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b32308fbe_IMG_7692.jpg', label: 'Krojové dívky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/0ba89936f_IMG_8566.jpg', label: 'Folklorní slavnost' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/4f0907497_IMG_9717.jpg', label: 'Vyšívaná peněženka' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/4969c3308_IMG_9720.jpg', label: 'Detail výšivky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/b41abcc14_IMG_9724.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/8e13a4bea_IMG_9725.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/1f933d409_IMG_9728.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/947bcb311_IMG_9729.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/5c97fa1ab_IMG_9734.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/55e067e37_IMG_9736.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/9f818c139_IMG_9740.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/a5c4458ec_IMG_9744.jpg', label: 'Vyšívaná taška' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/61f343b07_IMG_9745.jpg', label: 'Vyšívané doplňky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/3356e98f3_IMG_9748.jpg', label: 'Vyšívané doplňky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/a9d400159_IMG_9752.jpg', label: 'Vyšívané doplňky' },
  { url: 'https://media.base44.com/images/public/69e3402c3325c2718601fe8c/eca6fe610_latky.png', label: 'Látky' },
];

const PREVIEW_COUNT = 9;

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [albumOpen, setAlbumOpen] = useState(false);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + ALL_IMAGES.length) % ALL_IMAGES.length);
  const next = () => setLightboxIndex((i) => (i + 1) % ALL_IMAGES.length);

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeLightbox();
  };

  const previewImages = ALL_IMAGES.slice(0, PREVIEW_COUNT);

  return (
    <section id="gallery" className="py-24 lg:py-36 px-6 lg:px-12">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">Portfolio</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">Galerie prací</h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3">
          {previewImages.map((item, i) => (
            <motion.div
              key={i}
              className="overflow-hidden cursor-pointer group relative aspect-square"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={item.url}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-2 py-1 bg-background/90 border border-accent/40 font-body text-xs tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Album button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={() => setAlbumOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 group"
          >
            <Images className="w-4 h-4" />
            Celé album ({ALL_IMAGES.length} fotek)
            <span className="w-6 h-px bg-primary group-hover:bg-primary-foreground group-hover:w-10 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Album Modal */}
      {albumOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto" onClick={() => setAlbumOpen(false)}>
          <button
            className="fixed top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setAlbumOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl mx-auto px-4 py-16" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-2xl text-white text-center mb-8 font-light">Celé album</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {ALL_IMAGES.map((item, i) => (
                <div
                  key={i}
                  className="overflow-hidden cursor-pointer group relative aspect-square"
                  onClick={() => { setAlbumOpen(false); openLightbox(i); }}
                >
                  <img
                    src={item.url}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-2">
                    <span className="text-white/0 group-hover:text-white/90 font-body text-xs tracking-wide transition-colors duration-300">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={ALL_IMAGES[lightboxIndex].url}
            alt={ALL_IMAGES[lightboxIndex].label}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 font-body text-xs tracking-wider">
            {ALL_IMAGES[lightboxIndex].label} — {lightboxIndex + 1} / {ALL_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}