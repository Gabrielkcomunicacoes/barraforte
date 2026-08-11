import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Check, ArrowRight, Sparkles, Grid } from 'lucide-react';
import { PISO_FINISHES } from '../data/mockData';

interface PisosSectionProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const PisosSection: React.FC<PisosSectionProps> = ({ onOpenWhatsAppModal }) => {
  const [activeFinish, setActiveFinish] = useState(PISO_FINISHES[0]);

  return (
    <section id="pisos" className="bg-[#080808] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF8A30]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetrical Grid Header & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* LEFT SIDE: TEXT & CTA */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-extrabold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Do projeto ao acabamento
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Pisos e revestimentos para{' '}
              <span className="text-orange-gradient">transformar ambientes.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              Encontre soluções para deixar sua reforma ou construção com a estética, resistência e acabamento
              que você procura. Trabalhamos com as marcas mais conceituadas do mercado e tamanhos grandes formatos.
            </p>

            {/* Finish switcher buttons */}
            <div className="mb-8">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                Explore os acabamentos em estoque:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {PISO_FINISHES.map((finish) => {
                  const isActive = activeFinish.id === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setActiveFinish(finish)}
                      className={`p-3 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between border cursor-pointer ${
                        isActive
                          ? 'bg-[#FF6A00] text-white border-[#FF6A00] shadow-lg shadow-[#FF6A00]/25'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <span className="truncate">{finish.title}</span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Active Finish Info */}
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 mb-8">
              <p className="text-sm font-semibold text-white mb-1">{activeFinish.title}</p>
              <p className="text-xs text-neutral-400 leading-relaxed">{activeFinish.desc}</p>
            </div>

            {/* Main Section CTA */}
            <button
              onClick={() =>
                onOpenWhatsAppModal(
                  'click_whatsapp_pisos_section',
                  `Olá! Gostaria de escolher meu revestimento na Barra Forte. Tenho interesse em ${activeFinish.title}.`
                )
              }
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-base shadow-xl shadow-[#FF6A00]/30 hover:shadow-[#FF6A00]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
              <span>Quero escolher meu revestimento</span>
            </button>
          </div>

          {/* RIGHT SIDE: LARGE CONTEMPORARY IMAGE */}
          <div className="lg:col-span-6 relative">
            <motion.div
              key={activeFinish.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[32px] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl"
            >
              <img
                src={activeFinish.img}
                alt={activeFinish.title}
                className="w-full h-[450px] sm:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 bg-[#0D0D0D]/90 backdrop-blur-md p-5 rounded-2xl border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#FF6A00]">
                    Catálogo de Pisos
                  </span>
                  <p className="text-sm font-bold text-white">{activeFinish.title}</p>
                  <p className="text-xs text-neutral-400">Pronta entrega para Jaraguá do Sul</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center">
                  <Grid className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
