import React from 'react';
import { motion } from 'motion/react';
import { Award, Truck, UserCheck, MapPin } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: '23+',
      label: 'ANOS DE HISTÓRIA',
      desc: 'Tradição e confiança em Jaraguá do Sul',
      icon: Award,
    },
    {
      value: 'Entrega',
      valueSuffix: 'RÁPIDA',
      label: 'FROTA PRÓPRIA',
      desc: 'Agilidade na entrega direta na sua obra',
      icon: Truck,
    },
    {
      value: 'Atendimento',
      valueSuffix: 'ESPECIALIZADO',
      label: 'CONSULTIA TÉCNICA',
      desc: 'Equipe pronta para orientar suas escolhas',
      icon: UserCheck,
    },
    {
      value: 'Jaraguá',
      valueSuffix: 'E REGIÃO',
      label: 'COBERTURA COMPLETA',
      desc: 'Atendimento rápido e presencial',
      icon: MapPin,
    },
  ];

  return (
    <section className="bg-[#F5F5F5] text-[#080808] pt-4 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Tradição &amp; Compromisso
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#080808] tracking-tight">
            Construindo histórias há mais de duas décadas.
          </h2>
        </div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-black/5 border border-neutral-200/80 hover:border-[#FF6A00]/40 hover:shadow-2xl hover:shadow-[#FF6A00]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center mb-5 group-hover:bg-[#FF6A00] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="mb-2">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#080808] tracking-tight group-hover:text-[#FF6A00] transition-colors">
                    {stat.value}
                  </div>
                  {stat.valueSuffix && (
                    <div className="text-lg font-bold text-[#FF6A00] tracking-wider uppercase leading-none">
                      {stat.valueSuffix}
                    </div>
                  )}
                </div>

                <p className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
