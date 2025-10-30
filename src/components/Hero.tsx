'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToCourse = () => {
    const element = document.querySelector('[id="curso"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 animate-[fadeIn_1.5s_ease-in]">
        <div className="w-full h-full animate-[pan_20s_ease-in-out_infinite]">
          <Image
            src="/images/IMG_4166.JPG"
            alt="Milena Manfro - Psicóloga"
            fill
            className="object-cover grayscale brightness-50"
            style={{ objectPosition: '20% 40%' }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-8 animate-[slideUp_1s_ease-out]">
          
          <h1 className="font-perpetua text-5xl md:text-7xl text-white leading-[1.1]">
            Como transformar o que você sente em algo que o outro possa escutar
          </h1>
          
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto"></div>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Passo a passo para transformar o que antes virava briga em entendimento e conexão
          </p>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            O jeito de se comunicar com clareza, diminuir conflitos e se aproximar de quem você ama.
            Porque quando a conversa muda, o relacionamento muda junto.
          </p>
          
          <button
            onClick={scrollToCourse}
            className="group bg-white text-[var(--dark)] px-10 py-5 rounded-none hover:bg-[var(--primary)] hover:text-white transition-all duration-300 inline-flex items-center gap-3 text-lg font-medium uppercase tracking-wide cursor-pointer shadow-2xl mx-auto"
          >
            Quero aprender a me comunicar melhor
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

