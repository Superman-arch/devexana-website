import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Send } from 'lucide-react';

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
    challenges: [] as string[],
    desiredOutcomes: [] as string[],
    budgetRange: '',
    numberOfAgents: 1,
    preferredContactMethod: 'email',
    message: '',
  });

  const steps = [
    {
      title: 'Company Information',
      fields: ['companyName', 'industry', 'companySize'],
    },
    {
      title: 'Contact Details',
      fields: ['fullName', 'email', 'phone', 'role'],
    },
    {
      title: 'Your Needs',
      fields: ['challenges', 'desired Outcomes', 'budgetRange'],
    },
    {
      title: 'Preferences',
      fields: ['numberOfAgents', 'preferredContactMethod', 'message'],
    },
  ];

  const challengeOptions = [
    'High call volume',
    'Long wait times',
    'Customer satisfaction issues',
    'Scaling difficulties',
    'Cost reduction',
    '24/7 availability',
  ];

  const outcomeOptions = [
    'Reduce operational costs',
    'Improve response time',
    'Scale customer support',
    'Increase customer satisfaction',
    'Automate routine tasks',
    'Generate more leads',
  ];

  const validateStep = () => {
    switch (currentStep) {
      case 0:
        if (!formData.companyName || !formData.industry || !formData.companySize) {
          alert('Please fill in all required fields');
          return false;
        }
        break;
      case 1:
        if (!formData.fullName || !formData.email || !formData.phone || !formData.role) {
          alert('Please fill in all required fields');
          return false;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          alert('Please enter a valid email address');
          return false;
        }
        // Phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (!phoneRegex.test(cleanPhone)) {
          alert('Please enter a valid 10-digit phone number');
          return false;
        }
        break;
      case 2:
        if (formData.challenges.length === 0) {
          alert('Please select at least one challenge');
          return false;
        }
        if (formData.desiredOutcomes.length === 0) {
          alert('Please select at least one desired outcome');
          return false;
        }
        if (!formData.budgetRange) {
          alert('Please select a budget range');
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateStep() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final validation before submit
    if (!validateStep()) {
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '84dfcc2a-0eab-4614-b966-192f78c1fb12',
          subject: `New Consultation Request from ${formData.companyName}`,
          from_name: formData.fullName,
          company_name: formData.companyName,
          industry: formData.industry,
          company_size: formData.companySize,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          challenges: formData.challenges.join(', '),
          desired_outcomes: formData.desiredOutcomes.join(', '),
          budget_range: formData.budgetRange,
          number_of_agents: formData.numberOfAgents,
          preferred_contact_method: formData.preferredContactMethod,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! Your consultation request has been submitted. We\'ll contact you shortly.');
        // Reset form
        setFormData({
          companyName: '',
          industry: '',
          companySize: '',
          fullName: '',
          email: '',
          phone: '',
          role: '',
          challenges: [],
          desiredOutcomes: [],
          budgetRange: '',
          numberOfAgents: 1,
          preferredContactMethod: 'email',
          message: '',
        });
        setCurrentStep(0);
      } else {
        throw new Error(result.message || 'Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please email us directly at support@devexana.com');
    }
  };

  const toggleArrayItem = (field: 'challenges' | 'desiredOutcomes', value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      setFormData({ ...formData, [field]: current.filter((item) => item !== value) });
    } else {
      setFormData({ ...formData, [field]: [...current, value] });
    }
  };

  return (
    <section id="consultation" className="section-container bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Schedule Your Free Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Let's discuss how voice AI can transform your business communications
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex w-full max-w-2xl items-start justify-center gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center" style={{ width: '120px' }}>
                  {/* Circle and lines */}
                  <div className="flex items-center w-full mb-3">
                    {index > 0 && (
                      <div
                        className={`flex-1 h-1 transition-all duration-300 ${
                          index <= currentStep
                            ? 'bg-gradient-to-r from-primary-600 to-accent-600'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    )}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 flex-shrink-0 ${
                        index <= currentStep
                          ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {index < currentStep ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 transition-all duration-300 ${
                          index < currentStep
                            ? 'bg-gradient-to-r from-primary-600 to-accent-600'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    )}
                  </div>
                  {/* Label */}
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:block text-center leading-tight">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-lg min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {steps[currentStep].title}
                </h3>

                {/* Step 0: Company Information */}
                {currentStep === 0 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Industry *
                      </label>
                      <select
                        required
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                      >
                        <option value="">Select industry</option>
                        <option value="realestate">Real Estate</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="financial">Financial Services</option>
                        <option value="insurance">Insurance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Company Size *
                      </label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) =>
                          setFormData({ ...formData, companySize: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 1: Contact Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Phone * (10 digits)
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="\d{10}"
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, phone: value });
                          }}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                          placeholder="5550000000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                        placeholder="e.g., CEO, CTO, Operations Manager"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Your Needs */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Current Challenges * (Select at least one)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {challengeOptions.map((challenge) => (
                          <button
                            key={challenge}
                            type="button"
                            onClick={() => toggleArrayItem('challenges', challenge)}
                            className={`p-3 rounded-lg border text-left text-sm transition-all ${
                              formData.challenges.includes(challenge)
                                ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-500 text-primary-700 dark:text-primary-300'
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                            }`}
                          >
                            {challenge}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Desired Outcomes * (Select at least one)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {outcomeOptions.map((outcome) => (
                          <button
                            key={outcome}
                            type="button"
                            onClick={() => toggleArrayItem('desiredOutcomes', outcome)}
                            className={`p-3 rounded-lg border text-left text-sm transition-all ${
                              formData.desiredOutcomes.includes(outcome)
                                ? 'bg-primary-50 dark:bg-primary-900/30 border-primary-500 text-primary-700 dark:text-primary-300'
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                            }`}
                          >
                            {outcome}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range *
                      </label>
                      <select
                        required
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="<5k">Less than $5,000/month</option>
                        <option value="5k-10k">$5,000 - $10,000/month</option>
                        <option value="10k-25k">$10,000 - $25,000/month</option>
                        <option value="25k+">$25,000+/month</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Estimated Number of Agents Needed
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={formData.numberOfAgents}
                        onChange={(e) =>
                          setFormData({ ...formData, numberOfAgents: parseInt(e.target.value) })
                        }
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                      />
                      <div className="text-center mt-2">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {formData.numberOfAgents}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          {formData.numberOfAgents === 1 ? 'agent' : 'agents'}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {['email', 'phone', 'video'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, preferredContactMethod: method as any })
                            }
                            className={`p-3 rounded-lg border font-semibold capitalize transition-all ${
                              formData.preferredContactMethod === method
                                ? 'bg-primary-600 border-primary-600 text-white'
                                : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-400'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white resize-none"
                        placeholder="Tell us more about your specific needs..."
                      />
                    </div>
                  </div>
                )}
              </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentStep === 0
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button type="submit" className="btn-primary flex items-center gap-2">
                  Submit
                  <Send className="w-5 h-5" />
                </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
