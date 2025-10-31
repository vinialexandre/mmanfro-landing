'use client';

import { ArrowRight, Check, Video, FileText, BookOpen, Lightbulb, CheckCircle, Library } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CourseAccess() {
  const title = useScrollAnimation();
  const priceBox = useScrollAnimation();
  const leftCard = useScrollAnimation();
  const rightCard = useScrollAnimation();
  const materials = useScrollAnimation();

  const benefits = [
    'Por que é tão difícil se comunicar',
    'Educação emocional e regulação das emoções',
    'Como identificar o que você sente antes de falar',
    'A diferença entre emoção e reação',
    'Os principais sabotadores da comunicação',
    'Como transformar sentimentos em palavras que o outro escute',
    'Exercícios práticos para aplicar na vida real',
    'Como sustentar conversas difíceis sem se perder',
  ];

  return (
    <section id="curso" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-[var(--accent)]">
      <div className="container mx-auto px-4 sm:px-6">
          <div ref={title.ref} className={`text-center mb-10 sm:mb-12 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
            <h2 className="font-perpetua text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-4 sm:mb-6">
              Comece sua transformação hoje
            </h2>
            <div className="flex justify-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl px-4 hidden lg:block whitespace-nowrap">
                Tenha acesso imediato a todo o conteúdo do curso e comece a transformar sua comunicação agora mesmo.
              </p>
            </div>
          </div>



          <div ref={priceBox.ref} className={`bg-gradient-to-br from-[var(--foreground)]/70 to-[var(--secondary)] rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-2xl animate-scale ${priceBox.isVisible ? 'visible' : ''}`}>
            <div className="mb-6 sm:mb-8">
              <p className="text-white/80 text-xl sm:text-2xl mb-3 sm:mb-4">Investimento</p>
              <div className="flex items-center justify-center gap-4">
                <span className="font-perpetua text-4xl sm:text-5xl md:text-6xl text-white">R$ 297</span>
              </div>
              <p className="text-white/90 text-xs sm:text-sm mt-2">ou 12x de R$ 29,70</p>
            </div>

            <button
              className="bg-white text-[var(--foreground)] px-8 sm:px-10 md:px-12 py-4 md:py-5 rounded-full hover:bg-[var(--accent)] transition-all text-base sm:text-lg md:text-xl font-bold inline-flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:scale-105 cursor-pointer w-full sm:w-auto"
            >
              <span>Quero acessar agora</span>
              <ArrowRight size={20} className="flex-shrink-0" />
            </button>

            <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6">
              Pagamento 100% seguro via Hotmart
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-12 sm:mt-16 items-stretch">
            <div ref={leftCard.ref} className={`flex flex-col animate-fade-left ${leftCard.isVisible ? 'visible' : ''} px-4 sm:px-0`}>
              <h3 className="font-perpetua text-2xl sm:text-2xl md:text-3xl text-[var(--foreground)] mb-6 sm:mb-8 text-center">
                Para quem é?
              </h3>

              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-center px-4 max-w-2xl mx-auto hidden sm:block">
                Esse curso é pra você que:
              </p>

              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg flex-1 flex flex-col h-full">
                <div className="space-y-4 sm:space-y-5">
                  {[
                    'Fala, fala… e sente que ninguém te escuta',
                    'Se cala para evitar brigas, e depois se culpa por não ter falado',
                    'Vive em relações onde precisa adivinhar o que o outro sente',
                    'Quer aprender a se comunicar com mais clareza e maturidade emocional',
                    'Deseja se expressar sem medo de rejeição, e sem precisar se anular',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-white" size={18} />
                      </div>
                      <p className="text-base sm:text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-base sm:text-lg text-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 font-medium text-center">
                  E também pra quem já cansou de viver no modo automático entre o "calar e explodir"
                  e quer finalmente aprender um novo jeito de se relacionar.
                </p>
              </div>
            </div>

            <div ref={rightCard.ref} className={`flex flex-col animate-fade-right ${rightCard.isVisible ? 'visible' : ''} px-4 sm:px-0`}>
              <h3 className="font-perpetua text-2xl sm:text-2xl md:text-3xl text-[var(--foreground)] mb-6 sm:mb-8 text-center whitespace-nowrap">
                O que você vai aprender
              </h3>

              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-center px-4 max-w-2xl mx-auto hidden sm:block">
                Neste curso você vai ver:
              </p>

              <div className="relative flex-1">
                <div className="absolute inset-0 bg-[var(--primary)] rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl h-full flex flex-col">
                  <div className="space-y-4 sm:space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white" size={12} />
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-32 sm:w-40 h-1 bg-[var(--primary)] mt-12 sm:mt-16 mx-auto"></div>

          <div ref={materials.ref} className={`mt-12 sm:mt-16 animate-on-scroll ${materials.isVisible ? 'visible' : ''}`}>
            <h3 className="font-perpetua text-2xl sm:text-2xl md:text-3xl text-[var(--foreground)] mb-6 sm:mb-8 text-center whitespace-nowrap">
              O que você vai receber
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: Video,
                  title: 'Aulas em vídeo',
                  description: 'Gravadas e divididas por blocos temáticos',
                },
                {
                  icon: FileText,
                  title: 'Diário da Comunicação',
                  description: 'Material extra para registrar situações e emoções',
                },
                {
                  icon: BookOpen,
                  title: 'Lista das Emoções',
                  description: 'Guia prático para nomear o que sente',
                },
                {
                  icon: Lightbulb,
                  title: 'Guia da Regulação Emocional',
                  description: 'Material para lidar melhor com o que sente',
                },
                {
                  icon: CheckCircle,
                  title: 'Exercícios práticos',
                  description: 'Versão completa e curta para praticar',
                },
                {
                  icon: Library,
                  title: 'Dicas de livros',
                  description: 'Para quem quiser se aprofundar ainda mais',
                },
              ].map((material, index) => (
                <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--foreground)] flex items-center justify-center flex-shrink-0">
                      <material.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{material.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{material.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}

