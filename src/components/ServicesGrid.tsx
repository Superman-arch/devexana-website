import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import { services } from '../data/mockData';

const ServicesGrid = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'consulting' | 'implementation'>('consulting');

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  const filteredServices = services.filter((service) => service.category === activeTab);

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Comprehensive Voice AI Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          From strategy to implementation, we guide you through every step of your voice AI journey
        </motion.p>
      </div>

      {/* Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl">
          <button
            onClick={() => setActiveTab('consulting')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'consulting'
                ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Consulting Services
          </button>
          <button
            onClick={() => setActiveTab('implementation')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'implementation'
                ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Implementation Services
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.button
                onClick={() => {
                  navigate(`/services/${service.id}`);
                  window.scrollTo(0, 0);
                }}
                whileHover={{ x: 5 }}
                className="mt-6 font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1"
              >
                Learn more
                <Icons.ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <div className="glass-dark rounded-2xl p-8 sm:p-12 max-w-4xl w-full text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Not sure where to start?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our voice AI experts. We'll assess your needs and recommend the perfect solution.
          </p>
          <button className="btn-primary text-lg">
            Schedule Free Consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
