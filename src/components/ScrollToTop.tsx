'use client';

import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useScrollToSection();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[var(--primary)] text-white rounded-full shadow-lg hover:bg-[var(--secondary)] transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}

