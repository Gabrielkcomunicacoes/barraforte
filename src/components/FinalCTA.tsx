import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FinalCTAProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="relative bg-[#080808] text-white overflow-hidden pt-12 pb-24">
      
      {/* WHITE WAVE ENTERING FROM THE TOP */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[60px] sm:h-[100px] lg:h-[140px]"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,100 C1120,180 800,20 480,140 C240,180 80,80 0,120 Z"
            fill="#080808"
          />
        </svg>
      </div>

      {/* Subtle Orange Glow behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF6A00]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        
        <div className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] rounded-[36px] border border-[#FF6A00]/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center lg:text-left">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6A00] via-[#FF8A30] to-[#FF6A00]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6A00]/20 border border-[#FF6A00]/40 text-[#FF6A00] text-xs font-extrabold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4" /> Orçamento Sem Compromisso
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Pronto para começar{' '}
                <span className="text-orange-gradient">sua obra?</span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                Converse com a Barra Forte e peça seu orçamento pelo WhatsApp. Resposta rápida,
                atendimento técnico e as melhores condições para Jaraguá do Sul e região.
              </p>

              {/* GIANT ORANGE CTA BUTTON */}
              <button
                onClick={() =>
                  onOpenWhatsAppModal(
                    'click_whatsapp_final_cta',
                    'Olá! Estou no final do site e gostaria de pedir um orçamento para minha obra.'
                  )
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-lg sm:text-xl shadow-2xl shadow-[#FF6A00]/40 hover:shadow-[#FF6A00]/60 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer group mb-4"
              >
                <MessageCircle className="w-7 h-7 fill-white/20 group-hover:rotate-12 transition-transform" />
                <span className="uppercase tracking-wider">PEDIR ORÇAMENTO NO WHATSAPP</span>
              </button>

              {/* Micro line */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00]" />
                <span>Atendimento rápido e personalizado.</span>
              </div>
            </div>

            {/* RIGHT COMPOSITION IMAGE */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[28px] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop"
                  alt="Barra Forte Casa e Construção - Jaraguá do Sul"
                  className="w-full h-[320px] sm:h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-md border border-neutral-800 text-left">
                  <p className="text-xs font-bold text-white">Barra Forte Jaraguá</p>
                  <p className="text-[11px] text-neutral-400">Entrega rápida e orçamentos via WhatsApp</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
