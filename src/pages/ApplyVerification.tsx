import { motion } from 'motion/react';
import { ShieldCheck, Send, Info, MapPin } from 'lucide-react';

export default function ApplyVerification() {
  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 md:px-12 bg-brand-beige min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 md:mb-20 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-2 bg-brand-brown/10 text-brand-brown text-[10px] font-extrabold tracking-[0.3em] uppercase rounded-full"
          >
            Elite Network Application
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-brand-charcoal italic leading-tight">
            Join the <span className="text-brand-brown">Verified</span> <br className="hidden md:block" /> Circle.
          </h1>
          <p className="text-lg md:text-xl text-brand-charcoal/60 leading-relaxed max-w-2xl font-light">
            Start your journey towards ultimate professional credibility. Our verification process is rigorous because excellence is non-negotiable.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white p-6 md:p-12 rounded-sm border border-brand-brown/10 shadow-2xl order-1"
          >
            <div className="space-y-8">
              <div className="bg-brand-brown/5 p-8 md:p-12 border-2 border-dashed border-brand-brown/20 rounded-sm text-center">
                <ShieldCheck size={48} className="mx-auto mb-6 text-brand-brown" />
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-charcoal uppercase tracking-tight">External Verification Portal</h2>
                <p className="text-brand-charcoal/60 mb-10 leading-relaxed font-light italic">
                  "Excellence is never an accident." We have moved our verification process to a more secure external infrastructure to better handle on-ground documentation.
                </p>
                <a
                  href="https://forms.gle/XRuUe62tY2c8nW4V6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-charcoal text-white px-12 py-6 rounded-sm font-bold text-[11px] tracking-[0.4em] uppercase shadow-2xl hover:bg-brand-brown transition-all"
                >
                  Start External Application Form
                </a>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 rounded-sm bg-white border border-brand-brown/10">
                 <Info size={18} className="text-brand-brown shrink-0" />
                 <p className="text-[9px] md:text-[10px] text-brand-charcoal/50 leading-relaxed uppercase tracking-wider font-medium">
                   Our verification includes physical audit of your office in NCR. Ensure all details provided in the form are cross-verifiable on ground.
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Steps/Info */}
          <aside className="lg:col-span-4 space-y-8 order-2">
            <div className="bg-brand-charcoal text-white p-8 md:p-10 rounded-sm shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none" />
               <h3 className="font-serif text-2xl font-bold mb-8 italic text-brand-brown">The Process</h3>
               <div className="space-y-10 relative z-10">
                 {[
                   { step: '01', title: 'Document Audit', desc: 'Cross-referenced against national databases.', icon: ShieldCheck },
                   { step: '02', title: 'Physical Verification', desc: 'Random audits of your business location.', icon: MapPin },
                   { step: '03', title: 'ID Issuance', desc: 'Unique KYB ID generated on success.', icon: Send }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="text-[10px] font-extrabold text-brand-brown opacity-60 pt-1">{item.step}</div>
                     <div className="space-y-2">
                       <h4 className="font-bold text-[10px] uppercase tracking-widest leading-none">{item.title}</h4>
                       <p className="text-[10px] text-brand-beige/40 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
