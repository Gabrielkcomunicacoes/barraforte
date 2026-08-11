import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Truck, UserCheck, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { DIFFERENTIALS } from '../data/mockData';

interface DiferenciaisProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Diferenciais: React.FC<DiferenciaisProps> = ({ onOpenWhatsAppModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'DollarSign':
        return DollarSign;
      case 'Truck':
        return Truck;
      case 'UserCheck':
        return UserCheck;
      case 'MessageSquare':
      default:
        return MessageSquare;
    }
  };

  return (
    <section id="diferenciais" className="bg-white text-[#080808] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080808] tracking-tight">
            Por que comprar na Barra Forte?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-4 font-normal">
            Facilitamos cada etapa da sua compra com seriedade, eficiência e proximidade.
          </p>
        </div>

        {/* 4 Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = getIcon(diff.iconName);
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F9F9F9] rounded-[24px] p-8 border border-neutral-200/80 shadow-md shadow-black/5 hover:border-[#FF6A00]/50 hover:shadow-2xl hover:shadow-[#FF6A00]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 text-[#FF6A00] flex items-center justify-center mb-6 group-hover:bg-[#FF6A00] group-hover:text-white group-hover:border-[#FF6A00] transition-colors shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#080808] mb-3 group-hover:text-[#FF6A00] transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed font-normal mb-6">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-bold text-neutral-500 group-hover:text-[#FF6A00] transition-colors">
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
