import React from 'react';
import { MessageCircle, Instagram, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsAppModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 pt-16 pb-12 border-t border-neutral-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block">
              <img 
                src="/assets/logotipo.webp" 
                alt="Barra Forte Casa e Construção" 
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Mais de duas décadas fornecendo materiais de construção, reforma e acabamentos com excelência, rapidez na entrega e atendimento especializado em Jaraguá do Sul e região.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/40 transition-colors group"
                aria-label="Instagram @barrafortecec"
              >
                <Instagram className="w-4 h-4 text-[#FF6A00] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold">{COMPANY_INFO.instagramHandle}</span>
              </a>
              <button
                onClick={() => onOpenWhatsAppModal('click_whatsapp_footer_icon')}
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#FF6A00] hover:border-[#FF6A00]/40 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="WhatsApp da Barra Forte"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 1: Institucional */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#parceiro-forte" className="hover:text-white transition-colors">Parceiro Forte</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Nossa Loja</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Produtos */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
              Produtos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pisos" className="hover:text-white transition-colors text-[#FF6A00] font-semibold">
                  Pisos e Revestimentos
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Materiais Básicos</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Hidráulica &amp; Elétrica</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Ferramentas &amp; Tintas</a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-white transition-colors">Acabamentos</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Loja */}
          <div>
            <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4">
              Jaraguá do Sul
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Seg-Sex 07:30 - 18:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Barra Forte Casa e Construção. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <span>Jaraguá do Sul - SC</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
