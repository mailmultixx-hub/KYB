import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    { title: 'Transparency', desc: 'No hidden agendas. We believe in clear, verifiable data for every real estate professional.', icon: Eye },
    { title: 'Integrity', desc: 'We only partner with brokers who demonstrate a consistent track record of ethical behavior.', icon: ShieldCheck },
    { title: 'Community', desc: 'Real estate is about people. Our verification process involves direct community feedback.', icon: Heart },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 font-sans bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-3xl mb-16 md:mb-24 border-l-[6px] md:border-l-8 border-brand-brown pl-6 md:pl-12"
        >
          <span className="text-brand-brown font-extrabold tracking-[0.3em] text-[10px] uppercase mb-4 md:mb-6 block">The KYB Story</span>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-charcoal mb-6 md:mb-8 italic leading-tight uppercase tracking-tight">
            Building a Safer <br className="hidden sm:block" />
            <span className="text-brand-brown">Real Estate Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal/60 leading-relaxed font-light">
            Know Your Broker was founded in NCR on the simple belief that everyone deserves a safe and transparent experience when finding a home.
          </p>
        </motion.div>

        {/* Vision Section - Responsive Stack */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-32 md:mb-40">
          <div className="relative order-2 lg:order-1">
             <img
               src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop"
               className="rounded-sm shadow-2xl relative z-10 border border-brand-brown/10 w-full"
               referrerPolicy="no-referrer"
             />
             <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-64 md:w-96 h-64 md:h-96 bg-brand-brown/5 rounded-full blur-[80px] md:blur-[120px]" />
          </div>
          <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
            <div className="bg-white p-4 md:p-6 rounded-sm inline-flex text-brand-brown mb-2 md:mb-4 shadow-xl shadow-brand-brown/5 border border-brand-brown/10">
              <Target size={28} md:size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold italic leading-tight uppercase tracking-tight text-brand-charcoal">Our Vision</h2>
            <p className="text-base md:text-lg text-brand-charcoal/70 leading-relaxed font-light">
              We envision a future where "KYB Verified" is the global standard for trust in local real estate. A future where tenants can move into new societies with peace of mind.
            </p>
            <div className="space-y-4 md:space-y-6">
              {[
                "Locality-Specific Credibility Scoring",
                "Community-Driven Accountability",
                "Verified Agent Identity Protocol"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 text-[9px] md:text-[11px] text-brand-charcoal uppercase tracking-[0.2em] font-extrabold">
                  <div className="bg-brand-brown text-white p-1 rounded-sm shrink-0">
                    <ShieldCheck size={12} md:size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values - Grid adjustments */}
        <section className="bg-white rounded-sm p-8 md:p-24 mb-32 md:mb-40 shadow-2xl shadow-brand-brown/5 border border-brand-brown/10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-brand-brown" />
           <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 italic">The Values We Live By</h2>
             <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-extrabold text-brand-brown">Integrity • Transparency • Community</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
             {values.map((v, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="text-center group"
               >
                 <div className="bg-brand-beige w-16 md:w-20 h-16 md:h-20 rounded-sm flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-sm group-hover:bg-brand-brown group-hover:text-white transition-all duration-300">
                    <v.icon size={28} md:size={32} className="transition-colors" />
                 </div>
                 <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-5 italic text-brand-charcoal">{v.title}</h3>
                 <p className="text-xs md:text-sm text-brand-charcoal/60 leading-relaxed font-light">{v.desc}</p>
               </motion.div>
             ))}
           </div>
        </section>

        {/* CTA - Responsive button */}
        <div className="text-center border-t border-brand-brown/10 pt-16 md:pt-24 px-4">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 md:mb-10 italic text-brand-charcoal">Ready to set the standard?</h2>
          <a
            href="https://forms.gle/XRuUe62tY2c8nW4V6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-charcoal text-white px-8 md:px-12 py-4 md:py-5 rounded-sm font-extrabold text-[10px] tracking-[0.4em] uppercase hover:bg-brand-brown transition-all shadow-xl inline-flex items-center gap-3 md:gap-4 w-full sm:w-auto justify-center"
          >
            See Our Verification Criteria <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
