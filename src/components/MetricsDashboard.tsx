import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { Users, Phone, Activity, Zap, Clock } from 'lucide-react';
import { staggerContainer, fadeUpItem } from '../lib/animations';

const metrics = [
  {
    label: 'Calls Answered',
    value: 100,
    suffix: '%',
    prefix: '',
    description: 'Every call gets answered, 24/7. No voicemail, no missed leads.',
    icon: Phone,
    color: 'primary',
  },
  {
    label: 'Avg Call Time',
    value: 2,
    suffix: ' min',
    prefix: '<',
    description: 'Quick qualification, then handoff to SMS for booking.',
    icon: Clock,
    color: 'accent',
  },
  {
    label: 'Prefer SMS',
    value: 90,
    suffix: '%',
    prefix: '',
    description: 'Customers prefer texting for booking and scheduling.',
    icon: Zap,
    color: 'primary',
  },
  {
    label: 'Uptime',
    value: 99.9,
    suffix: '%',
    prefix: '',
    description: 'Always on, even at 2 AM or during holidays.',
    icon: Activity,
    color: 'accent',
  },
];

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const animatedValue = useAnimatedCounter(metric.value, 2500, 0, isInView);

  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUpItem}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      <div className="relative bg-white dark:bg-navy-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 overflow-hidden h-full">
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Icon with bounce animation */}
        <motion.div
          className="relative z-10 mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: index * 0.1,
          }}
        >
          <div className={`inline-flex p-4 rounded-2xl ${
            metric.color === 'primary'
              ? 'bg-primary-500 shadow-lg shadow-primary-500/30'
              : 'bg-accent-500 shadow-lg shadow-accent-500/30'
          }`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </motion.div>

        {/* Animated Value */}
        <div className="relative z-10 mb-3">
          <motion.h3
            className="text-5xl lg:text-6xl font-bold text-primary-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: index * 0.1 + 0.2,
            }}
          >
            {metric.prefix}
            {metric.value === 99.9 ? animatedValue.toFixed(1) : Math.round(animatedValue)}
            {metric.suffix}
          </motion.h3>
        </div>

        {/* Label */}
        <div className="relative z-10">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {metric.label}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {metric.description}
          </p>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </motion.div>
  );
};

const MetricsDashboard = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="section-container bg-gray-50 dark:bg-navy-950">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeUpItem}
          className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4"
        >
          Why It Works
        </motion.span>
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Built for Contractors
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Every feature designed around how home service businesses actually work
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </motion.div>

      {/* Additional Info Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 bg-navy-800 dark:bg-navy-800/50 rounded-2xl p-8 border border-gray-700/30"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg text-white font-semibold mb-2">
              Focus on the job, not the phone
            </p>
            <p className="text-gray-400">
              Your AI receptionist handles calls while you're on site
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Phone, label: 'Vapi Voice AI' },
              { icon: Activity, label: 'n8n Workflows' },
              { icon: Users, label: 'Google Calendar' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsDashboard;
