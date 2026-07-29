export interface ServiceItem {
  id: string;
  title: string;
  category: 'managed' | 'cloud' | 'security' | 'productivity' | 'infrastructure';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  accentColor: 'amber' | 'cyan' | 'rose';
  iconName: string;
}

export interface LoopStep {
  stepNumber: number;
  name: string;
  description: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  planNumber: number;
  title: string;
  price: string;
  priceSubtext?: string;
  badge?: string;
  subtitle: string;
  features: string[];
  processTag?: string;
  earlyBonus?: string;
  note?: string;
  highlighted?: boolean;
  accentColor: string;
}

export interface CoreGuarantee {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyBenefits: string[];
  caseMetric: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security' | 'Cloud' | 'Billing';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

