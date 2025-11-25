import { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Check, Sparkles } from 'lucide-react';
import { services } from '../data/mockData';
import { staggerContainer, fadeUpItem } from '../lib/animations';

// 3D tilt card component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServicesGrid = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'consulting' | 'implementation'>('consulting');
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  const filteredServices = services.filter((service) => service.category === activeTab);

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    element?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section id="services" className="section-container bg-white dark:bg-navy-900">
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.span
          variants={fadeUpItem}
          className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4"
        >
          Our Services
        </motion.span>
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Comprehensive Voice AI Services
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          From strategy to implementation, we guide you through every step of your voice AI journey
        </motion.p>
      </motion.div>

      {/* Tab Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex p-1.5 bg-gray-100 dark:bg-navy-800 rounded-2xl">
          {['consulting', 'implementation'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as 'consulting' | 'implementation')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab === 'consulting' ? 'Consulting Services' : 'Implementation Services'}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        key={activeTab}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeUpItem}
            custom={index}
          >
            <TiltCard className="h-full perspective-1000">
              <div className="group relative bg-white dark:bg-navy-800 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-8 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 overflow-hidden h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
                      {getIcon(service.icon)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.button
                    onClick={() => {
                      navigate(`/services/${service.id}`);
                      window.scrollTo(0, 0);
                    }}
                    whileHover={{ x: 8 }}
                    className="font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-2"
                  >
                    Learn more
                    <Icons.ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Decorative corner element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-20"
      >
        <div className="bg-navy-800 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex p-3 bg-primary-500/20 rounded-2xl mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary-400" />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not sure where to start?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our voice AI experts. We'll assess your needs and recommend the perfect solution.
            </p>
            <motion.button
              onClick={scrollToConsultation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 text-lg"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesGrid;
