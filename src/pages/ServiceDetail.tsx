import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const Icon = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl">
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                {service.category === 'consulting' ? 'Consulting Service' : 'Implementation Service'}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {service.description}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What's Included
          </h2>
          <div className="grid gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <Check className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-dark rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Schedule a free consultation to discuss your specific needs
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.querySelector('#consultation')?.scrollIntoView({ behavior: 'auto' });
              }, 100);
            }}
            className="btn-primary text-lg"
          >
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
