import React, { useState } from 'react';
import { Phone, Mail, Facebook, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = 'https://i.ibb.co/pBZnJfnK/718993878-122107161291345683-9059506697825142716-n.jpg';

  return (
    <header className="sticky top-0 z-50 bg-brand-black/95 backdrop-blur-md border-b border-zinc-800 text-white shadow-xl" id="nav-header">
      {/* Top bar for fast contact on desktop */}
      <div className="hidden sm:block border-b border-zinc-900 bg-zinc-950/80 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="tel:691357699" className="flex items-center gap-1.5 hover:text-brand-brand-orange transition-colors">
              <Phone size={13} className="text-brand-orange" />
              <span>+48 691 357 699</span>
            </a>
            <a href="mailto:m-przeprowadzki@op.pl" className="flex items-center gap-1.5 hover:text-brand-brand-orange transition-colors">
              <Mail size={13} className="text-brand-orange" />
              <span>m-przeprowadzki@op.pl</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              Szybka wycena online
            </span>
            <a 
              href="https://www.facebook.com/profile.php?id=61590370494827" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-orange transition-colors flex items-center gap-1"
            >
              <Facebook size={13} className="text-brand-orange" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative">
            <img 
              src={logoUrl} 
              alt="Logo Przeprowadzki Transport" 
              className="w-12 h-12 rounded-full object-cover border border-brand-orange/40 group-hover:border-brand-orange transition-colors"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -inset-1 rounded-full bg-brand-orange/10 blur-sm group-hover:bg-brand-orange/20 transition-all"></div>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-base sm:text-lg tracking-tight leading-none text-white">
              PRZEPROWADZKI
            </h1>
            <span className="text-[10px] sm:text-xs tracking-widest font-mono text-brand-orange font-semibold block mt-0.5">
              TRANSPORT • LGOTA WIELKA
            </span>
          </div>
        </a>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#o-nas" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">O nas</a>
          <a href="#uslugi" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Nasze Usługi</a>
          <a href="#dlaczego-my" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Dlaczego my</a>
          <a href="#obszar" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Obszar działania</a>
          <a href="#proces" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Jak działamy</a>
          <a href="#kontakt" className="text-zinc-300 hover:text-brand-orange font-medium text-sm transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange hover:after:w-full after:transition-all">Kontakt</a>
        </nav>

        {/* Right buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="tel:691357699" 
            className="bg-brand-orange text-brand-black px-4 py-2.5 rounded-lg font-display font-bold text-sm hover:bg-brand-orange-dark hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg shadow-brand-orange/15"
          >
            <Phone size={14} fill="currentColor" />
            <span>Zadzwoń teraz</span>
          </a>
        </div>

        {/* Burger Button using standard state */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-brand-orange cursor-pointer select-none rounded-lg hover:bg-zinc-900 transition-colors z-50 relative focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Drawer (Controlled by React State) */}
        <div 
          className={`fixed inset-x-0 bottom-0 top-[73px] z-40 bg-[#09090b] flex-col px-6 py-8 gap-6 border-b border-zinc-800 shadow-2xl transition-all duration-300 transform overflow-y-auto lg:hidden flex ${
            isMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
          style={{ height: 'calc(100vh - 73px)' }}
        >
          <a 
            href="#o-nas" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            O nas
          </a>
          <a 
            href="#uslugi" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Nasze Usługi
          </a>
          <a 
            href="#dlaczego-my" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Dlaczego my
          </a>
          <a 
            href="#obszar" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Obszar działania
          </a>
          <a 
            href="#proces" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Jak działamy
          </a>
          <a 
            href="#kontakt" 
            className="text-lg font-display font-semibold text-zinc-100 hover:text-brand-orange pb-3 border-b border-zinc-900 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </a>

          <div className="mt-4 flex flex-col gap-4">
            <a 
              href="tel:691357699" 
              className="bg-brand-orange text-brand-black py-3.5 px-4 rounded-xl font-display font-bold text-center hover:bg-brand-orange-dark hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} fill="currentColor" />
              <span>Zadzwoń: 691 357 699</span>
            </a>
            <a 
              href="mailto:m-przeprowadzki@op.pl" 
              className="border border-zinc-700 hover:border-brand-orange text-zinc-300 py-3.5 px-4 rounded-xl font-display font-medium text-center transition-all flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={18} />
              <span>m-przeprowadzki@op.pl</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
