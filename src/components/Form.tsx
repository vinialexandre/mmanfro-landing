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
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div ref={title.ref} className={`text-center mb-12 animate-on-scroll ${title.isVisible ? 'visible' : ''}`}>
            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={32} />
            </div>
            <h2 className="font-perpetua text-4xl md:text-5xl text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tem alguma dúvida ou quer saber mais sobre o curso? Envie uma mensagem!
            </p>
          </div>

          <div ref={form.ref} className={`bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-scale ${form.isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-[var(--primary)] focus:outline-none transition-colors text-gray-800 resize-none"
                  placeholder="Digite sua mensagem..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--primary)] text-white px-8 py-4 rounded-full hover:bg-[var(--secondary)] transition-colors text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={20} />
                  </>
                )}
              </button>

              {statusMessage && (
                <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-2xl text-center">
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

