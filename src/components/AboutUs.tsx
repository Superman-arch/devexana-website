import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Mail, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { staggerContainer, fadeUpItem } from '../lib/animations';

const AboutUs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const scrollToConsultation = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector('#consultation')?.scrollIntoView({ behavior: 'auto' });
      }, 100);
    } else {
      document.querySelector('#consultation')?.scrollIntoView({ behavior: 'auto' });
    }
  };

  const founders = [
    {
      name: 'Amadeo Bonde',
      initials: 'AB',
      role: 'Co-Founder & CEO',
      bio: 'AI enthusiast and entrepreneur focused on building scalable voice AI solutions for enterprises. Passionate about leveraging cutting-edge technology to solve real-world business challenges.',
      email: 'amadeo@devexana.com',
      skills: ['AI/ML', 'Product Strategy', 'Enterprise Solutions']
    },
    {
      name: 'Noah Dockery',
      initials: 'ND',
      role: 'Co-Founder & CTO',
      bio: 'AI specialist leading sales, outreach, and client partnerships. Focused on building robust, scalable voice AI systems while driving business growth and customer success.',
      email: 'noah@devexana.com',
      skills: ['Voice AI', 'System Architecture', 'Machine Learning']
    }
  ];

  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-navy-950">
      {/* Company Overview */}
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={isTitleInView ? 'visible' : 'hidden'}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeUpItem}
          className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4"
        >
          About Us
        </motion.span>
        <motion.h2
          variants={fadeUpItem}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Devexana
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-4"
        >
          We're building the future of business communication through intelligent voice AI agents.
        </motion.p>
        <motion.p
          variants={fadeUpItem}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Devexana combines cutting-edge AI technology with deep industry expertise to create voice
          agents that transform how businesses interact with their customers.
        </motion.p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        {[
          {
            icon: Target,
            title: 'Our Mission',
            description: 'To democratize access to enterprise-grade voice AI technology, enabling businesses of all sizes to deliver exceptional customer experiences through intelligent automation.'
          },
          {
            icon: Eye,
            title: 'Our Vision',
            description: 'A world where every business interaction is enhanced by AI, creating seamless, efficient, and personalized experiences that benefit both companies and their customers.'
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeUpItem}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white dark:bg-navy-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
              className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-600/30"
            >
              <item.icon className="w-7 h-7 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Founders Section */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Meet the Founders
        </motion.h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={fadeUpItem}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-navy-800 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-8 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}
                className="w-28 h-28 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-600/30"
              >
                <span className="text-4xl font-bold text-white">
                  {founder.initials}
                </span>
              </motion.div>

              {/* Name & Role */}
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {founder.name}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 text-center font-semibold mb-4">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">
                {founder.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Email */}
              <motion.a
                href={`mailto:${founder.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium"
              >
                <Mail className="w-4 h-4" />
                {founder.email}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="bg-navy-800 rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex p-3 bg-primary-500/20 rounded-2xl mb-6"
            >
              <Sparkles className="w-8 h-8 text-primary-400" />
            </motion.div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to work with us?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always excited to collaborate with forward-thinking businesses ready to embrace
              the future of voice AI.
            </p>
            <motion.button
              onClick={scrollToConsultation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 text-lg"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
