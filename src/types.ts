export interface CategoryItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  isFeatured?: boolean;
  popularItems?: string[];
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string; // e.g. "Mestre de Obras", "Cliente Residencial", "Arquiteta"
  location: string;
  rating: number;
  comment: string;
  projectType: string;
  date: string;
  isPlaceholderNote?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface LeadTrackingEvent {
  eventName: string;
  location: string;
  timestamp: string;
  customMessage?: string;
}
