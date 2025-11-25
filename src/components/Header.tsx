import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDarkMode } from '../lib/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#demo' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'auto' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'auto' });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-primary-500"
        style={{
          scaleX: 0,
          transformOrigin: '0%',
        }}
        animate={{
          scaleX: typeof window !== 'undefined'
            ? Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1)
            : 0,
        }}
      />

      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-center items-center h-16 relative">
          {/* Home Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute left-0 p-2.5 rounded-xl transition-colors ${
              scrolled
                ? 'hover:bg-gray-100 dark:hover:bg-navy-800'
                : 'hover:bg-white/10'
            }`}
            onClick={handleHomeClick}
            aria-label="Go to home"
          >
            <Home className={`w-5 h-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className={`font-semibold transition-colors relative group ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA & Dark Mode Toggle */}
          <div className="flex items-center gap-3 absolute right-0">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl transition-colors ${
                scrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-navy-800'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className={`w-5 h-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className={`w-5 h-5 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#consultation')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25"
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden p-2.5 rounded-xl transition-colors ${
                scrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-navy-800'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-navy-800 rounded-xl font-semibold transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => scrollToSection('#consultation')}
                className="w-full mt-4 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
