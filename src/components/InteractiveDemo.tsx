import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const InteractiveDemo = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    // Initialize Vapi with the public key
    vapiRef.current = new Vapi('65517730-bbfc-4034-accc-3172fafe5c62');

    if (vapiRef.current) {
      vapiRef.current.on('call-start', () => {
        setIsCallActive(true);
        setIsLoading(false);
        setCallStatus('Connected');
      });

      vapiRef.current.on('call-end', () => {
        setIsCallActive(false);
        setIsSpeaking(false);
        setIsListening(false);
        setIsLoading(false);
        setCallStatus('');
      });

      vapiRef.current.on('speech-start', () => {
        setIsSpeaking(true);
        setIsListening(false);
      });

      vapiRef.current.on('speech-end', () => {
        setIsSpeaking(false);
      });

      vapiRef.current.on('message', (message: { type: string; role: string }) => {
        if (message.type === 'transcript' && message.role === 'user') {
          setIsListening(true);
          setTimeout(() => setIsListening(false), 1000);
        }
      });

      vapiRef.current.on('error', (error: Error) => {
        console.error('Vapi error:', error);
        setCallStatus('');
        setIsLoading(false);
        setIsCallActive(false);
      });
    }

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const startCall = async () => {
    if (vapiRef.current && !isLoading) {
      try {
        setIsLoading(true);
        setCallStatus('Connecting...');
        await vapiRef.current.start('3a9f7d34-f0b0-44e4-88fa-edff18d3a445');
      } catch (error) {
        console.error('Error starting call:', error);
        setCallStatus('');
        setIsLoading(false);
      }
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

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
          Click the orb below to start a voice conversation with our AI assistant
        </motion.p>
      </div>

      {/* Orb Container */}
      <div className="flex justify-center items-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Pulsing rings when active */}
          <AnimatePresence>
            {isCallActive && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  style={{ width: '200px', height: '200px' }}
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1.7, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                  style={{ width: '200px', height: '200px' }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Main Orb */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isCallActive ? endCall : startCall}
            className="relative w-[200px] h-[200px] cursor-pointer"
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                opacity: isCallActive ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute inset-0 rounded-full blur-2xl ${
                isCallActive
                  ? 'bg-gradient-to-br from-emerald-400 to-cyan-500'
                  : 'bg-gradient-to-br from-blue-400 to-cyan-400'
              }`}
            />

            {/* Orb body */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-500 ${
                isCallActive ? 'shadow-emerald-500/40' : 'shadow-blue-500/40'
              }`}
            >
              {/* Dark base */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />

              {/* Animated gradient layer 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 opacity-70"
                  style={{
                    background: isCallActive
                      ? 'conic-gradient(from 0deg, #10b981, #06b6d4, #14b8a6, #10b981)'
                      : 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #2563eb, #3b82f6)',
                    filter: 'blur(30px)',
                  }}
                />
              </motion.div>

              {/* Animated gradient layer 2 */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: isSpeaking ? [1, 1.15, 1] : isListening ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.5, repeat: isSpeaking || isListening ? Infinity : 0 },
                }}
                className="absolute inset-6"
              >
                <div
                  className="w-full h-full rounded-full opacity-60"
                  style={{
                    background: isCallActive
                      ? 'conic-gradient(from 180deg, #059669, #22d3ee, #0d9488, #059669)'
                      : 'conic-gradient(from 180deg, #1d4ed8, #22d3ee, #1e40af, #1d4ed8)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>

              {/* Inner glow */}
              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.4, 1] : [1, 1.1, 1],
                  opacity: isSpeaking ? [0.5, 0.9, 0.5] : [0.3, 0.5, 0.3],
                }}
                transition={{ duration: isSpeaking ? 0.4 : 2, repeat: Infinity }}
                className="absolute inset-14 rounded-full"
                style={{
                  background: isCallActive
                    ? 'radial-gradient(circle, #34d399 0%, transparent 70%)'
                    : 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
                }}
              />

              {/* Glossy highlight */}
              <div className="absolute top-3 left-6 right-6 h-12 rounded-full bg-gradient-to-b from-white/15 to-transparent" />

              {/* Center icon/text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full"
                  />
                ) : isCallActive ? (
                  <motion.div
                    animate={{ scale: isSpeaking ? [1, 1.2, 1] : 1 }}
                    transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
                  >
                    <Mic className="w-14 h-14 text-white drop-shadow-lg" />
                  </motion.div>
                ) : (
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white text-lg font-medium drop-shadow-lg"
                  >
                    Tap to talk
                  </motion.span>
                )}
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              animate={{ scale: isCallActive ? [1, 1.15, 1] : 1 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg ${
                isCallActive ? 'bg-emerald-500' : 'bg-blue-500'
              }`}
            >
              {isCallActive ? (
                <PhoneOff className="w-5 h-5 text-white" />
              ) : (
                <div className="w-3 h-3 bg-white rounded-full" />
              )}
            </motion.div>
          </motion.div>

          {/* Status text */}
          <AnimatePresence>
            {callStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <span className={`text-sm font-semibold px-4 py-2 rounded-full shadow-lg ${
                  isCallActive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {callStatus}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Status indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-8 mb-12"
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={isListening ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5, repeat: isListening ? Infinity : 0 }}
            className={`w-3 h-3 rounded-full ${
              isListening ? 'bg-green-500' : 'bg-gray-500'
            }`}
          />
          <span className="text-sm text-gray-400">
            {isListening ? 'Listening...' : 'Ready to listen'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={isSpeaking ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
            className={`w-3 h-3 rounded-full ${
              isSpeaking ? 'bg-blue-500' : 'bg-gray-500'
            }`}
          />
          <span className="text-sm text-gray-400">
            {isSpeaking ? 'AI Speaking...' : 'AI Ready'}
          </span>
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
          Click the orb above to start a voice conversation. Our AI agent can:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400 font-bold">•</span>
            <span>Answer questions about our services</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400 font-bold">•</span>
            <span>Provide real-time information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400 font-bold">•</span>
            <span>Handle natural conversations with context</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary-600 dark:text-primary-400 font-bold">•</span>
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
