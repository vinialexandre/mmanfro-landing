import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center lg:items-start text-center lg:text-left">
          <div className="flex-1">
            <h3 className="font-perpetua text-xl sm:text-2xl mb-3 sm:mb-4">Milena Manfro</h3>
            <p className="text-white/90 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Psicóloga especializada em comunicação e desenvolvimento pessoal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center lg:items-start">
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:psicologamilenamanfro@gmail.com"
                  className="flex items-start sm:items-center gap-2 text-white/80 hover:text-white transition-colors justify-center lg:justify-start"
                >
                  <Mail size={18} className="flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-xs sm:text-sm break-all">psicologamilenamanfro@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/5551991670953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors justify-center lg:justify-start"
                >
                  <MessageCircle size={18} className="flex-shrink-0" />
                  <span className="text-xs sm:text-sm">(51) 99167-0953</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Redes Sociais</h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.instagram.com/milenamanfropsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/5551991670953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>© {new Date().getFullYear()} Milena Manfro. Todos os direitos reservados.</p>
          <p className="mt-2">CRP 07/XXXXX</p>
        </div>
      </div>
    </footer>
  );
}

