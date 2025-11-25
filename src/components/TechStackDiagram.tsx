import { motion } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Calendar,
  Database,
  ArrowRight,
  ArrowDown,
  Mic,
  Workflow,
} from 'lucide-react';

const TechStackDiagram = () => {
  return (
    <section className="section-container bg-white dark:bg-gray-950">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4"
        >
          Tech Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Enterprise-Grade Infrastructure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Built on proven platforms that scale with your business
        </motion.p>
      </div>

      {/* Flow Diagram */}
      <div className="max-w-5xl mx-auto">
        {/* Desktop Horizontal Flow */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Step 1: Customer Call */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
                <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Customer Calls</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Your business line</p>
            </div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />

          {/* Step 2: Vapi Voice AI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border-2 border-primary-200 dark:border-primary-800 text-center">
              <div className="inline-flex p-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4">
                <Mic className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Vapi Voice AI</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Answers & qualifies</p>
            </div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />

          {/* Step 3: n8n + Twilio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-6 border-2 border-emerald-200 dark:border-emerald-800 text-center">
              <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-4">
                <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">n8n + Twilio</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">SMS booking flow</p>
            </div>
          </motion.div>

          <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0" />

          {/* Step 4: Google Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="inline-flex p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl mb-4">
                <Calendar className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Google Calendar</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Scheduling</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Flow */}
        <div className="md:hidden space-y-4">
          {[
            { icon: Phone, title: 'Customer Calls', desc: 'Your business line', color: 'blue' },
            { icon: Mic, title: 'Vapi Voice AI', desc: 'Answers & qualifies', color: 'primary' },
            { icon: MessageSquare, title: 'n8n + Twilio', desc: 'SMS booking flow', color: 'emerald' },
            { icon: Calendar, title: 'Google Calendar', desc: 'Scheduling', color: 'orange' },
          ].map((step, index) => (
            <div key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-6 border text-center ${
                  step.color === 'primary'
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
                    : step.color === 'emerald'
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-4 ${
                  step.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  step.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' :
                  step.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                    step.color === 'primary' ? 'text-primary-600 dark:text-primary-400' :
                    step.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' :
                    'text-orange-600 dark:text-orange-400'
                  }`} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
              </motion.div>
              {index < 3 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Mic, label: 'Vapi.ai', desc: 'Voice AI' },
            { icon: Workflow, label: 'n8n', desc: 'Automation' },
            { icon: MessageSquare, label: 'Twilio', desc: 'SMS' },
            { icon: Database, label: 'Airtable', desc: 'CRM' },
          ].map((tech, index) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700"
            >
              <tech.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
              <p className="font-semibold text-gray-900 dark:text-white text-sm">{tech.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{tech.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackDiagram;
