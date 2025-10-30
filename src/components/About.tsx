'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const title = useScrollAnimation();
  const image = useScrollAnimation();
  const text = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 bg-[var(--accent)]">
      <div className="container mx-auto px-4">
        <div ref={title.ref} className={`text-center mb-16 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
          <h2 className="font-perpetua text-4xl md:text-5xl text-[var(--foreground)] mb-4">
            Quem é Milena Manfro?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div ref={image.ref} className={`relative animate-fade-left ${image.isVisible ? 'visible' : ''}`}>
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-[var(--primary)] rounded-2xl transform rotate-3"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/mm.png"
                  alt="Milena Manfro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div ref={text.ref} className={`space-y-6 animate-fade-right ${text.isVisible ? 'visible' : ''}`}>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Psicóloga clínica, especialista em Terapias Cognitivo-Comportamentais (INTCC Porto Alegre),
              em Psicologia Positiva (PUCRS), com formação em Psicologia Positiva Aplicada à Prática Clínica (NPP).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Com anos de experiência em atendimentos clínicos, atendo todos os dias pessoas que se sentem
              presas em relações em que não conseguem se expressar, se fazer entender ou se sentir vistas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Com o tempo, percebi que a dificuldade em se comunicar não tem a ver com falta de amor ou esforço.
              Tem a ver com o que a gente não aprendeu: nomear o que sente, falar sem se anular, pedir sem culpa,
              sustentar uma conversa sem explodir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              E eu sei o quanto isso dói, porque também já estive nesse lugar.
              Já vivi relações em que me calei demais, tentei adivinhar o que o outro queria e me perdi tentando evitar conflitos.
              Foi ali que eu entendi que aprender a se comunicar muda tudo: a forma como a gente se enxerga, como se relaciona
              e até como se posiciona no mundo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify font-semibold">
              Também criei um curso, com este intuito.
              Pra te mostrar, de forma leve e prática, o mesmo passo a passo que ensino dentro do consultório.
              Um caminho pra transformar o que você sente em algo que o outro possa escutar e respeitar.
            </p>
            <div className="pt-4">
              <p className="text-sm text-gray-500 italic">
                CRP 07/XXXXX - Psicóloga Clínica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

