import { CategoryItem, DifferentialItem, StepItem, TestimonialItem } from '../types';

export const COMPANY_INFO = {
  name: "Barra Forte | Casa e Construção",
  city: "Jaraguá do Sul",
  state: "SC",
  fullAddress: "R. Feliciano Bortolini, 1110 - Barra do Rio Cerro, Jaraguá do Sul - SC, 89260-180",
  phone: "(47) 3370-0000",
  whatsappNumber: "5547999998888",
  formattedWhatsapp: "(47) 99999-8888",
  workingHours: "Segunda a Sexta: 07h30 às 18h00 | Sábado: 07h30 às 12h00",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Feliciano+Bortolini,+1110,+Barra+do+Rio+Cerro,+Jaragu%C3%A1+do+Sul+-+SC,+89260-180",
  mapEmbedUrl: "https://maps.google.com/maps?q=Rua+Feliciano+Bortolini,+1110,+Barra+do+Rio+Cerro,+Jaragu%C3%A1+do+Sul+-+SC&t=m&z=17&ie=UTF8&iwloc=A&output=embed",
  instagramUrl: "https://www.instagram.com/barrafortecec/",
  instagramHandle: "@barrafortecec",
  yearsInMarket: "23+",
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'pisos-revestimentos',
    title: 'Pisos e Revestimentos',
    shortDesc: 'Porcelanatos, cerâmicas, laminados e vinílicos de alta durabilidade e design contemporâneo.',
    image: '/assets/pisos-e-revestimentos.webp',
    isFeatured: true,
    badge: 'Destaque Especial',
    popularItems: ['Porcelanatos Grandes Format', 'Vinílicos Clicados', 'Cerâmicas Externas', 'Revestimentos 3D', 'Laminados Premium']
  },
  {
    id: 'materiais-basicos',
    title: 'Materiais Básicos',
    shortDesc: 'Cimento, areia, tijolos, brita, argamassa e ferragens estruturais para todas as fases da obra.',
    image: '/assets/materiais-basicos.webp',
    popularItems: ['Cimento CP-II / CP-V', 'Argamassas AC-I, AC-II e AC-III', 'Vergalhões e Telhas', 'Tijolos e Blocos']
  },
  {
    id: 'hidraulica',
    title: 'Hidráulica e Saneamento',
    shortDesc: 'Tubos, conexões, caixas d’água, torneiras, registros e sistemas de esgoto de alta resistência.',
    image: '/assets/hidraulica-e-saneamento.webp',
    popularItems: ['Tubos Água Fria e Quente (PEX/PPR)', 'Caixas D’água Fortlev/Tigre', 'Metais e Misturadores', 'Conexões Esgoto']
  },
  {
    id: 'eletrica',
    title: 'Materiais Elétricos',
    shortDesc: 'Fios, cabos, disjuntores, quadros de distribuição, tomadas e iluminação LED eficiente.',
    image: '/assets/materiais-eletricos.webp',
    popularItems: ['Cabos Flexíveis Antichama', 'Módulos e Interrupções', 'Lustres e Painéis LED', 'Quadros e Disjuntores DTM']
  },
  {
    id: 'tintas',
    title: 'Tintas e Acessórios',
    shortDesc: 'Tintas acrílicas, esmaltes, seladores, massas corridas, pincéis e rolos para acabamento perfeito.',
    image: '/assets/tintas-e-acessorios.webp',
    popularItems: ['Tinta Lavável Premium', 'Massa Acrílica Externa', 'Resinas e Vernizes', 'Trinchas e Rolo de Lã']
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas e Equipamentos',
    shortDesc: 'Ferramentas manuais, elétricas, discos de corte, medidores a laser e EPIs indispensáveis.',
    image: '/assets/ferramentas-e-equipamentos.webp',
    popularItems: ['Furadeiras e Parafusadeiras', 'Cortadores de Piso Profissionais', 'Níveis a Laser', 'EPIs e Proteção']
  },
  {
    id: 'acabamentos',
    title: 'Acabamentos e Metais',
    shortDesc: 'Bacias sanitárias, cubas, duchas, gabinetes e acessórios finais para banheiros e cozinhas.',
    image: '/assets/acabamentos-e-metais.webp',
    popularItems: ['Kits Bacia com Caixa Acoplada', 'Duchas Higiênicas e Chuveiros', 'Cubas de Inox e Apoio', 'Torneiras Gourmet']
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'preco',
    title: 'Preço Competitivo',
    description: 'Condições facilitadas e preço justo direto da fábrica para sua obra avançar sem estourar o orçamento.',
    iconName: 'DollarSign'
  },
  {
    id: 'entrega',
    title: 'Entrega Rápida em Jaraguá',
    description: 'Frota própria e logística ágil para garantir que seus materiais cheguem exatamente quando você precisa.',
    iconName: 'Truck'
  },
  {
    id: 'atendimento',
    title: 'Atendimento Especializado',
    description: 'Equipe consultiva e experiente que entende de obra e ajuda você a calcular e escolher sem desperdícios.',
    iconName: 'UserCheck'
  },
  {
    id: 'whatsapp',
    title: 'Compra Direta no WhatsApp',
    description: 'Sem filas, sem burocracia. Solicite orçamentos, envie sua lista de materiais e feche pelo próprio celular.',
    iconName: 'MessageSquare'
  }
];

