import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceEvent: string;
  defaultMessage?: string;
  onTrackEvent: (eventName: string, customMsg?: string) => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  sourceEvent,
  defaultMessage,
  onTrackEvent,
}) => {
  const [userMsg, setUserMsg] = useState(defaultMessage || '');
  const [selectedCategory, setSelectedCategory] = useState('Orçamento Geral');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (defaultMessage) {
      setUserMsg(defaultMessage);
    }
  }, [defaultMessage]);

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    // Fire tracking event (Analytics / GTM / Pixel)
    onTrackEvent(sourceEvent, userMsg);

    // Show tracking toast feedback
    setToastMessage(`Evento '${sourceEvent}' enviado para GTM/Pixel! Redirecionando...`);

    const encodedText = encodeURIComponent(
      userMsg || `Olá! Vim pelo site da Barra Forte e gostaria de solicitar um orçamento (${selectedCategory}).`
    );

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setToastMessage(null);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#111111] text-white rounded-[28px] border border-neutral-800 shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
              Atendimento Online no WhatsApp
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-white mb-2">
            Fale com a Barra Forte
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm mb-6 leading-relaxed">
            Seus dados são preservados. Resposta rápida direta de consultores em Jaraguá do Sul.
          </p>

          {/* Quick Option Selector */}
          <div className="mb-4">
            <label className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider block mb-2">
              Assunto Principal do Orçamento:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Pisos e Revestimentos',
                'Materiais Básicos',
                'Hidráulica & Elétrica',
                'Lista Completa de Obra'
              ].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setUserMsg(`Olá! Gostaria de um orçamento para ${cat} na Barra Forte.`);
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold text-left transition-colors cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#FF6A00] text-white border-[#FF6A00]'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <label className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-wider block mb-2">
              Sua Mensagem Pré-formatada:
            </label>
            <textarea
              rows={3}
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF6A00] resize-none"
              placeholder="Descreva o que você precisa para sua obra..."
            />
          </div>

          {/* Tracking Event Display Notice */}
          <div className="mb-6 bg-neutral-900/80 p-3 rounded-xl border border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Tracking Evento: <code className="text-[#FF6A00] font-mono">{sourceEvent}</code></span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> GTM / Pixel Ativo
            </span>
          </div>

          {/* Action Submit */}
          <button
            onClick={handleSendToWhatsApp}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-extrabold text-base shadow-xl shadow-[#25D366]/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            <span>Iniciar Conversa no WhatsApp</span>
          </button>

          {/* Toast Notification if fired */}
          {toastMessage && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-900/90 text-emerald-200 text-xs font-semibold text-center border border-emerald-700 animate-in fade-in">
              {toastMessage}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
