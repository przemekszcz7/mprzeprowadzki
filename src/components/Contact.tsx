import React from 'react';
import { Phone, Mail, MapPin, Facebook, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-12">
      
      {/* 1. CTA Banner Section (Planujesz przeprowadzkę?) */}
      <div className="bg-brand-orange text-brand-black py-16 px-4 relative overflow-hidden">
        {/* Decorative background grid elements */}
        <div className="absolute inset-0 bg-zinc-950/[0.03] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-black/10 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck size={14} />
            <span>Szybka darmowa wycena</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight">
            Planujesz przeprowadzkę?
          </h3>

          <p className="text-brand-black/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Skontaktuj się z nami i otrzymaj szybką, bezpłatną wycenę. Zadbamy o bezpieczny transport Twojego mienia od początku do końca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a 
              href="tel:691357699" 
              className="bg-brand-black text-white hover:bg-zinc-900 px-8 py-4 rounded-xl font-display font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
            >
              <Phone size={18} fill="currentColor" />
              <span>Zadzwoń: 691 357 699</span>
            </a>
            <a 
              href="mailto:m-przeprowadzki@op.pl" 
              className="bg-white text-brand-black hover:bg-zinc-100 px-8 py-4 rounded-xl font-display font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
            >
              <Mail size={18} />
              <span>Napisz e-mail</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Contact details without form */}
      <div className="py-20 sm:py-28 bg-zinc-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-brand-orange font-mono text-xs font-bold tracking-widest uppercase block">
              DANE KONTAKTOWE
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Skontaktuj się bezpośrednio
            </h3>
            <div className="w-12 h-1 bg-brand-orange rounded-full mx-auto"></div>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Jesteśmy dostępni pod telefonem i e-mailem przez 7 dni w tygodniu. Chętnie odpowiemy na każde pytanie i sporządzimy szybką, bezpłatną wycenę.
            </p>
          </div>

          {/* Grid of details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Phone */}
            <a 
              href="tel:691357699" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-all">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-zinc-500 font-mono">Telefon kontaktowy</p>
                <p className="text-lg sm:text-xl font-extrabold text-zinc-100 group-hover:text-brand-orange transition-colors mt-0.5">691 357 699</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:m-przeprowadzki@op.pl" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-all">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-zinc-500 font-mono">Adres e-mail</p>
                <p className="text-lg sm:text-xl font-extrabold text-zinc-100 group-hover:text-brand-orange transition-colors mt-0.5">m-przeprowadzki@op.pl</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800/80">
              <div className="p-4 rounded-xl bg-brand-orange/10 text-brand-orange">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-zinc-500 font-mono">Siedziba i adres bazy</p>
                <p className="text-lg sm:text-xl font-extrabold text-zinc-100 mt-0.5">Radomszczańska, Lgota Wielka</p>
              </div>
            </div>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61590370494827" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-brand-black transition-all">
                <Facebook size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-zinc-500 font-mono">Profil na Facebooku</p>
                <p className="text-lg sm:text-xl font-extrabold text-zinc-100 group-hover:text-brand-orange transition-colors mt-0.5">Nasz Facebook</p>
              </div>
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}