export const HOW_IT_WORKS: StepItem[] = [
  {
    number: '01',
    title: 'CHAME NO WHATSAPP',
    description: 'Clique no botão, diga o que precisa ou mande sua lista de materiais em foto, PDF ou texto.'
  },
  {
    number: '02',
    title: 'RECEBA SEU ORÇAMENTO',
    description: 'Nosso especialista calcula as quantidades, indica as melhores opções e envia o orçamento detalhado rapidamente.'
  },
  {
    number: '03',
    title: 'CONFIRME SUA COMPRA',
    description: 'Escolha a forma de pagamento mais conveniente (PIX, cartão parcelado ou faturamento) e agende o envio.'
  },
  {
    number: '04',
    title: 'RECEBA SEUS MATERIAIS',
    description: 'Nossa equipe entrega o pedido diretamente no seu endereço em Jaraguá do Sul e região para sua obra não parar.'
  }
];

// Placeholder reviews as requested in rule 16: "não inventar depoimentos reais. Criar placeholders identificados no código para substituição posterior."
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-01',
    name: 'Carlos Eduardo M.',
    role: 'Mestre de Obras',
    location: 'Bairro Rau, Jaraguá do Sul',
    rating: 5,
    comment: 'Trabalho com construção há 15 anos na região e a Barra Forte é parceira de todas as minhas obras. Atendimento nota dez pelo WhatsApp e o material entrega na hora combinada.',
    projectType: 'Construção Residencial',
    date: 'Julho de 2026',
    isPlaceholderNote: '[PLACEHOLDER - Depoimento ilustrativo para substituição por avaliação real do Google My Business / Clientes]'
  },
  {
    id: 'depoimento-02',
    name: 'Fernanda & Rogério',
    role: 'Clientes Residência',
    location: 'Bairro Barra do Rio Cerro, Jaraguá do Sul',
    rating: 5,
    comment: 'Compramos todos os porcelanatos e acabamentos da nossa reforma com eles. A equipe ajudou muito na escolha das metragens certas e a entrega foi super cuidadosa!',
    projectType: 'Reforma de Sobrado',
    date: 'Junho de 2026',
    isPlaceholderNote: '[PLACEHOLDER - Depoimento ilustrativo para substituição por avaliação real do Google My Business / Clientes]'
  },
  {
    id: 'depoimento-03',
    name: 'Arq. Juliana S.',
    role: 'Arquiteta e Especificadora',
    location: 'Jaraguá do Sul - SC',
    rating: 5,
    comment: 'Indico a Barra Forte de olhos fechados aos meus clientes. O Programa Parceiro Forte agiliza os orçamentos e o catálogo de pisos e revestimentos é incrível.',
    projectType: 'Especificação de Projetos',
    date: 'Maio de 2026',
    isPlaceholderNote: '[PLACEHOLDER - Depoimento ilustrativo para substituição por avaliação real do Google My Business / Clientes]'
  }
];

export const PISO_FINISHES = [
  {
    id: 'polido',
    title: 'Porcelanatos Polidos',
    desc: 'Brilho espelhado, sofisticação e amplitude para salas e quartos modernos.',
    img: '/assets/porcelanato-polido.webp'
  },
  {
    id: 'acetinado',
    title: 'Porcelanatos Acetinados',
    desc: 'Toque suave, toque fosco aconchegante e altíssima resistência a riscos.',
    img: '/assets/porcelanato-acetinado.webp'
  },
  {
    id: 'vinilico',
    title: 'Pisos Vinílicos & Laminados',
    desc: 'Conforto térmico, acústico e visual amadeirado caloroso para dormitórios e escritórios.',
    img: '/assets/piso-vinilico.webp'
  },
  {
    id: 'externo',
    title: 'Revestimentos Externos / Borda',
    desc: 'Antiderrapantes, antiderrapantes rústicos e pedras decorativas para garagens e áreas gourmet.',
    img: '/assets/revestimento-externo.webp'
  }
];
