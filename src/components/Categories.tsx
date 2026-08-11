import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, MessageCircle, Check, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { CategoryItem } from '../types';

interface CategoriesProps {
  onOpenWhatsAppModal: (source: string, prefillMessage?: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onOpenWhatsAppModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);

  const featuredCat = CATEGORIES.find((c) => c.isFeatured) || CATEGORIES[0];
  const otherCats = CATEGORIES.filter((c) => !c.isFeatured);

  const handleCategoryClick = (cat: CategoryItem) => {
    setSelectedCategory(cat);
    onOpenWhatsAppModal(
      `click_whatsapp_category_${cat.id}`,
      `Olá! Gostaria de consultar modelos e orçamentos para a categoria de ${cat.title} na Barra Forte.`
    );
  };

  return (
    <section id="produtos" className="bg-[#F5F5F5] text-[#080808] py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6A00] bg-[#FF6A00]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              Catálogo Completo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#080808] tracking-tight leading-tight">
              Tudo o que sua obra precisa.<br className="hidden sm:inline" />
              <span className="text-[#FF6A00]"> Em um só lugar.</span>
            </h2>
          </div>
          <p className="text-neutral-600 max-w-md text-sm sm:text-base font-normal leading-relaxed">
            Do começo da estrutura aos acabamentos refinados que transformam os ambientes com qualidade e agilidade.
          </p>
        </div>

        {/* FEATURED CATEGORY CARD: PISOS E REVESTIMENTOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div
            onClick={() => handleCategoryClick(featuredCat)}
            className="group relative rounded-[28px] overflow-hidden bg-[#080808] text-white shadow-2xl cursor-pointer border border-neutral-800 hover:border-[#FF6A00]/50 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
              
              {/* Text side */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6A00] text-white text-xs font-extrabold tracking-wider uppercase shadow-md shadow-[#FF6A00]/30">
                      <Sparkles className="w-3.5 h-3.5" /> {featuredCat.badge || 'Destaque'}
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                      Barra Forte Jaraguá
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 group-hover:text-[#FF6A00] transition-colors">
                    {featuredCat.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                    {featuredCat.shortDesc}
                  </p>

                  {/* Popular items tag pills */}
                  {featuredCat.popularItems && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredCat.popularItems.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium flex items-center gap-1.5"
                        >
                          <Check className="w-3 h-3 text-[#FF6A00]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6A00] group-hover:underline">
                    <MessageCircle className="w-4 h-4 fill-[#FF6A00]/20" />
                    Solicitar catálogo &amp; orçamento no WhatsApp
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 shadow-lg shadow-[#FF6A00]/30">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                <img
                  src={featuredCat.image}
                  alt={featuredCat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:hidden" />
              </div>

            </div>
          </div>
        </motion.div>

        {/* OTHER CATEGORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCats.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => handleCategoryClick(cat)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-neutral-200 hover:border-[#FF6A00]/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-neutral-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#080808] group-hover:bg-[#FF6A00] group-hover:text-white flex items-center justify-center transition-colors shadow-md">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h4 className="text-xl font-extrabold text-white group-hover:text-[#FF6A00] transition-colors">
                    {cat.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-4">
                  {cat.shortDesc}
                </p>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#FF6A00]">
                  <span>Pedir Orçamento</span>
                  <span className="text-neutral-400 font-normal group-hover:text-[#FF6A00] transition-colors">
                    WhatsApp &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
