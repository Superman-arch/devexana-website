import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, PhoneOff } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const InteractiveDemo = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [callStatus, setCallStatus] = useState('');
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    // Initialize Vapi
    vapiRef.current = new Vapi('65517730-bbfc-4034-accc-3172fafe5c62');

    // Set up event listeners
    if (vapiRef.current) {
      vapiRef.current.on('call-start', () => {
        setIsCallActive(true);
        setCallStatus('Connected');
      });

      vapiRef.current.on('call-end', () => {
        setIsCallActive(false);
        setIsSpeaking(false);
        setIsListening(false);
        setCallStatus('');
      });

      vapiRef.current.on('speech-start', () => {
        setIsSpeaking(true);
      });

      vapiRef.current.on('speech-end', () => {
        setIsSpeaking(false);
      });

      vapiRef.current.on('message', (message: any) => {
        if (message.type === 'transcript' && message.role === 'user') {
          setIsListening(true);
          setTimeout(() => setIsListening(false), 1000);
        }
      });

      vapiRef.current.on('error', (error: any) => {
        console.error('Vapi error:', error);
        setCallStatus('Error occurred');
      });
    }

    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
      }
    };
  }, []);

  const startCall = async () => {
    if (vapiRef.current) {
      try {
        setCallStatus('Connecting...');
        await vapiRef.current.start('3ca5bc5c-a1b8-495d-8f09-439e8cd13250');
      } catch (error) {
        console.error('Error starting call:', error);
        setCallStatus('Failed to connect');
      }
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  return (
    <section className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
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
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Click the avatar below to start a voice conversation with our AI assistant
        </motion.p>
      </div>

      {/* Avatar Container */}
      <div className="flex justify-center items-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Animated rings when speaking/listening */}
          <AnimatePresence>
            {(isSpeaking || isListening) && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full ${
                    isSpeaking
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}
                  style={{ width: '320px', height: '320px', left: '-60px', top: '-60px' }}
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.3, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  className={`absolute inset-0 rounded-full ${
                    isSpeaking
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}
                  style={{ width: '320px', height: '320px', left: '-60px', top: '-60px' }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Avatar Circle - ElevenLabs style orb */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isCallActive ? endCall : startCall}
            className="relative w-48 h-48 cursor-pointer"
          >
            {/* Outer glow */}
            <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
              isCallActive
                ? 'bg-gradient-to-br from-emerald-400/40 to-cyan-500/40'
                : 'bg-gradient-to-br from-blue-400/30 to-cyan-400/30'
            }`} />

            {/* Main orb container */}
            <div className={`relative w-full h-full rounded-full overflow-hidden shadow-2xl ${
              isCallActive ? 'shadow-emerald-500/30' : 'shadow-blue-500/30'
            }`}>
              {/* Dark base */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

              {/* Animated gradient waves */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              >
                <div className={`absolute inset-0 opacity-80 ${
                  isCallActive
                    ? 'bg-gradient-conic from-emerald-500 via-cyan-400 via-teal-500 to-emerald-500'
                    : 'bg-gradient-conic from-blue-500 via-cyan-400 via-blue-600 to-blue-500'
                }`} style={{
                  background: isCallActive
                    ? 'conic-gradient(from 0deg, #10b981, #22d3d3, #14b8a6, #10b981)'
                    : 'conic-gradient(from 0deg, #3b82f6, #22d3ee, #2563eb, #3b82f6)',
                  filter: 'blur(20px)'
                }} />
              </motion.div>

              {/* Secondary wave layer */}
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: isSpeaking ? [1, 1.1, 1] : [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                  scale: { duration: isSpeaking ? 0.5 : 3, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute inset-4"
              >
                <div className="w-full h-full rounded-full opacity-60" style={{
                  background: isCallActive
                    ? 'conic-gradient(from 180deg, #059669, #06b6d4, #0d9488, #059669)'
                    : 'conic-gradient(from 180deg, #1d4ed8, #06b6d4, #1e40af, #1d4ed8)',
                  filter: 'blur(15px)'
                }} />
              </motion.div>

              {/* Inner core glow */}
              <motion.div
                animate={{
                  scale: isSpeaking ? [1, 1.3, 1] : [1, 1.1, 1],
                  opacity: isSpeaking ? [0.6, 0.9, 0.6] : [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: isSpeaking ? 0.4 : 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-12 rounded-full"
                style={{
                  background: isCallActive
                    ? 'radial-gradient(circle, #34d399 0%, transparent 70%)'
                    : 'radial-gradient(circle, #60a5fa 0%, transparent 70%)',
                }}
              />

              {/* Glossy highlight */}
              <div className="absolute top-2 left-4 right-4 h-16 rounded-full bg-gradient-to-b from-white/20 to-transparent" />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isCallActive ? (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex flex-col items-center"
                  >
                    <Mic className="w-12 h-12 text-white drop-shadow-lg" />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white/90 text-sm font-medium drop-shadow-lg"
                  >
                    Tap to talk
                  </motion.div>
                )}
              </div>
            </div>

            {/* Status indicator */}
            <motion.div
              animate={{
                scale: isCallActive ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute -bottom-1 -right-1 w-10 h-10 rounded-full border-4 border-gray-900 flex items-center justify-center ${
                isCallActive ? 'bg-emerald-500' : 'bg-blue-500'
              }`}
            >
              {isCallActive && <PhoneOff className="w-4 h-4 text-white" />}
            </motion.div>
          </motion.div>

          {/* Call status text */}
          <AnimatePresence>
            {callStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  {callStatus}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Controls and Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-6 mb-12"
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isListening ? 'bg-green-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {isListening ? 'Listening...' : 'Ready to listen'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              isSpeaking ? 'bg-blue-500 animate-pulse' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
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
          {isCallActive
            ? 'Start speaking! The AI is listening and will respond to your questions.'
            : 'Click the avatar above to start a voice conversation. Our AI agent can:'}
        </p>
        {!isCallActive && (
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
        )}

        {/* Demo Disclaimer */}
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
