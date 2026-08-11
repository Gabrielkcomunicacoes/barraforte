import React from 'react';
import { motion } from 'motion/react';
import { Calendar, HeartHandshake, BookOpenCheck, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const AboutUs: React.FC = () => {
  const highlights = [
    { title: '23 anos de história', desc: 'Tradição consolidada no mercado da construção em Jaraguá.', icon: Calendar },
    { title: 'Atendimento próximo', desc: 'Relacionamento humano e direto com cada cliente e parceiro.', icon: HeartHandshake },
    { title: 'Conhecimento técnico', desc: 'Equipe que entende de obra e indica as melhores soluções.', icon: BookOpenCheck },
    { title: 'Compromisso com cada obra', desc: 'Pontualidade na entrega e seriedade em todas as etapas.', icon: ShieldCheck },
  ];

  return (
    <section id="sobre" className="bg-white text-[#080808] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[32px] overflow-hidden border border-neutral-200 shadow-2xl bg-neutral-100"
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                alt="Loja Barra Forte Casa e Construção em Jaraguá do Sul"
                className="w-full h-[450px] sm:h-[520px] object-cover"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 bg-[#080808]/90 backdrop-blur-md p-5 rounded-2xl border border-neutral-800 text-white max-w-xs shadow-2xl">
                <div className="flex items-center gap-2 mb-1 text-[#FF6A00]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Jaraguá do Sul - SC</span>
                </div>
                <p className="text-sm font-bold text-white">Barra Forte Casa e Construção</p>
                <p className="text-xs text-neutral-400 mt-1">
                  Evolução constante para servir a sua obra com agilidade e eficiência.
                </p>
              </div>
            </motion.div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Nossa Trajetória
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080808] tracking-tight leading-[1.15] mb-6">
              Mais de duas décadas fazendo parte das obras de Jaraguá do Sul.
            </h2>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-8">
              A Barra Forte nasceu para atender quem constrói, reforma e transforma. Ao longo dos anos,
              acompanhamos milhares de projetos e construímos uma relação baseada em proximidade, confiança e atendimento técnico especializado.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#F9F9F9] p-4 rounded-2xl border border-neutral-200/80">
                    <div className="w-9 h-9 rounded-xl bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#080808] mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
