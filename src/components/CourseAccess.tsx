'use client';

import { ArrowRight, Lock, Clock, Infinity, Check, Video, FileText, BookOpen, Lightbulb, CheckCircle, Library } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CourseAccess() {
  const [hotmartLink] = useState('');
  const title = useScrollAnimation();
  const priceBox = useScrollAnimation();
  const leftCard = useScrollAnimation();
  const rightCard = useScrollAnimation();
  const materials = useScrollAnimation();

  const handleAccessClick = () => {
    if (hotmartLink) {
      window.open(hotmartLink, '_blank');
    } else {
      alert('Em breve! O curso estará disponível em breve. Deixe seu email abaixo para ser notificado.');
      const emailSection = document.getElementById('newsletter');
      if (emailSection) {
        emailSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const features = [
    {
      icon: Infinity,
      title: 'Acesso vitalício',
      description: 'Assista quantas vezes quiser, no seu ritmo',
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Estude quando e onde quiser',
    },
    {
      icon: Lock,
      title: 'Conteúdo exclusivo',
      description: 'Materiais e exercícios práticos',
    },
  ];

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
    <section className="py-20 bg-gradient-to-br from-white to-[var(--accent)]">
      <div className="container mx-auto px-4">
          <div ref={title.ref} className={`text-center mb-12 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
            <h2 className="font-perpetua text-4xl md:text-5xl text-[var(--foreground)] mb-6">
              Comece sua transformação hoje
            </h2>
            <div className="flex justify-center">
              <p className="text-xl text-gray-700 leading-relaxed whitespace-nowrap">
                Tenha acesso imediato a todo o conteúdo do curso e comece a transformar sua comunicação agora mesmo.
              </p>
            </div>
          </div>

          

          <div ref={priceBox.ref} className={`bg-gradient-to-br from-[var(--foreground)] to-[var(--secondary)] rounded-3xl p-10 md:p-12 text-center shadow-2xl animate-scale ${priceBox.isVisible ? 'visible' : ''}`}>
            <div className="mb-8">
              <p className="text-white/80 text-2xl mb-4">Investimento</p>
              <div className="flex items-center justify-center gap-4">
                <span className="font-perpetua text-5xl md:text-6xl text-white">R$ 297</span>
              </div>
              <p className="text-white/90 text-sm mt-2">ou 12x de R$ 29,70</p>
            </div>

            <button
              onClick={handleAccessClick}
              className="bg-white text-[var(--foreground)] px-12 py-5 rounded-full hover:bg-[var(--accent)] transition-all text-xl font-bold inline-flex items-center gap-3 shadow-xl hover:scale-105 cursor-pointer"
            >
              Quero acessar o curso agora
              <ArrowRight size={24} />
            </button>

            <p className="text-white/80 text-sm mt-6">
              Pagamento 100% seguro via Hotmart
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-stretch">
            <div ref={leftCard.ref} className={`flex flex-col animate-fade-left ${leftCard.isVisible ? 'visible' : ''}`}>
              <h3 className="font-perpetua text-2xl md:text-3xl text-[var(--foreground)] mb-8 text-center">
                Para quem é?
              </h3>

              <p className="text-xl text-gray-700 mb-8 text-center">
                Esse curso é pra você que:
              </p>

              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg flex-1 flex flex-col">
                <div className="space-y-5">
                  {[
                    'Fala, fala… e sente que ninguém te escuta',
                    'Se cala para evitar brigas, e depois se culpa por não ter falado',
                    'Vive em relações onde precisa adivinhar o que o outro sente',
                    'Quer aprender a se comunicar com mais clareza e maturidade emocional',
                    'Deseja se expressar sem medo de rejeição, e sem precisar se anular',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-white" size={20} />
                      </div>
                      <p className="text-lg text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-700 mt-8 pt-8 border-t border-gray-200 font-medium text-center">
                  E também pra quem já cansou de viver no modo automático entre o "calar e explodir"
                  e quer finalmente aprender um novo jeito de se relacionar.
                </p>
              </div>
            </div>

            <div ref={rightCard.ref} className={`flex flex-col animate-fade-right ${rightCard.isVisible ? 'visible' : ''}`}>
              <h3 className="font-perpetua text-2xl md:text-3xl text-[var(--foreground)] mb-8 text-center">
                O que você vai aprender
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 text-center">
                Neste curso você vai ver:
              </p>

              <div className="relative flex-1">
                <div className="absolute inset-0 bg-[var(--primary)] rounded-3xl transform rotate-2"></div>
                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl h-full flex flex-col">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white" size={14} />
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-40 h-1 bg-[var(--primary)] mt-16 mx-auto"></div>

          <div ref={materials.ref} className={`mt-16 animate-on-scroll ${materials.isVisible ? 'visible' : ''}`}>
            <h3 className="font-perpetua text-2xl md:text-3xl text-[var(--foreground)] mb-8 text-center">
              O que você vai receber
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--foreground)] flex items-center justify-center flex-shrink-0">
                      <material.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{material.title}</h4>
                      <p className="text-sm text-gray-600">{material.description}</p>
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

