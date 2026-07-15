import React from 'react';
import { Phone, Mail, MapPin, Facebook, ChevronUp, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const logoUrl = 'https://i.ibb.co/pBZnJfnK/718993878-122107161291345683-9059506697825142716-n.jpg';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
              <img 
                src={logoUrl} 
                alt="Logo Przeprowadzki Transport" 
                className="w-12 h-12 rounded-full object-cover border border-brand-orange/40"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-display font-extrabold text-base sm:text-lg tracking-tight leading-none text-white">
                  PRZEPROWADZKI
                </h4>
                <span className="text-[10px] tracking-widest font-mono text-brand-orange font-semibold block mt-0.5">
                  TRANSPORT • LGOTA WIELKA
                </span>
              </div>
            </a>
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Świadczymy najwyższej jakości usługi przeprowadzkowe i transportowe dla klientów indywidualnych oraz firm. Dbamy o mienie i gwarantujemy bezstresową realizację.
            </p>
            
            <div className="flex gap-4 text-zinc-500">
              <a 
                href="https://www.facebook.com/profile.php?id=61590370494827" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-brand-orange transition-colors p-2 bg-zinc-900 rounded-lg border border-zinc-800"
                aria-label="Facebook Profile"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-display font-bold text-sm tracking-wider text-zinc-300 uppercase">Szybkie linki</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-light">
              <li>
                <a href="#o-nas" className="hover:text-brand-orange transition-colors">O nas</a>
              </li>
              <li>
                <a href="#uslugi" className="hover:text-brand-orange transition-colors">Nasze usługi</a>
              </li>
              <li>
                <a href="#dlaczego-my" className="hover:text-brand-orange transition-colors">Dlaczego my</a>
              </li>
              <li>
                <a href="#obszar" className="hover:text-brand-orange transition-colors">Obszar działania</a>
              </li>
              <li>
                <a href="#proces" className="hover:text-brand-orange transition-colors">Jak działamy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact info directly */}
          <div className="lg:col-span-5 space-y-4">
            <h5 className="font-display font-bold text-sm tracking-wider text-zinc-300 uppercase">Dane Kontaktowe</h5>
            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-200">Adres bazy:</p>
                  <p className="text-zinc-500 mt-0.5">Radomszczańska, Lgota Wielka</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-200">Telefon komórkowy:</p>
                  <a href="tel:691357699" className="text-zinc-300 hover:text-brand-orange transition-colors block mt-0.5">+48 691 357 699</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-zinc-200">Napisz e-mail:</p>
                  <a href="mailto:m-przeprowadzki@op.pl" className="text-zinc-300 hover:text-brand-orange transition-colors block mt-0.5">m-przeprowadzki@op.pl</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-light">
          <div>
            <p>© {currentYear} Przeprowadzki Transport. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-1">Szybko • Bezpiecznie • Bez Stresu. Lgota Wielka, Radomsko.</p>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="#nav-header" 
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-brand-orange text-zinc-400 hover:text-brand-orange transition-all duration-350 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider"
              aria-label="Back to top"
            >
              <span>Do góry</span>
              <ChevronUp size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
