'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'
    } backdrop-blur-sm`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className={`font-perpetua text-xl transition-colors ${
                isScrolled ? 'text-[var(--primary)]' : 'text-white'
              }`}>
                Milena Manfro
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-[var(--primary)]' : 'text-white/90 hover:text-white'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className={`transition-colors cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:text-[var(--primary)]' : 'text-white/90 hover:text-white'
              }`}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('curso')}
              className={`px-6 py-2 rounded-full transition-colors cursor-pointer ${
                isScrolled ? 'bg-[var(--primary)] text-white hover:bg-[var(--secondary)]' : 'bg-white text-[var(--dark)] hover:bg-[var(--primary)] hover:text-white'
              }`}
            >
              Curso
            </button>
          </nav>

          <button
            className={`md:hidden cursor-pointer transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-[var(--primary)] transition-colors text-left cursor-pointer"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('curso')}
              className="bg-[var(--primary)] text-white px-6 py-2 rounded-full hover:bg-[var(--secondary)] transition-colors text-center cursor-pointer"
            >
              Curso
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

