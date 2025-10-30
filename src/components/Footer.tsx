import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <h3 className="font-perpetua text-2xl mb-4">Milena Manfro</h3>
            <p className="text-white/90 text-base whitespace-nowrap">
              Psicóloga especializada em comunicação e desenvolvimento pessoal.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:psicologamilenamanfro@gmail.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span className="text-sm">psicologamilenamanfro@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/5551991670953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">(51) 99167-0953</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/milenamanfropsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://wa.me/5551991670953"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Milena Manfro. Todos os direitos reservados.</p>
          <p className="mt-2">CRP 07/XXXXX</p>
        </div>
      </div>
    </footer>
  );
}

