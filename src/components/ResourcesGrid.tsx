import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, Video, Calculator, ArrowRight, Clock, User } from 'lucide-react';
import { resources } from '../data/mockData';

const iconMap = {
  blog: FileText,
  whitepaper: Download,
  webinar: Video,
  calculator: Calculator,
};

const ResourcesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Resources & Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Expert knowledge to help you maximize your voice AI investment
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => {
          const Icon = iconMap[resource.type];

          return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/resources/${resource.id}`)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    {resource.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4">
                  {resource.author && (
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{resource.author}</span>
                    </div>
                  )}
                  {resource.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{resource.readTime}</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold text-sm"
                  whileHover={{ x: 5 }}
                >
                  {resource.type === 'calculator' ? 'Try Calculator' : resource.type === 'webinar' ? 'Watch Now' : 'Read More'}
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <button className="btn-primary text-lg">
          Explore All Resources
        </button>
      </motion.div>
    </section>
  );
};

export default ResourcesGrid;
