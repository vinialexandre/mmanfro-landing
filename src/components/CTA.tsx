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
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div ref={content.ref} className={`max-w-5xl mx-auto text-center animate-on-scroll ${content.isVisible ? 'visible' : ''}`}>
          <h2 className="font-perpetua text-3xl md:text-4xl text-[var(--dark)] mb-6 leading-tight">
            Quer uma consulta particular?
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
            Agende uma sessão individual e comece sua jornada de transformação.
          </p>

          <div className="flex flex-col mt-16 sm:flex-row gap-6 justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-[var(--dark)] text-white px-10 py-4 rounded-full hover:bg-[var(--primary)] transition-colors text-lg font-bold inline-flex items-center gap-3 cursor-pointer"
            >
              <Mail size={20} />
              Agendar por E-mail
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-10 py-4 rounded-full hover:bg-green-700 transition-colors text-lg font-bold inline-flex items-center gap-3 cursor-pointer"
            >
              <Phone size={20} />
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

