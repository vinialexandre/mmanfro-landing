'use client';

import { Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const title = useScrollAnimation();
  const form = useScrollAnimation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    const mailtoLink = `mailto:psicologamilenamanfro@gmail.com?subject=Contato de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${messageContent}`)}`;

    window.location.href = mailtoLink;

    setStatusMessage('Abrindo seu cliente de email...');
    setEmail('');
    setName('');
    setMessageContent('');
    setIsSubmitting(false);

    setTimeout(() => {
      setStatusMessage('');
    }, 5000);
  };

  return (
    <section id="newsletter" className="min-h-screen flex items-center bg-[var(--dark)]">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div ref={title.ref} className={`text-center mb-10 sm:mb-12 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="text-white" size={28} />
            </div>
            <h2 className="font-perpetua text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 whitespace-nowrap">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4 hidden lg:block whitespace-nowrap">
              Tem alguma dúvida ou quer saber mais sobre o curso? Envie uma mensagem!
            </p>
          </div>

          <div ref={form.ref} className={`bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl animate-scale ${form.isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800 text-sm sm:text-base"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800 text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800 resize-none text-sm sm:text-base"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--primary)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[var(--secondary)] transition-colors text-base sm:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={20} className="flex-shrink-0" />
                  </>
                )}
              </button>

              {statusMessage && (
                <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-center text-sm sm:text-base">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

