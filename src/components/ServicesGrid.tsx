import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageSquare, Calendar, CheckCircle, AlertTriangle, Clock, Zap, Shield, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUpItem } from '../lib/animations';

const ServicesGrid = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

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
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeUpItem}
          className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4"
        >
          The Solution
        </motion.span>
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Voice Answers. SMS Books.
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          The perfect handoff between fast, friendly voice AI and accurate SMS booking
        </motion.p>
      </motion.div>

      {/* The Problem Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">The Problem</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '85%', text: 'of customers won\'t call back if no one answers' },
              { stat: '70%', text: 'of contractor calls go to voicemail during jobs' },
              { stat: '40%', text: 'address transcription error rate with voice AI' },
              { stat: '90%', text: 'of customers prefer texting with businesses' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{item.stat}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Two-Part Solution */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Voice AI Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-navy-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6">
              <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Voice AI Receptionist</h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">Fast, Friendly First Impression</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Answers every call instantly. Qualifies leads and hands off to SMS in under 2 minutes.
            </p>
            <ul className="space-y-3">
              {[
                'Answers 24/7 — no missed calls',
                'Asks "What\'s going on?" to understand the issue',
                'Collects zip code to verify service area',
                'Gets phone number for SMS handoff',
                'Handles emergencies appropriately',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* SMS Bot Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-navy-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl mb-6">
              <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">SMS Booking Bot</h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Accurate Data Collection</p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Handles the details that voice gets wrong. Customers respond on their schedule.
            </p>
            <ul className="space-y-3">
              {[
                'Collects full address accurately',
                'Shows real-time calendar availability',
                'Books appointment instantly',
                'Sends confirmation with details',
                'Customer can respond anytime',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Call Flow Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-navy-800/50 rounded-2xl p-8 md:p-10 mb-16"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">The Call Flow</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {[
            { icon: Phone, text: 'Customer Calls', color: 'primary' },
            { icon: Zap, text: 'AI Answers & Qualifies', color: 'primary' },
            { icon: MessageSquare, text: 'SMS Handoff', color: 'emerald' },
            { icon: Calendar, text: 'Appointment Booked', color: 'emerald' },
          ].map((step, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl ${
                  step.color === 'primary'
                    ? 'bg-primary-100 dark:bg-primary-900/30'
                    : 'bg-emerald-100 dark:bg-emerald-900/30'
                }`}
              >
                <step.icon className={`w-6 h-6 ${
                  step.color === 'primary'
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-emerald-600 dark:text-emerald-400'
                }`} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center whitespace-nowrap">
                  {step.text}
                </span>
              </motion.div>
              {index < 3 && (
                <ArrowRight className="w-5 h-5 text-gray-400 hidden md:block" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
          Average call time: Under 2 minutes • SMS booking: Customer's pace
        </p>
      </motion.div>

      {/* Why This Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6 mb-16"
      >
        {[
          {
            icon: Clock,
            title: 'Never Miss a Lead',
            description: '24/7 answering means every call gets answered, even at 2 AM or during jobs.',
          },
          {
            icon: Shield,
            title: 'No Transcription Errors',
            description: 'SMS eliminates voice transcription mistakes for addresses and details.',
          },
          {
            icon: Zap,
            title: 'Customer Preferred',
            description: '90% of customers prefer texting. Let them book on their own time.',
          },
        ].map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6"
          >
            <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4">
              <benefit.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
            <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-navy-800 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to stop missing calls?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get your AI receptionist set up in days, not months. We handle everything.
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
