import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PricingCalculator = () => {
  const [minutes, setMinutes] = useState(0);
  const [industry, setIndustry] = useState('realestate');

  const scrollToConsultation = () => {
    document.querySelector('#consultation')?.scrollIntoView({ behavior: 'auto' });
  };
  const industries = [
    { value: 'realestate', label: 'Real Estate', multiplier: 1.0 },
    { value: 'ecommerce', label: 'E-Commerce', multiplier: 0.9 },
    { value: 'financial', label: 'Financial Services', multiplier: 1.3 },
    { value: 'insurance', label: 'Insurance', multiplier: 1.1 },
    { value: 'other', label: 'Other', multiplier: 1.0 },
  ];

  const businessResearchCost = 500;

  const basePrice = 0.14; // Per minute (14 cents)
  const selectedIndustry = industries.find((i) => i.value === industry)!;

  const monthlyMinutesCost = minutes * basePrice * selectedIndustry.multiplier;

  return (
    <section className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Transparent, Usage-Based Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Pay only for what you use. No hidden fees, no surprises.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Calculate Your Cost
          </h3>

          {/* Minutes Slider */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Monthly Call Minutes
            </label>
            <div className="flex items-center gap-4 mb-2">
              <input
                type="range"
                min="0"
                max="20000"
                step="100"
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 min-w-[120px] text-right">
                {minutes.toLocaleString()} min
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>0</span>
              <span>20,000</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
              Enterprise (20,000+ min/month): Contact for quote
            </p>
          </div>

          {/* Industry Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Industry Type
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              {industries.map((ind) => (
                <option key={ind.value} value={ind.value}>
                  {ind.label}
                </option>
              ))}
            </select>
          </div>

          {/* Business Research */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              One-Time Setup
            </label>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-1">
                    Business Research & Prompt Engineering
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We research your company and create an optimized AI agent prompt tailored to your business
                  </p>
                </div>
                <span className="text-primary-600 dark:text-primary-400 font-bold whitespace-nowrap ml-4">
                  ${businessResearchCost}
                </span>
              </div>
            </div>
          </div>

          <button onClick={scrollToConsultation} className="w-full btn-primary text-lg">
            Get Custom Quote
          </button>
        </motion.div>

        {/* Price Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="sticky top-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Your Estimated Cost</h3>
            </div>

            <div className="space-y-6 mb-8">
              <div className="text-center">
                <div className="text-lg text-white/80 mb-3">First Month Total</div>
                <div className="text-6xl font-bold mb-2">${(monthlyMinutesCost + businessResearchCost).toFixed(0)}</div>
                <div className="text-white/70 mb-4">
                  including ${businessResearchCost} initialization fee
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/60 mb-2">Breakdown:</p>
                  <p className="text-white/90">
                    ${monthlyMinutesCost.toFixed(0)}/month recurring
                  </p>
                  <p className="text-xs text-white/60">
                    {minutes.toLocaleString()} minutes @ ${(basePrice * selectedIndustry.multiplier).toFixed(4)}/min
                  </p>
                  <p className="text-white/90 mt-2">
                    + ${businessResearchCost} one-time setup
                  </p>
                  <p className="text-xs text-white/60">
                    Business Research & Prompt Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-white/30 mb-6">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-1">Ongoing Monthly Cost</div>
                <div className="text-2xl font-bold">
                  ${monthlyMinutesCost.toFixed(0)}/month
                </div>
                <div className="text-xs text-white/60 mt-1">
                  (after first month)
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
              <p className="text-sm text-white/90 mb-3 font-semibold">
                What's Included:
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Real-time analytics',
                  'CRM integrations',
                  '99.99% uptime SLA',
                  'Security & compliance',
                  'Dedicated support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-white/60 text-center">
              * Estimate based on selected options. Final pricing may vary.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Discount Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center p-6 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl"
      >
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          <span className="text-primary-600 dark:text-primary-400">Save 10%</span> with annual billing
        </p>
      </motion.div>
    </section>
  );
};

export default PricingCalculator;
