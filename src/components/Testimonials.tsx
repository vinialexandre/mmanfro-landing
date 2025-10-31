'use client';

import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ana Paula Silva',
      role: 'Gerente de Projetos',
      text: 'O curso da Milena transformou completamente minha forma de me comunicar no trabalho. Hoje me sinto muito mais confiante em reuniões e apresentações. Recomendo demais!',
      rating: 5,
    },
    {
      name: 'Carlos Eduardo Santos',
      role: 'Empreendedor',
      text: 'Aprendi técnicas práticas que uso todos os dias. Minha comunicação com clientes e equipe melhorou significativamente. Investimento que valeu cada centavo!',
      rating: 5,
    },
    {
      name: 'Juliana Oliveira',
      role: 'Professora',
      text: 'Como professora, sempre achei que sabia me comunicar bem. Mas o curso me mostrou que havia muito a melhorar. Agora minhas aulas são muito mais envolventes!',
      rating: 5,
    },
    {
      name: 'Roberto Mendes',
      role: 'Advogado',
      text: 'A abordagem da Milena é única. Ela consegue unir teoria e prática de forma excepcional. Minha argumentação em audiências melhorou consideravelmente.',
      rating: 5,
    },
    {
      name: 'Fernanda Costa',
      role: 'Designer',
      text: 'Sempre tive dificuldade em apresentar meus projetos. Depois do curso, consigo explicar minhas ideias com clareza e convencer clientes com muito mais facilidade.',
      rating: 5,
    },
    {
      name: 'Lucas Ferreira',
      role: 'Estudante de Medicina',
      text: 'O curso me ajudou não só academicamente, mas também na relação com pacientes durante os estágios. Aprendi a ouvir melhor e me expressar com empatia.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const title = useScrollAnimation();
  const cards = useScrollAnimation();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-[var(--secondary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={title.ref} className={`text-center mb-10 sm:mb-12 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
          <h2 className="font-perpetua text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--dark)] mb-4 whitespace-nowrap">
            Depoimentos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4 hidden sm:block whitespace-nowrap">
            Histórias reais de transformação através da comunicação eficaz
          </p>
        </div>

        <div ref={cards.ref} className={`hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 animate-on-scroll ${cards.isVisible ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 text-[var(--secondary)] opacity-30" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={18} />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[var(--primary)] text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg relative">
            <Quote className="absolute top-4 right-4 text-[var(--secondary)] opacity-30" size={40} />
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-current" size={18} />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed text-center">
              {testimonials[currentIndex].text}
            </p>
            <div className="border-t pt-4 text-center">
              <p className="font-semibold text-[var(--primary)] text-sm sm:text-base">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)] transition-colors flex items-center justify-center text-2xl sm:text-3xl font-bold"
              aria-label="Depoimento anterior"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)] transition-colors flex items-center justify-center text-2xl sm:text-3xl font-bold"
              aria-label="Próximo depoimento"
            >
              →
            </button>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Junte-se a centenas de alunos que já transformaram sua comunicação
          </p>
        </div>
      </div>
    </section>
  );
}

