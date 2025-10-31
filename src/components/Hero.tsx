'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    { src: '/images/IMG_4166.JPG', position: '20% 30%', mobilePosition: '10% 100%' },
    { src: '/images/DSC_7629.jpeg', position: '70% 30%', mobilePosition: '10% 100%' },
    { src: '/images/DSC_7678.jpeg', position: '20% 30%', mobilePosition: '10% 100%' },
    { src: '/images/IMG_4280.JPG', position: '20% 30%', mobilePosition: '10% 100%' },
    { src: '/images/IMG_4322.JPG', position: '70% 30%', mobilePosition: '10% 100%' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToCourse = () => {
    const element = document.getElementById('curso');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center md:items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-full h-full animate-[pan_20s_ease-in-out_infinite]">
              <Image
                src={image.src}
                alt="Milena Manfro - Psicóloga"
                fill
                className="object-cover grayscale brightness-50 scale-110 md:scale-100"
                style={{ objectPosition: isMobile ? image.mobilePosition : image.position }}
                priority={index === 0}
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 pb-20 md:pb-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 animate-[slideUp_1s_ease-out]">

          <h1 className="font-perpetua text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.4] sm:leading-[1.1] px-6 sm:px-8 md:px-2 max-w-5xl mx-auto">
            Como transformar o que você sente em algo que o outro possa escutar
          </h1>

          <div className="w-16 sm:w-20 h-1 bg-[var(--primary)] mx-auto hidden xl:block"></div>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto px-4 hidden xl:block">
            Passo a passo para transformar o que antes virava briga em entendimento e conexão
          </p>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto px-4 hidden xl:block">
            O jeito de se comunicar com clareza, diminuir conflitos e se aproximar de quem você ama.
            Porque quando a conversa muda, o relacionamento muda junto.
          </p>

          <div className="pt-8 sm:pt-6">
            <button
              onClick={scrollToCourse}
              className="group bg-white text-[var(--dark)] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-none hover:bg-[var(--primary)] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide cursor-pointer shadow-2xl mx-auto max-w-full"
            >
              <span className="text-center">Quero me comunicar melhor</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

