import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ChevronRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Pisos e Revestimentos', href: '#pisos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Parceiro Forte', href: '#parceiro-forte' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#080808]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl shadow-black/60'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3 lg:items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group justify-start">
            <img 
              src="/assets/logotipo.webp" 
              alt="Barra Forte Casa e Construção" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Links (Centered) */}
          <nav className="hidden lg:flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-[#FF6A00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF6A00] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Spacer & Mobile Button */}
          <div className="flex justify-end items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 font-medium hover:bg-neutral-900 hover:text-[#FF6A00] transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-3">
              <div className="text-xs text-neutral-400 px-3 flex items-center justify-between">
                <span>Jaraguá do Sul - SC</span>
                <span>{COMPANY_INFO.formattedWhatsapp}</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal(
                    'click_whatsapp_header_mobile',
                    'Olá! Gostaria de um orçamento para materiais de construção em Jaraguá do Sul.'
                  );
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-bold text-sm shadow-lg shadow-[#FF6A00]/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar no WhatsApp Agora</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
