import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Info, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface TestimonialsProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="bg-neutral-50 text-[#080808] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Avaliações &amp; Experiências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080808] tracking-tight">
            Quem constrói com a Barra Forte sabe.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-4">
            A satisfação dos nossos clientes e parceiros em Jaraguá do Sul é nosso maior orgulho.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-[24px] p-8 border border-neutral-200 shadow-xl shadow-black/5 flex flex-col justify-between relative group hover:border-[#FF6A00]/40 transition-all"
            >
              <div>
                {/* Code Placeholder Note Indicator Badge as instructed */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-semibold">
                  <Info className="w-3 h-3 text-amber-600" />
                  <span>Espaço reservado para avaliação real do Google</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#FF6A00]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF6A00]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#080808]">{review.name}</h4>
                  <p className="text-xs font-semibold text-[#FF6A00]">{review.role}</p>
                  <p className="text-[11px] text-neutral-400">{review.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-medium text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-full">
                    {review.projectType}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500 mb-3">
            Gostaria de compartilhar a experiência da sua obra com a Barra Forte?
          </p>
          <button
            onClick={() =>
              onOpenWhatsAppModal(
                'click_whatsapp_review',
                'Olá! Gostaria de enviar meu feedback ou pedir informações sobre orçamentos na Barra Forte.'
              )
            }
            className="text-xs font-extrabold text-[#FF6A00] hover:underline inline-flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" /> Falar com nossa ouvidoria e atendimento &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
