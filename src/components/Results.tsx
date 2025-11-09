'use client';

import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Results() {
  const results = [
    'Entender o que sente antes de falar',
    'Diminuir brigas desnecessárias',
    'Aprender a colocar limites sem medo',
    'Sentir-se mais segura e confiante nas conversas',
    'Construir vínculos mais saudáveis e maduros',
    'Parar de se anular — e começar a ser ouvida'
  ];

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--accent)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={titleRef} className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}>
          <h2 className="font-perpetua text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 text-[var(--primary)]">
            Resultados que você pode esperar
          </h2>
        </div>

        <div ref={cardsRef} className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16 animate-on-scroll ${cardsVisible ? 'visible' : ''}`}>
          {results.map((result, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Sparkles className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
              <p className="text-base sm:text-lg text-gray-700">{result}</p>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`max-w-7.5xl mx-auto bg-[var(--primary)] text-white p-8 sm:p-10 lg:p-12 rounded-2xl shadow-xl text-center space-y-4 sm:space-y-5 animate-scale ${ctaVisible ? 'visible' : ''}`}>
          <p className="font-perpetua mb-8 italic text-lg sm:text-xl lg:text-2xl font-bold leading-tight max-w-7xl mx-auto">
            Está pronta para transformar o que você sente em algo que o outro possa escutar?
          </p>
          <p className="text-base sm:text-lg lg:text-2xl">
            Aprenda a se comunicar com clareza, maturidade e segurança emocional.
          </p>
          <p className="text-base sm:text-lg lg:text-2xl">
            Comece hoje o curso que já está ajudando dezenas de mulheres a viverem relações mais leves e verdadeiras.
          </p>
        </div>
      </div>
    </section>
  );
}
