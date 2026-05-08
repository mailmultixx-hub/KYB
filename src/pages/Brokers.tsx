import { motion } from 'motion/react';
import { Search, MapPin, Filter, AlertCircle, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Brokers() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-24 md:pt-32 pb-24 px-4 md:px-12 min-h-screen bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-20 border-l-[6px] md:border-l-8 border-brand-brown pl-6 md:pl-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-brand-charcoal mb-4 md:mb-6 italic">Find <span className="text-brand-brown">Verified</span> Brokers</h1>
            <p className="text-base md:text-xl text-brand-charcoal/60 max-w-2xl font-light leading-relaxed">
              Search by name, locality, or unique KYB ID to connect with trust-verified real estate professionals.
            </p>
          </motion.div>
        </header>

        {/* Search & Filter Bar - Responsive & Google Travel inspired */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="bg-white p-1.5 md:p-2 shadow-xl shadow-brand-brown/5 flex flex-col sm:flex-row items-stretch sm:items-center border border-brand-brown/20 rounded-sm gap-2 sm:gap-0">
            <div className="flex flex-col flex-1 px-4 md:px-6 py-2">
              <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-brand-brown mb-1.5">Quick Search</span>
              <div className="flex items-center gap-3">
                <Search size={16} className="text-brand-brown/40 shrink-0" />
                <input
                  type="text"
                  placeholder="Broker Name or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none text-brand-charcoal w-full py-1 text-base md:text-lg font-serif italic placeholder:text-gray-300"
                />
              </div>
            </div>
            <button className="bg-brand-charcoal text-white px-8 md:px-10 py-4 md:py-5 font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-brand-brown transition-all rounded-sm whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Scrollable Filters on Mobile */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
             <button className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-sm font-bold tracking-widest uppercase text-[9px] hover:bg-brand-brown hover:text-white transition-all border border-brand-brown/10 whitespace-nowrap shrink-0">
               <Filter size={12} /> Filters
             </button>
             <button className="flex items-center justify-center gap-2 bg-white px-5 py-3 rounded-sm font-bold tracking-widest uppercase text-[9px] hover:bg-brand-brown hover:text-white transition-all border border-brand-brown/10 whitespace-nowrap shrink-0">
               <MapPin size={12} /> Locality
             </button>
             <div className="w-px h-4 bg-brand-brown/20 shrink-0 mx-2" />
             {['Rentals', 'Resale', 'Luxury', 'Commercial'].map((tag) => (
                <button
                  key={tag}
                  className="px-5 py-3 rounded-sm bg-white border border-brand-brown/10 text-[9px] font-extrabold tracking-widest uppercase text-brand-brown hover:bg-brand-brown hover:text-white transition-all shadow-sm whitespace-nowrap shrink-0"
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>

        {/* Empty State / Coming Soon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-sm p-8 md:p-32 text-center border border-brand-brown/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-brand-brown/5 rounded-bl-full pointer-events-none" />
          <div className="bg-brand-beige w-16 h-16 md:w-24 md:h-24 rounded-sm flex items-center justify-center mx-auto mb-8 md:mb-10 text-brand-brown rotate-3 shadow-sm">
             <AlertCircle size={32} className="md:size-48 -rotate-3" />
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8 italic leading-tight text-brand-charcoal">We are curating excellence.</h2>
          <p className="text-lg md:text-xl text-brand-charcoal/50 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12 font-light italic">
            "Trust is built with consistency." We are currently in the process of auditing and verifying local brokers in your area.
          </p>
          <div className="inline-flex items-center gap-3 bg-brand-charcoal text-white py-4 md:py-5 px-8 md:px-12 rounded-sm font-bold tracking-widest uppercase text-[9px] md:text-[10px] shadow-xl w-full sm:w-auto justify-center">
            <ShieldCheck size={16} /> Launching Society Pools Soon
          </div>

          {/* Dummy Card Placeholder (Skeleton) - Improved Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16 md:mt-32 opacity-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 md:p-10 rounded-sm border-2 border-dashed border-brand-brown/30 h-64 md:h-72 flex flex-col justify-between">
                <div className="space-y-4 md:space-y-6">
                  <div className="w-1/3 h-2 md:h-3 bg-brand-brown/20" />
                  <div className="w-full h-6 md:h-8 bg-brand-brown/10" />
                  <div className="w-2/3 h-2 md:h-3 bg-brand-brown/10" />
                </div>
                <div className="flex justify-between items-end border-t border-brand-brown/10 pt-4 md:pt-6">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-brown/20 rounded-sm" />
                   <div className="w-20 md:w-24 h-4 md:h-6 bg-brand-brown/20 rounded-sm" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
