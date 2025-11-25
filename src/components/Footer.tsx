import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'auto' });
    }, 100);
  };

  const footerLinks = {
    Product: [
      { label: 'Pricing', action: () => scrollToSection('pricing') },
      { label: 'Demo', action: () => scrollToSection('demo') }
    ],
    Company: [
      { label: 'About Us', action: () => scrollToSection('about') },
      { label: 'Contact', action: () => scrollToSection('consultation') }
    ],
    Legal: [
      { label: 'Privacy Policy', link: '/privacy' },
      { label: 'Terms of Service', link: '/terms' }
    ],
  };

  return (
    <footer className="bg-navy-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Logo size="md" showText={true} />
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming business communications with intelligent voice AI solutions.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4 text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((item: any) => (
                  <li key={item.label}>
                    {item.link ? (
                      <Link
                        to={item.link}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm text-left"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Devexana. All rights reserved.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-emerald-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <span className="text-gray-400 text-sm">All systems operational</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
