import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/cokro_official/';
const FACEBOOK_URL = 'https://www.facebook.com/COKRO.original/';

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const fbContainerRef = useRef(null);
  const [fbWidth, setFbWidth] = useState(500);

  useEffect(() => {
    if (!fbContainerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = Math.floor(entries[0].contentRect.width);
      setFbWidth(Math.min(Math.max(width, 280), 500));
    });
    observer.observe(fbContainerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Instagram embed
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }


  }, []);

  return (
    <section className="py-24 lg:py-36 bg-secondary/50">

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.35em] uppercase text-accent hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
              @cokro_official
            </a>
            <span className="text-accent/40">|</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.35em] uppercase text-accent hover:text-primary transition-colors duration-300"
            >
              <Facebook className="w-4 h-4" />
              COKRO.original
            </a>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
            Aktuálně z dílny
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        {/* Embeds — side by side */}
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Instagram */}
          <div className="w-full flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={INSTAGRAM_URL}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '0 auto',
                maxWidth: '540px',
                minWidth: '326px',
                padding: '0',
                width: '100%',
              }}
            />
          </div>

          {/* Facebook iframe embed */}
          <div ref={fbContainerRef} className="w-full flex justify-center overflow-hidden">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FACEBOOK_URL)}&tabs=timeline&width=${fbWidth}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
              width={fbWidth}
              height="600"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook COKRO"
            />
          </div>
        </motion.div>

        {/* Links */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-500 group"
          >
            <Instagram className="w-4 h-4" />
            Instagram
            <span className="w-6 h-px bg-primary group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-500 group"
          >
            <Facebook className="w-4 h-4" />
            Facebook
            <span className="w-6 h-px bg-primary group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}