import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhatsAppModal }) => {
  const [hasPulsed, setHasPulsed] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= 40 && !hasPulsed) {
        setShouldPulse(true);
        setHasPulsed(true);

        // Turn off pulse class after 3 seconds
        setTimeout(() => {
          setShouldPulse(false);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasPulsed]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() =>
          onOpenWhatsAppModal(
            'click_whatsapp_floating',
            'Olá! Vi o site da Barra Forte e gostaria de pedir um orçamento pelo WhatsApp.'
          )
        }
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
          shouldPulse ? 'animate-bounce' : ''
        }`}
        aria-label="Pedir orçamento no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:rotate-12 transition-transform shrink-0" />

        {/* Unread indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF6A00] text-[9px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
      </button>
    </div>
  );
};
