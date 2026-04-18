import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/cokro_official/';

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
            <Instagram className="w-4 h-4 inline-block mr-2 -mt-0.5" />
            @cokro_official
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
            Aktuálně z dílny
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/cokro_official/"
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
        </motion.div>

        <div className="text-center mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-accent transition-colors duration-500 group"
          >
            <Instagram className="w-4 h-4" />
            Sledovat na Instagramu
            <span className="w-6 h-px bg-primary group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
}