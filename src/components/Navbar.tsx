import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Mission', path: '/about' },
    { name: 'Brokers', path: '/brokers' },
    { name: 'Apply', path: '/apply' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 md:py-6">
      <div className={cn(
        "max-w-6xl mx-auto flex justify-between items-center px-6 py-3 transition-all duration-500",
        scrolled 
          ? "bg-white shadow-2xl shadow-brand-brown/10 rounded-full border border-brand-brown/10 scale-[0.98]" 
          : "bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20"
      )}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-brand-charcoal w-8 h-8 flex items-center justify-center rounded-full text-brand-brown transition-transform group-hover:rotate-12">
            <ShieldCheck size={20} />
          </div>
          <span className="font-display text-sm md:text-lg font-bold tracking-tight text-brand-charcoal uppercase shrink-0">
            Know Your <span className="text-brand-brown underline decoration-brand-brown/30 underline-offset-4">Broker</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-brand-brown",
                location.pathname === link.path ? "text-brand-brown" : "text-brand-charcoal/60"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-brown rounded-full"
                />
              )}
            </Link>
          ))}
          <a
            href="https://forms.gle/XRuUe62tY2c8nW4V6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-charcoal text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-brand-brown hover:shadow-xl active:scale-95"
          >
            Join Network
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-charcoal p-2 hover:bg-brand-brown/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-brown/10 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-sans text-xs font-bold tracking-[0.2em] uppercase",
                    location.pathname === link.path ? "text-brand-brown" : "text-brand-charcoal/60"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/XRuUe62tY2c8nW4V6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-brand-charcoal text-white text-center py-4 rounded-sm font-bold text-[10px] tracking-widest uppercase mt-2 shadow-lg"
              >
                Join the Network
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
