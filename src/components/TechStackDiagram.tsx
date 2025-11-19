import { motion } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Mail,
  Smartphone,
  Globe,
  Brain,
  Zap,
  Database,
  BarChart,
  TrendingUp,
  FileText,
  Headphones,
  ArrowRight,
} from 'lucide-react';

const TechStackDiagram = () => {
  const channels = [
    { icon: Phone, label: 'Phone', color: 'from-blue-500 to-blue-600' },
    { icon: MessageSquare, label: 'SMS', color: 'from-green-500 to-green-600' },
    { icon: Smartphone, label: 'WhatsApp', color: 'from-emerald-500 to-emerald-600' },
    { icon: Mail, label: 'Email', color: 'from-purple-500 to-purple-600' },
    { icon: Globe, label: 'Web Chat', color: 'from-indigo-500 to-indigo-600' },
  ];

  const core = [
    { icon: Brain, label: 'LLM Integration', description: 'GPT-4, Claude, Gemini' },
    { icon: Zap, label: 'Real-time Processing', description: 'Sub-second response' },
    { icon: Database, label: 'Custom Training', description: 'Industry-specific models' },
  ];

  const integrations = [
    { label: 'Salesforce', icon: Database },
    { label: 'HubSpot', icon: BarChart },
    { label: 'Microsoft Teams', icon: MessageSquare },
    { label: 'Slack', icon: MessageSquare },
    { label: 'Zendesk', icon: Headphones },
    { label: 'Custom APIs', icon: Zap },
  ];

  const analytics = [
    { icon: BarChart, label: 'Call Analytics' },
    { icon: TrendingUp, label: 'Performance Metrics' },
    { icon: FileText, label: 'Transcriptions' },
    { icon: Headphones, label: 'Sentiment Analysis' },
  ];

  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Complete Voice AI Operating System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          From input to insights — a unified platform that connects every touchpoint
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Mobile: Vertical Layout */}
        <div className="block lg:hidden space-y-8">
          {/* Input Channels */}
          <FlowSection title="Input Channels" items={channels} type="channels" />
          <FlowArrow />

          {/* AI Core */}
          <FlowSection title="AI Core" items={core} type="core" />
          <FlowArrow />

          {/* Integrations */}
          <FlowSection title="Integrations" items={integrations} type="integrations" />
          <FlowArrow />

          {/* Analytics */}
          <FlowSection title="Analytics" items={analytics} type="analytics" />
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-4 items-center">
          {/* Input Channels */}
          <div className="col-span-1">
            <FlowSection title="Input Channels" items={channels} type="channels" />
          </div>

          <div className="col-span-1 flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary-500" />
          </div>

          {/* AI Core */}
          <div className="col-span-2">
            <FlowSection title="AI Core" items={core} type="core" />
          </div>

          <div className="col-span-1 flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary-500" />
          </div>

          {/* Integrations & Analytics */}
          <div className="col-span-2 space-y-6">
            <FlowSection title="Integrations" items={integrations} type="integrations" />
            <FlowSection title="Analytics" items={analytics} type="analytics" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FlowSection = ({ title, items, type }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 text-center">
        {title}
      </h3>

      <div className={`space-y-3 ${type === 'core' ? 'bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-2xl border-2 border-primary-200 dark:border-primary-800' : ''}`}>
        {items.map((item: any, index: number) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`${
              type === 'channels'
                ? 'flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all'
                : type === 'core'
                ? 'p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700'
                : type === 'integrations'
                ? 'flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg'
                : 'flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700'
            }`}
          >
            {item.icon && (
              <div
                className={`p-2 rounded-lg bg-gradient-to-br ${
                  item.color || 'from-primary-500 to-accent-500'
                }`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
            )}

            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-white text-sm">
                {item.label}
              </p>
              {item.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const FlowArrow = () => (
  <div className="flex justify-center lg:hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <ArrowRight className="w-8 h-8 text-primary-500 transform rotate-90" />
    </motion.div>
  </div>
);

export default TechStackDiagram;
