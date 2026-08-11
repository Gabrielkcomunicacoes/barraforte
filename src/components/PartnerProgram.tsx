import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, HardHat, Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface PartnerProgramProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const PartnerProgram: React.FC<PartnerProgramProps> = ({ onOpenWhatsAppModal }) => {
  const targetPros = [
    'Pedreiros',
    'Mestres de Obra',
    'Empreiteiros',
    'Arquitetos & Designers',
    'Engenheiros Civis',
    'Instaladores'
  ];

  return (
    <section id="parceiro-forte" className="bg-[#080808] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-neutral-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF6A00]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="bg-gradient-to-br from-[#121212] via-[#0D0D0D] to-[#080808] rounded-[32px] border border-neutral-800 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Orange Glow Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/15 border border-[#FF6A00]/40 text-[#FF6A00] text-xs font-extrabold tracking-widest uppercase mb-6">
                <HardHat className="w-4 h-4" /> PROGRAMA PARCEIRO FORTE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Você indica.{' '}
                <span className="text-orange-gradient">A parceria fica mais forte.</span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
                Profissionais parceiros da Barra Forte recebem atendimento prioritário, condições diferenciadas para indicações e participam das ações exclusivas do programa.
              </p>

              {/* Target Professional Pills */}
              <div className="mb-8">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                  Programa feito para:
                </p>
                <div className="flex flex-wrap gap-2">
                  {targetPros.map((pro, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-semibold flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF6A00]" />
                      {pro}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  onOpenWhatsAppModal(
                    'click_whatsapp_partner_program',
                    'Olá! Sou profissional da área da construção e gostaria de cadastrar minha parceria no Programa Parceiro Forte.'
                  )
                }
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-base shadow-xl shadow-[#FF6A00]/30 hover:shadow-[#FF6A00]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
                <span>Conhecer o Parceiro Forte</span>
              </button>
            </div>

            {/* Right Column: Visual Feature Box */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-900/90 rounded-2xl p-6 sm:p-8 border border-neutral-800 space-y-6">
                <div className="flex items-center gap-4 border-b border-neutral-800 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Atendimento Prioritário</h4>
                    <p className="text-xs text-neutral-400">Canal direto via WhatsApp para orçamentos rápidos em tempo recorde.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-neutral-800 pb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Rede de Vantagens</h4>
                    <p className="text-xs text-neutral-400">Ações exclusivas, eventos de capacitação e benefícios diretos.</p>
                  </div>
                </div>

                <div className="bg-[#FF6A00]/10 rounded-xl p-4 border border-[#FF6A00]/20 text-xs text-neutral-300 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#FF6A00] shrink-0" />
                  <span>Cadastre sua equipe e potencialize os resultados das suas obras em Jaraguá do Sul.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
