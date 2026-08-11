/**
 * BARRA FORTE | CASA E CONSTRUÇÃO - Jaraguá do Sul
 * Landing Page Institucional Premium e Orientada à Conversão
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroWave } from './components/HeroWave';
import { Stats } from './components/Stats';
import { Categories } from './components/Categories';
import { PisosSection } from './components/PisosSection';
import { WaveDarkToLight } from './components/WaveDarkToLight';
import { WaveLightToDark } from './components/WaveLightToDark';
import { Diferenciais } from './components/Diferenciais';
import { HowItWorks } from './components/HowItWorks';
import { HumanService } from './components/HumanService';
import { PartnerProgram } from './components/PartnerProgram';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { WhatsAppModal } from './components/WhatsAppModal';
import { LeadTrackingEvent } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSourceEvent, setCurrentSourceEvent] = useState('click_whatsapp_general');
  const [currentPrefillMessage, setCurrentPrefillMessage] = useState('');
  const [lastTrackedEvent, setLastTrackedEvent] = useState<LeadTrackingEvent | null>(null);

  const handleOpenWhatsAppModal = (source: string, prefillMessage?: string) => {
    setCurrentSourceEvent(source);
    setCurrentPrefillMessage(
      prefillMessage || 'Olá! Gostaria de falar com um atendente da Barra Forte para solicitar um orçamento.'
    );
    setModalOpen(true);
  };

  const handleTrackEvent = (eventName: string, customMsg?: string) => {
    const eventData: LeadTrackingEvent = {
      eventName,
      location: 'Jaraguá do Sul - SC',
      timestamp: new Date().toLocaleTimeString(),
      customMessage: customMsg,
    };

    setLastTrackedEvent(eventData);

    // Simulated Analytics log (Google Tag Manager / Meta Pixel)
    if (typeof window !== 'undefined') {
      console.log('🚀 [Analytics Event Fired]:', eventName, eventData);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FF6A00] selection:text-white">
      {/* HEADER / NAVBAR */}
      <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* HERO SECTION (~90-100vh) */}
      <Hero onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: HERO (DARK) -> STATS (LIGHT) */}
      <HeroWave />

      {/* PROOF / STATS SECTION */}
      <Stats />

      {/* MAIN CATEGORIES SHOWCASE */}
      <Categories onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: CATEGORIES (LIGHT) -> PISOS (DARK) */}
      <WaveLightToDark topColor="#FAFAFA" bottomColor="#080808" />

      {/* DEDICATED PISOS E REVESTIMENTOS SECTION (DARK PREMIUM) */}
      <PisosSection onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: PISOS (DARK) -> DIFERENCIAIS (LIGHT) */}
      <WaveDarkToLight topColor="#080808" bottomColor="#FFFFFF" />

      {/* DIFERENCIAIS SECTION */}
      <Diferenciais onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* HOW IT WORKS / TIMELINE */}
      <HowItWorks onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: HOW IT WORKS (LIGHT) -> HUMAN SERVICE (DARK) */}
      <WaveLightToDark topColor="#FAFAFA" bottomColor="#080808" />

      {/* HUMAN SERVICE SECTION */}
      <HumanService onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* PROGRAMA PARCEIRO FORTE (DARK) */}
      <PartnerProgram onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: PARCEIRO FORTE (DARK) -> ABOUT US (LIGHT) */}
      <WaveDarkToLight topColor="#080808" bottomColor="#FFFFFF" />

      {/* ABOUT US INSTITUTIONAL SECTION */}
      <AboutUs />

      {/* TESTIMONIALS SECTION */}
      <Testimonials onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* ORGANIC WAVE TRANSITION: TESTIMONIALS (LIGHT) -> LOCATION (DARK) */}
      <WaveLightToDark topColor="#FAFAFA" bottomColor="#080808" />

      {/* LOCALIZATION & MAP SECTION */}
      <Location onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* FINAL IMPACTFUL CTA WITH WHITE WAVE TOP */}
      <FinalCTA onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* FOOTER */}
      <Footer onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* FLOATING WHATSAPP BUTTON WITH PULSE EFFECT */}
      <FloatingWhatsApp onOpenWhatsAppModal={handleOpenWhatsAppModal} />

      {/* INTERACTIVE WHATSAPP QUOTE MODAL */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourceEvent={currentSourceEvent}
        defaultMessage={currentPrefillMessage}
        onTrackEvent={handleTrackEvent}
      />

      {/* Optional Tracking Log Badge for verification */}
      {lastTrackedEvent && (
        <div className="fixed top-20 right-4 z-50 bg-[#080808]/90 border border-[#FF6A00]/50 p-3 rounded-xl text-[10px] text-white shadow-2xl backdrop-blur-md max-w-xs animate-in slide-in-from-right duration-300">
          <p className="font-extrabold text-[#FF6A00] uppercase mb-0.5">
            ✓ Tracking Event Fired ({lastTrackedEvent.timestamp})
          </p>
          <p className="font-mono text-neutral-300 truncate">
            {lastTrackedEvent.eventName}
          </p>
        </div>
      )}
    </div>
  );
}
