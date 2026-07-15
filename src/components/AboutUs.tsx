import React from 'react';
import { ShieldCheck, Truck, Clock } from 'lucide-react';

export default function AboutUs() {
  const logoUrl = 'https://i.ibb.co/pBZnJfnK/718993878-122107161291345683-9059506697825142716-n.jpg';

  return (
    <section id="o-nas" className="py-20 sm:py-28 bg-brand-white text-zinc-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center order-last lg:order-first">
            <div className="relative">
              {/* Outer decorative circle with orange glow */}
              <div className="absolute -inset-4 bg-brand-orange/5 rounded-full transition-transform duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-orange/30 to-brand-orange/10 rounded-full blur-md"></div>
              
              {/* Main Photo Wrapper */}
              <div className="relative bg-brand-black p-2 rounded-full shadow-2xl border border-zinc-200 flex items-center justify-center overflow-hidden w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <img 
                  src={logoUrl} 
                  alt="Przeprowadzki Transport Logo" 
                  className="w-full h-full object-cover rounded-full shadow-inner hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-orange font-mono text-sm font-bold tracking-widest uppercase block">
                O NASZEJ FIRMIE
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-black tracking-tight leading-tight">
                Zaufany partner w każdej przeprowadzce
              </h3>
            </div>

            <div className="w-12 h-1 bg-brand-orange rounded-full"></div>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
              Realizujemy przeprowadzki prywatne i firmowe z dbałością o bezpieczeństwo przewożonych rzeczy. 
              Zapewniamy profesjonalną obsługę, terminowość oraz indywidualne podejście do każdego zlecenia.
            </p>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
              Oferujemy również transport pojedynczych mebli, sprzętu RTV i AGD oraz utylizację niepotrzebnych rzeczy. 
              Dzięki doświadczeniu i odpowiedniemu zapleczu logistycznemu jesteśmy w stanie sprostać nawet najbardziej wymagającym wyzwaniom transportowym.
            </p>

            {/* Core Values Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-1 shrink-0">
                  <Truck size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-black">Nowoczesna flota</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Odpowiednio przystosowane auta transportowe.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange mt-1 shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-black">Terminowość</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Zawsze na czas, bez niepotrzebnego czekania.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
