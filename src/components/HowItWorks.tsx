import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, FileText, CheckCircle, Truck } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/mockData';

interface HowItWorksProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenWhatsAppModal }) => {
  const icons = [MessageCircle, FileText, CheckCircle, Truck];

  return (
    <section className="bg-neutral-50 text-[#080808] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080808] tracking-tight">
            Da escolha à obra, sem complicação.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-4">
            Processo ágil e transparente para você comprar tudo o que precisa sem perder tempo.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] -translate-y-8 h-1 bg-neutral-200 z-0">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF8A30]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, idx) => {
              const StepIcon = icons[idx] || MessageCircle;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-xl shadow-black/5 hover:border-[#FF6A00]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-neutral-300 group-hover:text-[#FF6A00] transition-colors">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center group-hover:bg-[#FF6A00] group-hover:text-white transition-colors">
                        <StepIcon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#080808] mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {idx === 0 && (
                    <button
                      onClick={() =>
                        onOpenWhatsAppModal(
                          'click_whatsapp_step1',
                          'Olá! Gostaria de iniciar meu orçamento de materiais pelo WhatsApp.'
                        )
                      }
                      className="mt-6 w-full py-2.5 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white text-xs font-bold transition-colors text-center cursor-pointer"
                    >
                      Começar Agora &rarr;
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
