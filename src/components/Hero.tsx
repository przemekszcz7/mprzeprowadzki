import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero() {
  const bgImg = '/src/assets/images/hero_moving_truck_1784101513045.jpg';

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImg} 
          alt="Profesjonalne przeprowadzki i transport" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and linear gradients for extreme visual legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60 md:from-brand-black md:via-brand-black/85 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 text-left space-y-8">
          
          {/* Tagline/Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold tracking-wider uppercase">
            <ShieldCheck size={14} />
            <span>100% Bezpieczne Przeprowadzki</span>
          </div>

          {/* Headline */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl">
            Przeprowadzki i Transport <br className="hidden sm:inline" />
            <span className="text-brand-orange relative inline-block">
              Bez Stresu
              <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-brand-orange/20 -skew-x-12"></span>
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
            Oferujemy szybki i bezpieczny transport rzeczy, przeprowadzki mieszkań, domów i biur. 
            Pomagamy przy załadunku i rozładunku oraz odpowiednio zabezpieczamy mienie na czas transportu.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="tel:691357699" 
              className="bg-brand-orange text-brand-black hover:bg-brand-orange-dark hover:text-white px-8 py-4 rounded-xl font-display font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-brand-orange/20 hover:scale-[1.02]"
            >
              <Phone size={18} fill="currentColor" />
              <span>Zadzwoń: 691 357 699</span>
            </a>
            <a 
              href="#kontakt" 
              className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-brand-orange text-white px-8 py-4 rounded-xl font-display font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
            >
              <MessageSquare size={18} />
              <span>Napisz wiadomość</span>
            </a>
          </div>

          {/* Mini Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800/60 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 text-brand-orange border border-zinc-800">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-mono">Realizacja</p>
                <p className="text-sm font-semibold text-zinc-200">Szybkie terminy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-zinc-900 text-brand-orange border border-zinc-800">
                <Award size={16} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-mono">Dojazd</p>
                <p className="text-sm font-semibold text-zinc-200">Wycena gratis</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3 col-span-1">
              <div className="p-2 rounded-lg bg-zinc-900 text-brand-orange border border-zinc-800">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-mono">Mienie</p>
                <p className="text-sm font-semibold text-zinc-200">Pełne ubezpieczenie</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
