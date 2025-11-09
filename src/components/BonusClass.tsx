'use client';

import { ArrowRight, Gift } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function BonusClass() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();
  const { scrollToSection } = useScrollToSection();

  return (
    <section id="aula-bonus" className="min-h-[calc(100vh-80px)] flex items-center bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <div ref={titleRef} className={`text-center mb-8 sm:mb-10 md:mb-12 animate-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="font-perpetua text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] px-4">
              Aula Gratuita
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4 hidden lg:block italic font-light text-center">
            Assista a uma aula exclusiva do curso e descubra como transformar sua comunicação
          </p>
        </div>

        <div ref={videoRef} className={`max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-scale ${videoVisible ? 'visible' : ''}`}>
          <div className="relative bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[var(--primary)] text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded-full shadow-lg flex items-center gap-2">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>

            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://drive.google.com/file/d/1a-MYzfotjKwKOtplXVrmnVxo8okPeUmY/preview"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                allow="autoplay"
                allowFullScreen
                title="Aula Bônus - Curso de Comunicação Eficaz"
              />
            </div>
          </div>
        </div>

        <div ref={buttonRef} className={`text-center animate-on-scroll ${buttonVisible ? 'visible' : ''}`}>
          <button
            onClick={() => scrollToSection('curso')}
            className="group bg-[var(--primary)] text-white px-8 sm:px-10 md:px-12 py-4 md:py-5 rounded-full hover:bg-[var(--foreground)] transition-all text-base sm:text-lg md:text-xl font-bold inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 cursor-pointer"
          >
            <span>Gostou? Veja mais</span>
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

