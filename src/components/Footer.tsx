import { Link, useNavigate } from 'react-router-dom';

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto pl-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-center md:text-left">
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((item: any) => (
                    <li key={item.label}>
                      {item.link ? (
                        <Link
                          to={item.link}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={item.action}
                          className="text-gray-400 hover:text-white transition-colors text-left"
                        >
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 -ml-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <p className="text-gray-400 text-sm text-center">
                © {currentYear} Devexana. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
