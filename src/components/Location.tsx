import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface LocationProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section id="localizacao" className="bg-[#080808] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-neutral-800">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Localização &amp; Horários
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Barra Forte em Jaraguá do Sul.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4">
            Venha conhecer nosso showroom ou solicite a entrega diretamente na sua obra na região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* INFO CARD SIDE */}
          <div className="lg:col-span-5 bg-[#121212] rounded-[28px] border border-neutral-800 p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 text-[#FF6A00] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider block">
                    Endereço Principal
                  </span>
                  <p className="text-sm font-bold text-white leading-snug">
                    {COMPANY_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 text-[#FF6A00] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider block">
                    Horário de Atendimento
                  </span>
                  <p className="text-xs font-medium text-neutral-200 leading-relaxed">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
                <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 text-[#FF6A00] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 font-extrabold uppercase tracking-wider block">
                    Telefone Fixo e WhatsApp
                  </span>
                  <p className="text-sm font-bold text-white">
                    {COMPANY_INFO.phone} | {COMPANY_INFO.formattedWhatsapp}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-sm transition-all group"
              >
                <Navigation className="w-4 h-4 text-[#FF6A00] group-hover:rotate-45 transition-transform" />
                <span>Como chegar no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 ml-auto" />
              </a>

              <button
                onClick={() =>
                  onOpenWhatsAppModal(
                    'click_whatsapp_location',
                    'Olá! Gostaria de consultar a localização e horário da loja Barra Forte em Jaraguá do Sul.'
                  )
                }
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] text-white font-extrabold text-sm shadow-lg shadow-[#FF6A00]/25 hover:shadow-[#FF6A00]/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* MAP INTERACTIVE PREVIEW CARD */}
          <div className="lg:col-span-7 bg-[#121212] rounded-[28px] border border-neutral-800 overflow-hidden shadow-2xl relative min-h-[400px] flex flex-col">
            <div className="relative w-full h-full min-h-[400px] bg-neutral-900">
              {/* Google Map Embed with Marker Pin */}
              <iframe
                title="Localização Barra Forte - R. Feliciano Bortolini, 1110"
                src={COMPANY_INFO.mapEmbedUrl || "https://maps.google.com/maps?q=Rua+Feliciano+Bortolini,+1110,+Barra+do+Rio+Cerro,+Jaragu%C3%A1+do+Sul+-+SC,+89260-180&t=m&z=17&ie=UTF8&iwloc=A&output=embed"}
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Pin Badge Overlay */}
              <div className="absolute top-4 left-4 bg-[#080808]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-xs font-bold text-white flex items-center gap-2.5 shadow-2xl pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-[#FF6A00] animate-pulse flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#FF6A00] font-extrabold uppercase tracking-wider">Barra Forte Casa e Construção</span>
                  <span className="text-xs font-bold text-white">R. Feliciano Bortolini, 1110</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
