export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface AgentType {
  id: string;
  name: string;
  description: string;
  industry: string;
  features: string[];
  sampleTranscript: string;
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface Service {
  id: string;
  category: 'consulting' | 'implementation';
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TechStackItem {
  id: string;
  name: string;
  category: 'input' | 'core' | 'integration' | 'analytics';
  icon?: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  companySize: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  logo?: string;
}

export interface PricingTier {
  name: string;
  basePrice: number;
  perAgent: number;
  features: string[];
}

export interface Resource {
  id: string;
  type: 'blog' | 'whitepaper' | 'webinar' | 'calculator';
  title: string;
  description: string;
  thumbnail?: string;
  link: string;
  publishedDate: string;
  author?: string;
  readTime?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  url?: string;
}

export interface FormStep {
  id: number;
  title: string;
  fields: FormField[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'slider';
  placeholder?: string;
  options?: { label: string; value: string }[];
  required?: boolean;
  validation?: any;
}

export interface ConsultationFormData {
  // Company Information
  companyName: string;
  industry: string;
  companySize: string;
  website?: string;

  // Contact Information
  fullName: string;
  email: string;
  phone: string;
  role: string;

  // Needs Assessment
  currentChallenges: string[];
  desiredOutcomes: string[];
  timeframe: string;

  // Budget & Preferences
  budgetRange: string;
  numberOfAgents: number;
  preferredContactMethod: 'email' | 'phone' | 'video';
  scheduledDate?: string;
  additionalNotes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'agent';
  content: string;
  timestamp: Date;
}
