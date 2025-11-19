import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { resources } from '../data/mockData';

const ResourceDetail = () => {
  const navigate = useNavigate();
  const { resourceId } = useParams();

  const resource = resources.find(r => r.id === resourceId);

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resource Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Home
          </button>
        </div>
      </div>
    );
  }

  // Sample content based on resource type
  const getContent = () => {
    switch (resource.type) {
      case 'blog':
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Understanding Voice AI ROI</h2>
            <p>
              Voice AI is transforming the way businesses interact with their customers. By implementing
              intelligent voice agents, companies can significantly reduce operational costs while
              improving customer satisfaction.
            </p>
            <h3>Key Metrics to Track</h3>
            <ul>
              <li><strong>Cost Reduction:</strong> Measure savings from reduced staff overhead and operational expenses</li>
              <li><strong>Response Time:</strong> Track improvements in average response time to customer inquiries</li>
              <li><strong>Customer Satisfaction:</strong> Monitor CSAT scores and customer feedback</li>
              <li><strong>Call Volume Handling:</strong> Measure increase in call handling capacity</li>
            </ul>
            <h3>Calculating Your ROI</h3>
            <p>
              To calculate the return on investment for your voice AI implementation, consider both direct
              and indirect benefits. Direct benefits include cost savings from automation, while indirect
              benefits include improved customer satisfaction and increased revenue opportunities.
            </p>
            <p>
              Formula: ROI = (Net Benefit / Total Investment) × 100%
            </p>
            <h3>Real-World Results</h3>
            <p>
              Companies implementing voice AI typically see a 40-60% reduction in customer service costs
              within the first year, while simultaneously improving response times by 80% or more.
            </p>
          </div>
        );
      case 'whitepaper':
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Executive Summary</h2>
            <p>
              This whitepaper explores best practices for implementing enterprise voice AI solutions,
              covering technical requirements, integration strategies, and compliance considerations.
            </p>
            <h3>Implementation Framework</h3>
            <p>
              Successful voice AI implementation requires a structured approach encompassing strategy,
              design, development, testing, and deployment phases.
            </p>
            <h3>Technical Requirements</h3>
            <ul>
              <li>Natural Language Processing (NLP) capabilities</li>
              <li>Real-time speech recognition and synthesis</li>
              <li>Integration with existing business systems</li>
              <li>Scalable infrastructure for high-volume deployments</li>
            </ul>
            <h3>Security & Compliance</h3>
            <p>
              Enterprise voice AI solutions must adhere to industry-specific regulations and
              security standards including enterprise-grade security protocols and data privacy best practices.
            </p>
          </div>
        );
      case 'webinar':
        return (
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Webinar Recording Coming Soon</p>
              <div className="w-full max-w-2xl mx-auto aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-500">Video Player</p>
              </div>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Webinar Overview</h2>
              <p>
                Join our expert panel as they discuss strategies for creating effective voice AI agents
                that deliver real business value.
              </p>
              <h3>Topics Covered</h3>
              <ul>
                <li>Designing conversational flows that feel natural</li>
                <li>Optimizing voice agent performance</li>
                <li>Handling edge cases and errors gracefully</li>
                <li>Measuring and improving agent effectiveness</li>
              </ul>
            </div>
          </div>
        );
      case 'calculator':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Voice AI ROI Calculator
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Calculate your potential savings and efficiency gains from implementing voice AI.
            </p>
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-gray-500 dark:text-gray-500">
                Interactive calculator coming soon
              </p>
            </div>
          </div>
        );
      default:
        return <p>Content not available.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Resources
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            {resource.type}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {resource.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {resource.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            {resource.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{resource.author}</span>
              </div>
            )}
            {resource.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{resource.readTime}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(resource.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {getContent()}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 glass-dark rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to implement voice AI?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contact us to discuss your specific needs
          </p>
          <a href="mailto:support@devexana.com" className="btn-primary text-lg">
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceDetail;
