import React from 'react';
import { PhoneCall, FileEdit, CalendarDays, CheckCircle2, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Kontakt telefoniczny lub wiadomość',
    desc: 'Dzwonisz pod numer 691 357 699 lub wysyłasz e-mail. Opisujesz, co potrzebujesz przewieźć oraz skąd i dokąd.',
  },
  {
    icon: FileEdit,
    title: 'Szybka wycena',
    desc: 'W oparciu o podane szczegóły natychmiast przygotowujemy uczciwą, bezpłatną i niezobowiązującą wycenę.',
  },
  {
    icon: CalendarDays,
    title: 'Ustalenie dogodnego terminu',
    desc: 'Wybieramy dogodną dla Ciebie datę oraz godzinę rozpoczęcia prac przeprowadzkowych lub załadunku.',
  },
  {
    icon: CheckCircle2,
    title: 'Sprawna realizacja usługi',
    desc: 'Zjawiamy się punktualnie, bezpiecznie zabezpieczamy mienie, sprawnie przewozimy i rozładowujemy na miejscu.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-20 sm:py-28 bg-zinc-50 border-y border-zinc-200/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-mono text-sm font-bold tracking-widest uppercase block">
            KROK PO KROKU
          </span>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-black tracking-tight leading-tight">
            Jak wygląda nasza współpraca?
          </h3>
          <div className="w-16 h-1 bg-brand-orange rounded-full mx-auto"></div>
          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Maksimum prostoty i przejrzystości. Zobacz, jak sprawnie przeprowadzimy Cię przez cały proces logistyczny.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector lines on desktop layout (CSS absolute line overlay) */}
          <div className="hidden lg:block absolute top-[62px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-orange/30 via-brand-orange to-brand-orange/30 z-0"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm relative z-10 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 font-mono font-black text-2xl text-zinc-100 group-hover:text-brand-orange/15 transition-colors">
                  0{index + 1}
                </div>

                {/* Circle Icon Container */}
                <div className="w-16 h-16 rounded-full bg-zinc-950 text-brand-orange flex items-center justify-center border-4 border-white shadow-xl relative z-20 group-hover:bg-brand-orange group-hover:text-brand-black transition-all duration-300 mb-6">
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <h4 className="font-display font-bold text-base sm:text-lg text-brand-black mb-3 leading-snug">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
