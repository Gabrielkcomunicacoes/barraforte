import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#080808] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glows & Grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#FF8A30]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#080808] to-[#080808] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: COPY */}
          <div className="lg:col-span-7 flex flex-col items-start pt-4">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#FF6A00] animate-ping" />
              <span className="font-semibold text-neutral-200">Casa &amp; Construção em Jaraguá do Sul</span>
              <span className="text-neutral-500">•</span>
              <span className="text-[#FF6A00] font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" /> 23+ Anos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              Sua obra começa{' '}
              <span className="text-orange-gradient relative inline-block">
                mais forte
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF6A00] to-transparent rounded-full" />
              </span>{' '}
              aqui.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl"
            >
              Materiais para construir, reformar e transformar seu espaço com preço competitivo,
              atendimento especializado e entrega rápida em Jaraguá do Sul e região.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() =>
                  onOpenWhatsAppModal(
                    'click_whatsapp_hero',
                    'Olá! Vi o site da Barra Forte e gostaria de falar com um especialista sobre orçamento de materiais.'
                  )
                }
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-base shadow-xl shadow-[#FF6A00]/30 hover:shadow-[#FF6A00]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
                <span>Falar com um especialista</span>
              </button>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white font-semibold text-base transition-all duration-300 group"
              >
                <span>Conhecer a Barra Forte</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-[#FF6A00] transition-transform" />
              </a>
            </motion.div>

            {/* Micro proofs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Atendimento especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                <span>Tudo para sua obra</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: VISUAL COMPOSITION */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A00]/40 to-neutral-800/80 rounded-[32px] blur-xl opacity-60 animate-pulse-glow" />

              {/* Main Image Container */}
              <div className="relative rounded-[28px] overflow-hidden border border-neutral-800/90 bg-[#111111] shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                  alt="Barra Forte - Pisos e Materiais de Construção em Jaraguá do Sul"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

                {/* Floating Badge 1: Response Time */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 left-6 bg-[#0D0D0D]/90 backdrop-blur-md border border-neutral-800 p-3.5 rounded-2xl shadow-2xl flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 flex items-center justify-center text-[#FF6A00]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Resposta Rápida</p>
                    <p className="text-[11px] text-neutral-400">Atendimento via WhatsApp</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Store Authority / 23 Years */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-6 right-6 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#FF6A00]/40 p-4 rounded-2xl shadow-2xl max-w-[210px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-[#FF6A00]" />
                    <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-wider">
                      Tradição &amp; Qualidade
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">23+ Anos de História</p>
                  <p className="text-[11px] text-neutral-400">Jaraguá do Sul e Região</p>
                </motion.div>

                {/* Floating Geometric accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
