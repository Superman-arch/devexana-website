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
          Click the chat button in the bottom right corner to start a voice conversation
        </motion.p>
      </div>

      {/* Visual indicator pointing to widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center items-center mb-16"
      >
        <div className="relative">
          {/* Decorative orb background */}
          <div className="relative w-[200px] h-[200px]">
            {/* Outer glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-br from-teal-400 to-cyan-400"
            />

            {/* Orb body */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-teal-500/40">
              {/* Dark base */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />

              {/* Animated gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background: 'conic-gradient(from 0deg, #14b8a6, #06b6d4, #0d9488, #14b8a6)',
                    filter: 'blur(30px)',
                  }}
                />
              </motion.div>

              {/* Inner glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-14 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #2dd4bf 0%, transparent 70%)',
                }}
              />

              {/* Glossy highlight */}
              <div className="absolute top-3 left-6 right-6 h-12 rounded-full bg-gradient-to-b from-white/15 to-transparent" />

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center"
                >
                  <span className="text-white text-lg font-medium drop-shadow-lg block">Click the</span>
                  <span className="text-teal-400 text-xl font-bold drop-shadow-lg block">button below</span>
                  <span className="text-white/80 text-sm mt-1 block">↘</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
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
