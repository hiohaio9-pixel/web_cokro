import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';


export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Vyplňte prosím všechna pole.');
      return;
    }
    setSending(true);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '258d2a29-8e46-42c7-83ca-43652c3d6a7d',
        name: form.name,
        email: form.email,
        message: form.message,
        subject: `Nová zpráva z webu COKRO od ${form.name}`,
      }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success('Zpráva byla odeslána! Ozveme se vám co nejdříve.');
      setForm({ name: '', email: '', message: '' });
    } else {
      toast.error('Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.');
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-foreground text-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
            Spojme se
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light">
            Kontakt
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl lg:text-3xl font-light mb-8 italic">
              Začněme tvořit
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium tracking-wide">COKRO</p>
                  <p className="font-body text-sm text-background/60 mt-1">
                    Květná 661<br />
                    691 25 Vranovice<br />
                    Jihomoravský kraj
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+420607776106"
                  className="font-body text-sm hover:text-accent transition-colors duration-300"
                >
                  607 776 106
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:cokro.eshop@gmail.com"
                  className="font-body text-sm hover:text-accent transition-colors duration-300"
                >
                  cokro.eshop@gmail.com
                </a>
              </div>
            </div>

            <div className="w-full h-px bg-background/10 mt-12" />

            <p className="font-body text-xs text-background/40 mt-6 leading-relaxed">
              Rádi vám poradíme s výběrem, opravou nebo výrobou kroje. 
              Neváhejte se ozvat — každá spolupráce začíná rozhovorem.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-background/50 mb-2 block">
                  Jméno
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Vaše jméno"
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent h-12 rounded-none font-body"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-background/50 mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vas@email.cz"
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent h-12 rounded-none font-body"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-background/50 mb-2 block">
                  Zpráva
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Vaše zpráva..."
                  rows={5}
                  className="bg-transparent border-background/20 text-background placeholder:text-background/30 focus:border-accent rounded-none font-body resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-14 bg-primary hover:bg-accent text-primary-foreground font-body text-xs tracking-[0.2em] uppercase rounded-none transition-all duration-500"
              >
                {sending ? 'Odesílám...' : 'Rychlý kontakt'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}