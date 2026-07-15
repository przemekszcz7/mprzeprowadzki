import React from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';

const cities = [
  'Kleszczów',
  'Piotrków Trybunalski',
  'Łódź',
  'Bełchatów',
  'Radomsko',
  'Wieluń',
];

export default function ServiceArea() {
  return (
    <section id="obszar" className="py-20 sm:py-28 bg-zinc-950 text-white scroll-mt-12 overflow-hidden relative">
      {/* Visual background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-orange font-mono text-sm font-bold tracking-widest uppercase block">
              OBSZAR DZIAŁANIA
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Działamy na terenie miasta i okolic
            </h3>
            <div className="w-12 h-1 bg-brand-orange rounded-full"></div>
            
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              Nasza baza mieści się w miejscowości <strong>Lgota Wielka</strong> (przy ul. Radomszczańskiej). Głównym obszarem naszego działania jest miasto, powiat radomszczański oraz wszystkie okoliczne miejscowości i sąsiednie powiaty.
            </p>
            
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
              Dzięki doskonałej lokalizacji gwarantujemy błyskawiczny dojazd do klienta, sprawne podstawienie samochodu oraz bezpieczny i bezstresowy przewóz rzeczy pod wskazany adres.
            </p>

            {/* Sub points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                </div>
                <span className="text-sm font-medium">Bezpłatny dojazd do klienta w promieniu bazy</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                </div>
                <span className="text-sm font-medium">Brak dodatkowych opłat za wniesienie na parter</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full"></span>
                </div>
                <span className="text-sm font-medium">Jasne i uczciwe stawki za kilometr na długich trasach</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Area Grid */}
          <div className="lg:col-span-6 bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl relative">
            <div className="absolute top-4 right-4 text-zinc-700 font-mono text-[10px] uppercase tracking-widest hidden sm:block">
              Województwo Łódzkie & Kraj
            </div>

            <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Compass size={20} className="text-brand-orange animate-spin-slow" />
              Główne obsługiwane miasta:
            </h4>

            {/* City Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand-orange/40 transition-colors duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-brand-orange/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-colors duration-300">
                    <MapPin size={16} />
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtitle / Footer of card */}
            <div className="mt-6 pt-6 border-t border-zinc-800/80 text-center">
              <p className="text-xs sm:text-sm text-zinc-400 font-light italic">
                ...oraz wszystkie okoliczne miasta, gminy i miejscowości!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
