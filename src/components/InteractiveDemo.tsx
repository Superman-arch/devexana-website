import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        await vapiRef.current.start('3a9f7d34-f0b0-44e4-88fa-edff18d3a445');
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
          Try Our AI Receptionist
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
        >
          Experience how your customers will interact with your AI receptionist
        </motion.p>
      </div>

      {/* Animated Orb Avatar - ElevenLabs Style */}
      <div className="flex justify-center items-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative flex items-center justify-center"
          style={{ width: '280px', height: '280px' }}
        >
          {/* Ambient glow - always visible */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: isCallActive ? [0.4, 0.7, 0.4] : [0.2, 0.35, 0.2],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full blur-2xl"
            style={{
              width: '320px',
              height: '320px',
              background: isCallActive
                ? 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)',
            }}
          />

          {/* Animated rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              width: '280px',
              height: '280px',
              background: isCallActive
                ? 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)'
                : 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #a855f7, #8b5cf6, #6366f1)',
              opacity: isCallActive ? 1 : 0.8,
            }}
          />

          {/* Inner dark circle to create ring effect */}
          <div
            className="absolute rounded-full"
            style={{
              width: '256px',
              height: '256px',
              background: 'linear-gradient(180deg, #1e1b4b 0%, #0f172a 100%)',
            }}
          />

          {/* Secondary pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{
              width: '270px',
              height: '270px',
              border: isCallActive ? '2px solid rgba(139, 92, 246, 0.5)' : '1px solid rgba(99, 102, 241, 0.3)',
            }}
          />

          {/* Speaking/Listening wave rings */}
          <AnimatePresence>
            {(isSpeaking || isListening) && (
              <>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: 'easeOut'
                    }}
                    className="absolute rounded-full border-2"
                    style={{
                      width: '200px',
                      height: '200px',
                      borderColor: isSpeaking ? '#8b5cf6' : '#10b981',
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Main orb button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={isCallActive ? endCall : startCall}
            className="relative z-10 rounded-full overflow-hidden cursor-pointer focus:outline-none"
            style={{ width: '200px', height: '200px' }}
          >
            {/* Gradient background */}
            <motion.div
              animate={isSpeaking ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
              className="absolute inset-0"
              style={{
                background: isCallActive
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                  : 'linear-gradient(135deg, #312e81 0%, #4338ca 40%, #6366f1 100%)',
              }}
            />

            {/* Animated mesh gradient overlay */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
              style={{
                backgroundImage: isCallActive
                  ? 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.8) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.6) 0%, transparent 50%)'
                  : 'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
                backgroundSize: '200% 200%',
                opacity: isCallActive ? 0.6 : 0.5,
              }}
            />

            {/* Inner glow */}
            <div
              className="absolute inset-4 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              }}
            />

            {/* Center icon/indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={isCallActive ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: isCallActive
                    ? 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                }}
              >
                {/* Waveform bars when active */}
                {isCallActive ? (
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: isSpeaking
                            ? [12, 28, 12]
                            : [8, 12, 8]
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: 'easeInOut'
                        }}
                        className="w-1.5 bg-white rounded-full"
                        style={{ height: '12px' }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white/70 border-b-[6px] border-b-transparent ml-1" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Shine effect */}
            <div
              className="absolute top-4 left-8 w-20 h-12 rounded-full opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
                transform: 'rotate(-20deg)',
              }}
            />
          </motion.button>

          {/* Call status text */}
          <AnimatePresence>
            {callStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              >
                <span className="text-sm font-semibold text-white bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
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
          How It Works
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {isCallActive
            ? 'Tell us about your issue. We\'ll get your zip code to verify service area, then text you to book.'
            : 'Click above to experience our voice-to-SMS booking flow:'}
        </p>
        {!isCallActive && (
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 font-bold">1.</span>
              <span>AI answers and asks about your issue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 font-bold">2.</span>
              <span>Collects zip code to verify service area</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 font-bold">3.</span>
              <span>Gets phone number for SMS handoff</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-600 dark:text-primary-400 font-bold">4.</span>
              <span>SMS bot books the appointment accurately</span>
            </li>
          </ul>
        )}

        {/* Demo Disclaimer */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Why SMS?</strong> 90% of customers prefer texting. SMS eliminates transcription errors for addresses and lets customers respond on their schedule.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default InteractiveDemo;
