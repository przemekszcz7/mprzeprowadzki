import React from 'react';
import { Clock, Shield, Award, CheckCircle, Calculator, HeartHandshake, Zap, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Szybkie terminy realizacji',
    desc: 'Działamy elastycznie i dopasowujemy się do Twojego harmonogramu. Realizacja możliwa nawet tego samego dnia.',
  },
  {
    icon: Award,
    title: 'Profesjonalne podejście',
    desc: 'Dbamy o kulturalną obsługę, rzetelność oraz pełne zaangażowanie na każdym etapie zlecenia.',
  },
  {
    icon: Shield,
    title: 'Bezpieczny transport',
    desc: 'Mienie na aucie jest stabilnie zamocowane pasami i odpowiednio odseparowane od innych przedmiotów.',
  },
  {
    icon: Clock,
    title: 'Punktualność',
    desc: 'Szanujemy Twój czas. Zjawiamy się o dokładnie ustalonej godzinie, bez nieprzewidzianych opóźnień.',
  },
  {
    icon: CheckCircle,
    title: 'Doświadczenie',
    desc: 'Mamy na swoim koncie setki udanych przeprowadzek i tysiące bezpiecznie przewiezionych kilometrów.',
  },
  {
    icon: Calculator,
    title: 'Indywidualna wycena',
    desc: 'Uczciwe ceny bez ukrytych kosztów. Wycenę dostosowujemy dokładnie do zakresu planowanych prac.',
  },
  {
    icon: HeartHandshake,
    title: 'Pomoc przy całej przeprowadzce',
    desc: 'Nie tylko przewozimy, ale pomagamy w zniesieniu, wniesieniu oraz właściwym rozstawieniu rzeczy.',
  },
  {
    icon: Heart,
    title: 'Dbałość o przewożone mienie',
    desc: 'Każdy przedmiot – od delikatnego wazonu po ciężką szafę – traktujemy ze szczególną ostrożnością.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="dlaczego-my" className="py-20 sm:py-28 bg-brand-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-mono text-sm font-bold tracking-widest uppercase block">
            NASZE WARTOŚCI
          </span>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-black tracking-tight leading-tight">
            Dlaczego warto wybrać właśnie nas?
          </h3>
          <div className="w-16 h-1 bg-brand-orange rounded-full mx-auto"></div>
          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Kładziemy nacisk na jakość, bezpieczeństwo i spokój ducha naszych Klientów. Sprawdź, co nas wyróżnia w codziennej pracy.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="flex gap-5 p-6 rounded-2xl bg-zinc-50 border border-zinc-100/80 hover:bg-white hover:border-brand-orange/25 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon Column */}
                <div className="shrink-0">
                  <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/10">
                    <IconComponent size={22} className="stroke-[2px]" />
                  </div>
                </div>

                {/* Content Column */}
                <div className="space-y-1.5">
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-brand-black">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
