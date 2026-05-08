import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 md:px-12 bg-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-[100px] leading-[1] font-display font-bold mb-10 text-brand-charcoal tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Trust Built On <br />
              <span className="text-brand-brown italic">Ground Reality.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-brand-charcoal/60 font-sans max-w-2xl mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exposing the unverified. We perform rigorous multi-layer audits, including on-ground office inspections and document background checks, to secure your property journey in NCR.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link 
                to="/brokers"
                className="group relative bg-brand-charcoal text-white px-10 py-6 rounded-sm font-bold text-[11px] tracking-[0.4em] uppercase overflow-hidden shadow-2xl transition-all hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Browse Verified Brokers <ArrowRight size={14} />
                </span>
                <div className="absolute inset-0 bg-brand-brown translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a 
                href="https://forms.gle/XRuUe62tY2c8nW4V6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-brand-charcoal/20 text-brand-charcoal px-10 py-6 rounded-sm font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-brand-charcoal hover:text-white transition-all shadow-sm"
              >
                Apply for Verification
              </a>
            </motion.div>

            <motion.div 
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-brand-brown/10 pt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {[
                { label: 'Audit Layers', val: '04 Levels' },
                { label: 'Methodology', val: 'On-Ground' },
                { label: 'Security', val: 'Bank Grade' },
                { label: 'Region', val: 'NCR Hub' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-brand-brown mb-1">{stat.label}</div>
                  <div className="text-xl font-display font-medium text-brand-charcoal">{stat.val}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verification Layers Section */}
      <section className="py-24 bg-brand-charcoal text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-brown font-extrabold tracking-[0.3em] text-[10px] uppercase mb-4 block">The KYB Standard</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Elite multi-layered <br />verification process.</h2>
            </div>
            <p className="text-brand-beige/40 text-[11px] uppercase tracking-[0.3em] font-bold max-w-[200px] text-right">
              Built to withstand the most complex fraud attempts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Ground Intelligence', desc: 'Direct on-ground physical inspection of office premises and society presence.' },
              { title: 'Document Forensic', desc: 'Deep-dive background checks on registration, agency authorization, and legal standing.' },
              { title: 'Identity Integrity', desc: 'Biometric and government database cross-referencing for 100% identity certainty.' }
            ].map((pillar, i) => (
              <div key={i} className="group p-8 border border-white/10 rounded-sm hover:border-brand-brown transition-all relative overflow-hidden">
                <div className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4 transition-colors group-hover:text-brand-brown/20 leading-none">0{i+1}</div>
                <h4 className="text-xl font-bold mb-6 text-brand-brown">{pillar.title}</h4>
                <p className="text-brand-beige/60 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with Animated Reveal - Fixed word layout for mobile */}
      <section className="py-24 lg:py-32 px-6 md:px-12 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 lg:w-64 h-48 lg:h-64 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 border border-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-16 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="hidden sm:block h-px bg-brand-brown flex-grow max-w-[100px]" />
            <h2 className="text-brand-brown font-extrabold tracking-[0.4em] text-[10px] uppercase font-display">The Visionary Mission</h2>
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-serif italic leading-[1.2] lg:leading-[1.1] font-medium text-brand-beige/90">
              { "To eliminate real estate fraud and empower homeowners and tenants to connect only with verified professionals who respect the integrity of every home."
                .split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="inline-block mr-2 sm:mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-16 lg:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto bg-brand-brown p-10 md:p-16 lg:p-24 text-center text-white rounded-sm relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[10px] lg:border-[20px] border-white/5 rounded-full pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold italic mb-8 lg:mb-10 relative z-10 leading-tight">
            Are You a <br className="sm:hidden" />Professional Broker?
          </h2>
          <p className="text-lg lg:text-xl text-brand-beige/80 max-w-2xl mx-auto mb-10 lg:mb-16 relative z-10 leading-relaxed font-light">
            Join the elite circle of verified real estate professionals. Establish your credibility and build trust with every transaction.
          </p>
          <a
            href="https://forms.gle/XRuUe62tY2c8nW4V6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-charcoal text-white px-10 lg:px-16 py-5 lg:py-6 rounded-sm font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-brand-brown transition-all relative z-10 shadow-2xl w-full sm:w-auto"
          >
            Apply for Verification
          </a>
        </div>
      </section>
    </div>
  );
}
