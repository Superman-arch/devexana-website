import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Phone, MessageSquare, Mic, Bot, Headphones, Radio } from 'lucide-react';
import { staggerContainer, fadeUpItem } from '../lib/animations';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-navy-900 -mt-16">
      {/* Animated Background Elements - Solid shapes with blur */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orb - top left */}
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Medium floating orb - bottom right */}
        <motion.div
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-accent-500/15 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small accent orb */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-primary-500/10 rounded-full blur-[60px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating icons - hidden on mobile */}
        <motion.div
          className="hidden md:block absolute top-32 right-24 p-4 bg-primary-500/10 rounded-2xl border border-primary-500/20"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Phone className="w-8 h-8 text-primary-400" />
        </motion.div>

        <motion.div
          className="hidden md:block absolute bottom-48 left-16 p-3 bg-accent-500/10 rounded-xl border border-accent-500/20"
          animate={{
            y: [15, -15, 15],
            x: [-8, 8, -8],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MessageSquare className="w-6 h-6 text-accent-400" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-1/3 left-[15%] p-3 bg-primary-500/10 rounded-full border border-primary-500/20"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Mic className="w-5 h-5 text-primary-400" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-48 right-[15%] p-3 bg-accent-500/10 rounded-xl border border-accent-500/20"
          animate={{
            y: [10, -20, 10],
            rotate: [-5, 5, -5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Bot className="w-6 h-6 text-accent-400" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-32 right-32 p-3 bg-primary-500/10 rounded-full border border-primary-500/20"
          animate={{
            y: [-12, 12, -12],
            x: [5, -5, 5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Headphones className="w-5 h-5 text-primary-400" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-2/3 right-[10%] p-2 bg-accent-500/10 rounded-lg border border-accent-500/20"
          animate={{
            y: [8, -16, 8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Radio className="w-4 h-4 text-accent-400" />
        </motion.div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Logo/Brand - Large hero logo */}
          <motion.div
            variants={fadeUpItem}
            className="relative flex justify-center -mb-4 md:-mb-8"
          >
            <motion.img
              src="/assets/devexana-logo.png"
              alt="Devexana Logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-[180px] sm:h-[280px] md:h-[380px] w-auto"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpItem}
            className="text-2xl sm:text-3xl lg:text-5xl text-white mb-4 sm:mb-6 font-bold tracking-tight px-4"
          >
            Never Miss Another Call
          </motion.p>

          {/* Subheading */}
          <motion.p
            variants={fadeUpItem}
            className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            AI receptionist for home service contractors. Voice answers, qualifies leads, and hands off to SMS for accurate booking.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.button
              onClick={() => scrollToSection('consultation')}
              className="btn-primary flex items-center gap-2 sm:gap-3 text-sm sm:text-lg group w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Schedule Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('demo')}
              className="btn-secondary flex items-center gap-2 sm:gap-3 text-sm sm:text-lg group w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-125 transition-transform duration-300" />
              View Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUpItem}
            className="mt-8 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-10 px-4"
          >
            {[
              { label: 'Plumbers • HVAC • Electricians', delay: 0 },
              { label: '24/7 Answering', delay: 0.1 },
              { label: 'SMS Booking', delay: 0.2 },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + item.delay }}
                className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm"
              >
                <motion.div
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-emerald-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover:border-primary-400 transition-colors cursor-pointer"
          onClick={() => scrollToSection('demo')}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
