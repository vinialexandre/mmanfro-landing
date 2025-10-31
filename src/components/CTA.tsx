'use client';

import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTA() {
  const [hotmartLink] = useState('');
  const content = useScrollAnimation();

  const handleEmailClick = () => {
    const contactSection = document.getElementById('newsletter');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551991670953', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={content.ref} className={`max-w-5xl mx-auto text-center animate-on-scroll ${content.isVisible ? 'visible' : ''}`}>
          <h2 className="font-perpetua text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--dark)] mb-4 sm:mb-6 leading-tight whitespace-nowrap">
            Consulta Particular
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 leading-relaxed px-6 sm:px-4">
            Agende uma sessão individual e comece sua jornada de transformação.
          </p>

          <div className="flex flex-col mt-10 sm:mt-12 md:mt-16 sm:flex-row gap-4 sm:gap-6 justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-[var(--dark)] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[var(--primary)] transition-colors text-base sm:text-lg font-bold inline-flex items-center justify-center gap-2 sm:gap-3 cursor-pointer w-full sm:w-auto"
            >
              <Mail size={20} className="flex-shrink-0" />
              <span>Agendar por E-mail</span>
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-green-700 transition-colors text-base sm:text-lg font-bold inline-flex items-center justify-center gap-2 sm:gap-3 cursor-pointer w-full sm:w-auto"
            >
              <Phone size={20} className="flex-shrink-0" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

