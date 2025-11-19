import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/mockData';

const CaseStudySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section id="case-studies" className="section-container bg-gradient-to-br from-primary-700 via-primary-600 to-accent-700">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/80 max-w-3xl mx-auto"
        >
          See how we've helped businesses transform their communications
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentStudy.clientName}
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                    {currentStudy.industry}
                  </span>
                  <span className="px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {currentStudy.companySize}
                  </span>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Challenge
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Solution
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentStudy.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {currentStudy.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl"
                  >
                    <div className="text-4xl font-bold text-gradient mb-2">
                      {result.value}
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative p-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl text-white">
              <Quote className="absolute top-4 left-4 w-12 h-12 opacity-20" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic mb-6">
                  "{currentStudy.testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    {currentStudy.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{currentStudy.testimonial.author}</div>
                    <div className="text-white/80 text-sm">
                      {currentStudy.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all text-white"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all text-white"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySlider;
