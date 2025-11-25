import { motion } from 'framer-motion';

const InteractiveDemo = () => {
  return (
    <section id="demo" className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Talk to Our AI Voice Agent Demo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Click the "TALK WITH AI" button in the bottom right corner to start a voice conversation
        </motion.p>
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Try Our AI Voice Assistant
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Look for the chat widget in the bottom right corner. Our AI agent can:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 font-bold">•</span>
            <span>Answer questions about our services</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 font-bold">•</span>
            <span>Provide real-time information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 font-bold">•</span>
            <span>Handle natural conversations with context</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 font-bold">•</span>
            <span>Demonstrate enterprise-grade voice AI capabilities</span>
          </li>
        </ul>

        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Demo Note:</strong> SMS and scheduling functionality are not available in this demo version. These features can be fully integrated with a production model tailored to your specific business needs.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default InteractiveDemo;
