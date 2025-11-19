import { motion } from 'framer-motion';
import { Code, Briefcase } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      role: 'Co-Founder & CEO',
      bio: 'AI enthusiast and entrepreneur focused on building scalable voice AI solutions for enterprises. Passionate about leveraging cutting-edge technology to solve real-world business challenges.',
      linkedin: '#',
      email: 'amadeo@devexana.com',
      skills: ['AI/ML', 'Product Strategy', 'Enterprise Solutions']
    },
    {
      name: 'Noah Dockery',
      role: 'Co-Founder & CTO',
      bio: 'AI specialist leading sales, outreach, and client partnerships. Focused on building robust, scalable voice AI systems while driving business growth and customer success.',
      linkedin: '#',
      email: 'noah@devexana.com',
      skills: ['Voice AI', 'System Architecture', 'Machine Learning']
    }
  ];

  return (
    <section className="section-container bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Company Overview */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          About Devexana
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-4"
        >
          We're building the future of business communication through intelligent voice AI agents.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Devexana combines cutting-edge AI technology with deep industry expertise to create voice
          agents that transform how businesses interact with their customers. From consulting to
          implementation, we're your partner in the voice AI revolution.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <div className="glass-dark rounded-2xl p-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            To democratize access to enterprise-grade voice AI technology, enabling businesses of all
            sizes to deliver exceptional customer experiences through intelligent automation.
          </p>
        </div>

        <div className="glass-dark rounded-2xl p-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-400">
            A world where every business interaction is enhanced by AI, creating seamless, efficient,
            and personalized experiences that benefit both companies and their customers.
          </p>
        </div>
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl font-bold text-white">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name & Role */}
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                {founder.name}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 text-center font-semibold mb-4">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                {founder.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Email */}
              <div className="text-center">
                <a
                  href={`mailto:${founder.email}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  {founder.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="glass-dark rounded-2xl p-8 sm:p-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Want to work with us?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            We're always excited to collaborate with forward-thinking businesses ready to embrace
            the future of voice AI.
          </p>
          <button onClick={scrollToConsultation} className="btn-primary text-lg">
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
