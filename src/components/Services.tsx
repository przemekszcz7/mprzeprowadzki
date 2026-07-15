import React from 'react';
import { Home, Building2, Tv, ShoppingBag, ArrowUpDown, ShieldCheck, Trash2, Milestone } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Przeprowadzki mieszkań i domów',
    desc: 'Bezpieczny transport wyposażenia mieszkań i domów wraz z kompleksową pomocą przy załadunku.',
  },
  {
    icon: Building2,
    title: 'Przeprowadzki biur',
    desc: 'Sprawna organizacja przeprowadzek firm, instytucji oraz bezpieczny przewóz wyposażenia biurowego.',
  },
  {
    icon: Tv,
    title: 'Transport mebli i RTV/AGD',
    desc: 'Przewóz nowych oraz używanych mebli, szaf, łóżek oraz delikatnego sprzętu AGD i RTV.',
  },
  {
    icon: ShoppingBag,
    title: 'Przewóz rzeczy z zakupów',
    desc: 'Szybki i wygodny transport dużych zakupów ze sklepów budowlanych lub meblowych prosto pod wskazany adres.',
  },
  {
    icon: ArrowUpDown,
    title: 'Pomoc przy załadunku i rozładunku',
    desc: 'Zapewniamy siłę fizyczną i profesjonalną pomoc w przenoszeniu ciężkich przedmiotów oraz sprawnym załadunku.',
  },
  {
    icon: ShieldCheck,
    title: 'Zabezpieczenie mebli',
    desc: 'Odpowiednie owinięcie folią stretch, bąbelkową oraz pasami transportowymi gwarantuje pełne bezpieczeństwo.',
  },
  {
    icon: Trash2,
    title: 'Utylizacja mebli i rzeczy',
    desc: 'Wywóz niepotrzebnych mebli, starych sprzętów oraz zalegających innych rzeczy bezpośrednio do PSZOK.',
  },
  {
    icon: Milestone,
    title: 'Transport i przeprowadzki lokalne',
    desc: 'Szybka realizacja przeprowadzek oraz bezpiecznego transportu na terenie miasta i okolicznych miejscowości.',
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28 bg-zinc-50 border-y border-zinc-200/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-mono text-sm font-bold tracking-widest uppercase block">
            SZEROKA GAMA USŁUG
          </span>
          <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-black tracking-tight leading-tight">
            Co możemy dla Ciebie przetransportować?
          </h3>
          <div className="w-16 h-1 bg-brand-orange rounded-full mx-auto"></div>
          <p className="text-zinc-600 font-light text-base sm:text-lg">
            Świadczymy kompleksowe usługi przeprowadzkowe i transportowe. Od pojedynczej paczki czy mebla, aż po całe wyposażenie domu czy firmy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, index) => {
            const IconComponent = svc.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-zinc-100 hover:border-brand-orange/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Decorative background circle on hover */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-brand-orange/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                {/* Icon Wrapper */}
                <div className="p-3.5 rounded-xl bg-zinc-950 text-brand-orange w-fit mb-5 shadow-md border border-zinc-900 group-hover:bg-brand-orange group-hover:text-brand-black transition-colors duration-300">
                  <IconComponent size={22} />
                </div>

                {/* Content */}
                <h4 className="font-display font-bold text-lg text-brand-black mb-3 leading-snug group-hover:text-brand-orange transition-colors">
                  {svc.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light mt-auto relative z-10">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick CTA inside Services section */}
        <div className="mt-16 text-center bg-brand-black text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-zinc-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="text-left space-y-2">
              <h4 className="font-display font-bold text-xl text-white">Nietypowe zlecenie lub gabaryty?</h4>
              <p className="text-zinc-400 text-sm font-light">Skontaktuj się z nami! Dostosujemy ofertę oraz auto do specyfikacji Twoich przedmiotów.</p>
            </div>
            <a 
              href="tel:691357699" 
              className="bg-brand-orange text-brand-black hover:bg-brand-orange-dark hover:text-white px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 whitespace-nowrap"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
