import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="https://media.base44.com/images/public/69e3402c3325c2718601fe8c/378d844fd_cokro_logo.png"
            alt="COKRO"
            className="h-8 w-auto brightness-0 invert opacity-70"
          />
        </div>

        <p className="font-body text-xs text-background/40 tracking-wider">
          © {new Date().getFullYear()} COKRO — Tradice, která žije v každém stehu
        </p>

        <a
          href="https://www.instagram.com/cokro_official/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-background/40 hover:text-accent transition-colors duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}