import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-brand-brown w-8 h-8 flex items-center justify-center rounded-sm text-white transition-transform group-hover:scale-105">
              <span className="font-serif font-bold text-xl">K</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight uppercase">
              Know Your <span className="text-brand-brown underline decoration-brand-brown/30 underline-offset-4">Broker</span>
            </span>
          </Link>
          <p className="text-brand-white/40 text-[11px] uppercase tracking-[0.2em] leading-relaxed font-bold max-w-xs">
            Revolutionizing market trust through rigorous authentication and locality verification across the NCR region.
          </p>
          <div className="flex items-center gap-2 text-brand-brown/40 text-[9px] font-extrabold uppercase tracking-[0.3em]">
            <MapPin size={10} />
            <span>Serving All Over NCR</span>
          </div>
        </div>

        <div>
           <h4 className="font-extrabold text-[10px] uppercase tracking-[0.4em] mb-10 text-brand-brown">Navigation</h4>
           <ul className="space-y-4 text-[11px] uppercase tracking-widest font-bold opacity-60">
             <li><Link to="/" className="hover:text-brand-brown transition-colors">Home Archive</Link></li>
             <li><Link to="/about" className="hover:text-brand-brown transition-colors">Our Charter</Link></li>
             <li><Link to="/brokers" className="hover:text-brand-brown transition-colors">Verified Pool</Link></li>
             <li><Link to="/apply" className="hover:text-brand-brown transition-colors">Join Network</Link></li>
           </ul>
        </div>

        <div>
           <h4 className="font-extrabold text-[10px] uppercase tracking-[0.4em] mb-10 text-brand-brown">Contact</h4>
           <ul className="space-y-5 text-[11px] uppercase tracking-widest font-bold opacity-60">
             <li className="flex items-center gap-3 group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-brown/10 transition-colors">
                 <Mail size={14} className="text-brand-brown" />
               </div>
               <a href="mailto:cityheartrealty25@gmail.com" className="group-hover:text-brand-white transition-colors">cityheartrealty25@gmail.com</a>
             </li>
             <li className="flex items-center gap-3 group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-brown/10 transition-colors">
                 <Phone size={14} className="text-brand-brown" />
               </div>
               <a href="tel:+918826866498" className="group-hover:text-brand-white transition-colors">+91 8826866498</a>
             </li>
             <li className="pt-4 border-t border-white/5">
               <span className="text-[10px] italic font-serif opacity-40">Premium Trust Infrastructure</span>
             </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] tracking-[0.3em] font-light uppercase opacity-30 text-brand-beige">© 2026 Know Your Broker. All Rights Reserved.</span>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[9px] tracking-[0.3em] font-bold uppercase opacity-40">
           <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-brand-brown rounded-full" />
             <span>Secured Ecosystem</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-1 h-1 bg-brand-brown rounded-full" />
             <span>TrustFirst™ Tech</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
