import type { Industry, AgentType, Metric, Service, CaseStudy, Resource, ClientLogo } from '../types';

export const industries: Industry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: 'Home',
    description: 'Lead qualification and property scheduling agents'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: 'ShoppingCart',
    description: 'Customer support and order management agents'
  },
  {
    id: 'financial',
    name: 'Financial Services',
    icon: 'DollarSign',
    description: 'Secure financial advisory and support agents'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: 'Shield',
    description: 'Claims processing and policy inquiry agents'
  }
];

export const agentTypes: AgentType[] = [
  {
    id: 'lead-qual-realestate',
    name: 'Lead Qualification · Buyer',
    industry: 'real-estate',
    description: 'AI assistant designed for real estate lead qualification. Identifies buyer preferences and schedules property viewings.',
    features: ['Real-Time Booking', 'Lead Qualification', 'Property Matching'],
    sampleTranscript: 'Meet Paul, an AI assistant designed for real estate lead qualification. Paul\'s primary objective is to identify the preference...'
  },
  {
    id: 'customer-support-restaurant',
    name: 'Customer Support · Restaurant',
    industry: 'ecommerce',
    description: 'AI assistant for Gourmet Table restaurant. Handles scheduling, reservations, and customer inquiries.',
    features: ['Real-Time Booking', 'Receptionist', 'Scheduling'],
    sampleTranscript: 'Meet Laura, an AI assistant for Gourmet Table, a fine dining restaurant. Her primary role is to assist callers in scheduling...'
  }
];

export const metrics: Metric[] = [
  {
    label: 'Customer Calls',
    value: '65',
    suffix: 'M+',
    description: 'Proven voice AI performance across real, high-volume phone operations.'
  },
  {
    label: 'Hours Saved',
    value: '4',
    suffix: 'M+',
    description: 'Less time on manual calls. More time for growth, sales, and support.'
  },
  {
    label: 'Answered Calls',
    value: '+35',
    suffix: '%',
    description: 'Voice agents respond instantly — no hold music, no missed opportunities.'
  },
  {
    label: 'Uptime',
    value: '99.99',
    suffix: '%',
    description: 'AI voice agents your business can rely on, every minute of every day.'
  }
];

export const services: Service[] = [
  {
    id: 'strategy',
    category: 'consulting',
    title: 'Voice AI Strategy Development',
    description: 'Comprehensive assessment and roadmap for implementing voice AI in your business',
    icon: 'Lightbulb',
    features: [
      'Current state analysis',
      'Use case identification',
      'ROI modeling',
      'Implementation roadmap'
    ]
  },
  {
    id: 'personality',
    category: 'consulting',
    title: 'Agent Personality & Script Design',
    description: 'Custom conversational design that matches your brand voice',
    icon: 'MessageSquare',
    features: [
      'Brand voice alignment',
      'Conversation flow design',
      'Tone & personality development',
      'Script optimization'
    ]
  },
  {
    id: 'architecture',
    category: 'consulting',
    title: 'Integration Architecture Planning',
    description: 'Technical planning for seamless integration with your existing systems',
    icon: 'Network',
    features: [
      'System compatibility assessment',
      'API integration design',
      'Data flow mapping',
      'Security architecture'
    ]
  },
  {
    id: 'compliance',
    category: 'consulting',
    title: 'Compliance & Security Consulting',
    description: 'Ensure your voice AI meets all regulatory requirements',
    icon: 'Lock',
    features: [
      'Data privacy consulting',
      'Security best practices',
      'Industry compliance guidance',
      'Security audits'
    ]
  },
  {
    id: 'optimization',
    category: 'consulting',
    title: 'Performance Optimization',
    description: 'Continuous improvement and optimization of your voice agents',
    icon: 'TrendingUp',
    features: [
      'Performance analytics',
      'A/B testing',
      'Conversation analysis',
      'KPI tracking'
    ]
  },
  {
    id: 'training',
    category: 'consulting',
    title: 'Training & Change Management',
    description: 'Prepare your team for successful voice AI adoption',
    icon: 'Users',
    features: [
      'Team training programs',
      'Change management strategy',
      'Documentation',
      'Ongoing support'
    ]
  },
  {
    id: 'development',
    category: 'implementation',
    title: 'Custom Agent Development',
    description: 'Build tailored voice agents for your specific needs',
    icon: 'Code',
    features: [
      'Custom agent creation',
      'Advanced NLP training',
      'Multi-language support',
      'Personality customization'
    ]
  },
  {
    id: 'integration',
    category: 'implementation',
    title: 'CRM/ERP Integration',
    description: 'Connect voice agents with your business systems',
    icon: 'Plug',
    features: [
      'Salesforce integration',
      'HubSpot integration',
      'Custom API connections',
      'Real-time data sync'
    ]
  },
  {
    id: 'orchestration',
    category: 'implementation',
    title: 'Multi-channel Orchestration',
    description: 'Deploy agents across voice, chat, SMS, and more',
    icon: 'Radio',
    features: [
      'Voice channel setup',
      'SMS integration',
      'WhatsApp integration',
      'Unified dashboard'
    ]
  },
  {
    id: 'testing',
    category: 'implementation',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing to ensure flawless performance',
    icon: 'CheckCircle',
    features: [
      'Automated testing',
      'User acceptance testing',
      'Performance testing',
      'Security testing'
    ]
  },
  {
    id: 'deployment',
    category: 'implementation',
    title: 'Deployment & Scaling',
    description: 'Smooth rollout and scaling of your voice AI solution',
    icon: 'Rocket',
    features: [
      'Phased deployment',
      'Load balancing',
      'Auto-scaling setup',
      'Monitoring & alerts'
    ]
  },
  {
    id: 'maintenance',
    category: 'implementation',
    title: 'Ongoing Support & Maintenance',
    description: '24/7 support to keep your voice agents running perfectly',
    icon: 'Wrench',
    features: [
      '24/7 technical support',
      'Regular updates',
      'Bug fixes',
      'Performance monitoring'
    ]
  }
];

// Case studies removed - startup hasn't worked with clients yet
export const caseStudies: CaseStudy[] = [];

export const resources: Resource[] = [
  {
    id: 'blog-1',
    type: 'blog',
    title: 'The ROI of Voice AI: A Comprehensive Guide',
    description: 'Learn how to calculate and maximize the return on investment from voice AI implementation.',
    link: '/resources/roi-guide',
    publishedDate: '2025-01-10',
    author: 'Amadeo Bonde',
    readTime: '8 min read'
  },
  {
    id: 'whitepaper-1',
    type: 'whitepaper',
    title: 'Voice AI Implementation Best Practices',
    description: 'Complete guide to implementing enterprise voice AI solutions.',
    link: '/resources/implementation-whitepaper',
    publishedDate: '2024-12-15',
    readTime: '25 min read'
  },
  {
    id: 'webinar-1',
    type: 'webinar',
    title: 'Building High-Performance Voice Agents',
    description: 'Watch our expert panel discuss strategies for creating effective voice AI agents.',
    link: '/resources/webinar-building-agents',
    publishedDate: '2025-01-05'
  },
  {
    id: 'calculator-1',
    type: 'calculator',
    title: 'Voice AI ROI Calculator',
    description: 'Calculate potential savings and efficiency gains from voice AI implementation.',
    link: '/tools/roi-calculator',
    publishedDate: '2024-11-01'
  }
];

// Client logos removed - startup hasn't worked with clients yet
export const clientLogos: ClientLogo[] = [];
