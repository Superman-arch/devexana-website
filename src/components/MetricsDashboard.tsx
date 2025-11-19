import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { metrics } from '../data/mockData';
import { TrendingUp, Users, Phone, Activity } from 'lucide-react';

const iconMap = {
  'Customer Calls': Phone,
  'Hours Saved': TrendingUp,
  'Answered Calls': Users,
  'Uptime': Activity,
};

const MetricCard = ({ metric, index }: { metric: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Parse the value to get the number
  const numericValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
  const animatedValue = useAnimatedCounter(numericValue, 2000, 0, isInView);

  const Icon = iconMap[metric.label as keyof typeof iconMap];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div className="relative z-10 mb-4">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
        </div>

        {/* Value */}
        <div className="relative z-10 mb-2">
          <motion.h3
            className="text-5xl font-bold text-gradient"
            initial={{ scale: 0.5 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {metric.value.startsWith('+') && '+'}
            {animatedValue}
            {metric.suffix}
          </motion.h3>
        </div>

        {/* Label */}
        <div className="relative z-10">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {metric.label}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {metric.description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

const MetricsDashboard = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <div className="text-center mb-16">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Proven Results Across Industries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Our AI voice agents deliver measurable impact from day one
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>

      {/* Additional Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 glass-dark rounded-2xl p-8 text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Enterprise-grade voice AI solutions built for reliability and compliance
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Enterprise-Grade Security</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>24/7 Support</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsDashboard;
