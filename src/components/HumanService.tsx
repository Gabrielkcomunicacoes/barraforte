import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCheck, Clock, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HumanServiceProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const HumanService: React.FC<HumanServiceProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="bg-[#080808] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE SIDE WITH SIMULATED CHAT BUBBLES */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Photo frame */}
              <div className="relative rounded-[28px] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
                <img
                  src="/assets/atendimento-humanizado.webp"
                  alt="Atendimento Humano Barra Forte Jaraguá do Sul"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              </div>

              {/* Chat Bubble 1 (Customer Question) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-8 left-4 sm:-left-6 bg-white text-[#080808] p-3.5 rounded-2xl shadow-2xl max-w-[240px] border border-neutral-200"
              >
                <p className="text-xs font-semibold">
                  "Preciso de 80m² de porcelanato acetinado para entrega no Bairro Rau amanhã."
                </p>
                <span className="text-[10px] text-neutral-400 block mt-1 text-right">10:42</span>
              </motion.div>

              {/* Chat Bubble 2 (Human Consultant Answer) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-10 right-4 sm:-right-6 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl max-w-[260px] border border-emerald-400"
              >
                <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold text-white/90">
                  <UserCheck className="w-3.5 h-3.5" /> Consultor Barra Forte
                </div>
                <p className="text-xs font-medium leading-tight">
                  "Olá! Temos o lote perfeito em estoque na loja. Já enviei as fotos e o orçamento calculado com entrega agendada!"
                </p>
                <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-white/80">
                  <span>10:43</span>
                  <CheckCheck className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>

              {/* Response Time Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#FF6A00]/40 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-bold text-white">Resposta rápida pelo WhatsApp</span>
              </div>
            </motion.div>
          </div>

          {/* COPY SIDE */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-extrabold tracking-wider uppercase mb-6">
              Atendimento Consultivo
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Aqui, seu WhatsApp não cai em um{' '}
              <span className="text-orange-gradient">labirinto de robôs.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              Você fala com pessoas de verdade, preparadas para entender sua necessidade, tirar dúvidas técnicas sobre a sua obra e ajudar na sua compra com rapidez e transparência.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cálculo exato de metragem</h4>
                  <p className="text-xs text-neutral-400">Evite sobra ou falta de material com a orientação do nosso time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Envio de fotos e especificações</h4>
                  <p className="text-xs text-neutral-400">Veja detalhes das peças e produtos direto no seu WhatsApp.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                onOpenWhatsAppModal(
                  'click_whatsapp_human_service',
                  'Olá! Gostaria de conversar com a equipe de vendas da Barra Forte para tirar dúvidas da minha obra.'
                )
              }
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-base shadow-xl shadow-[#FF6A00]/30 hover:shadow-[#FF6A00]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
              <span>Falar com a equipe agora</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
