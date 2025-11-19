import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <main className="pt-24 pb-16 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 18th 2023
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              From everyone at Devexana, thank you for choosing us as your AI voice agent consulting
              partner! We're here to help you transform your business communications with cutting-edge
              voice AI solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we say "Company", "we", "our", or "us" in this document, we are referring to Devexana Inc.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we say "Services", we mean our website at devexana.com, our consulting services, and
              any products or deliverables we create and maintain for you. This includes strategic consulting,
              voice agent design, implementation support, and ongoing optimization services.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we say "You" or "your", we are referring to the people or organizations that engage our Services.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may update these Terms of Service ("Terms") in the future. Whenever we make a significant
              change to our policies, we will refresh the date at the top of this page and notify account holders
              via email.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When you use our Services, now or in the future, you are agreeing to the latest Terms. If you
              violate any of the Terms, we may terminate your account. We do our best to deserve your trust
              by being transparent about who we are, how we work, and keeping an open door to your feedback.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Account Terms
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>
                You are responsible for maintaining the security of your account and password. We
                cannot and will not be liable for any loss or damage from your failure to comply with this
                security obligation.
              </li>
              <li>
                You may not use the Services for any illegal purpose or to develop voice agents for
                harassment, deception, or any harmful activities.
              </li>
              <li>
                You are responsible for all content posted to and activity that occurs under your account.
              </li>
              <li>
                You must be a human. Accounts registered by "bots" or other automated methods are not permitted.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Payment, Refunds, and Plan Changes
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>
                We offer transparent pricing for our consulting services. All quotes and invoices clearly
                state the scope and cost of services.
              </li>
              <li>
                For ongoing consulting engagements, we bill monthly in advance unless otherwise
                agreed upon in your service agreement.
              </li>
              <li>
                All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities. Where
                required, we will collect those taxes on behalf of the taxing authority.
              </li>
              <li>
                Due to the nature of consulting services, refunds are generally not available once
                services have been rendered. If you're dissatisfied with our work, please contact us
                within 7 days of service delivery to discuss resolution options.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Cancellation and Termination
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>
                You are solely responsible for properly canceling your engagement with us. Please email
                us at legal@devexana.com with written notice.
              </li>
              <li>
                You remain responsible for payment for all work completed and expenses incurred up to
                the cancellation date.
              </li>
              <li>
                We have the right to suspend or terminate your account and refuse any and all current or
                future use of our Services for any reason at any time, particularly if you violate these
                Terms or engage in abusive behavior toward our team.
              </li>
              <li>
                Verbal, physical, written or other abuse (including threats of abuse or retribution) of a
                Company employee will result in immediate account termination.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Modifications to the Service and Prices
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>
                We reserve the right at any time to modify or discontinue, temporarily or permanently,
                any part of our Services with or without notice.
              </li>
              <li>
                Sometimes we change the pricing structure for our services. If we do so for existing
                clients, we will give at least 30 days notice and will notify you via the email address on record.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Privacy and Security
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-4">
              <li>
                Your use of the Services is at your sole risk. We provide these Services on an "as is" and
                "as available" basis.
              </li>
              <li>
                We take many measures to protect and secure your data through backups,
                redundancies, and encryption.
              </li>
              <li>
                When you use our Services, you entrust us with your data. We take that trust to heart.
                You agree that Devexana may process your data as described in our Privacy Policy and
                for no other purpose.
              </li>
              <li>
                We as humans can access your data for the following reasons:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    To help you with support requests you make. We'll ask for express consent
                    before accessing your account.
                  </li>
                  <li>
                    To safeguard Devexana and ensure the security of your data and the Services as a whole.
                  </li>
                  <li>
                    To the extent required by applicable law.
                  </li>
                </ul>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Copyright and Content Ownership
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>
                You give us a limited license to use the content posted by you in order to provide the
                Services to you, but we claim no ownership rights over those materials. All materials you
                submit to the Services remain yours.
              </li>
              <li>
                Custom voice agent designs, scripts, and configurations created specifically for you
                remain your property upon full payment.
              </li>
              <li>
                Our standard methodologies, frameworks, and know-how remain our property.
              </li>
              <li>
                The Company or its licensors own all right, title, and interest in and to the Services,
                including all intellectual property rights therein.
              </li>
              <li>
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the
                Services without the express written permission of the Company.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Features and Bugs
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We design our Services with care, based on our own experience and the experiences of
              customers who share their time and feedback. However, there is no such thing as a service that
              pleases everybody. We make no guarantees that our Services will meet your specific
              requirements or expectations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              As with any consulting service, we strive for excellence but cannot guarantee specific business
              outcomes or results.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Liability
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To put it simply, we provide our consulting services with care and expertise, but we need to be clear about the boundaries of our legal responsibility:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You understand and agree that Devexana shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from: (i) your use or inability to use the Services; (ii) third-party voice agent platforms or integrations; (iii) unauthorized access to or alteration of your data; (iv) statements or conduct of any third party; (v) or any other matter relating to these Terms or the Services.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our total liability shall not exceed the amount paid by you to Devexana in the six (6) months preceding the event giving rise to the liability.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We believe in our services and work hard to deliver exceptional results. While we can't guarantee specific business outcomes (no one honestly can), we commit to bringing our expertise, professionalism, and dedication to every engagement. We stand behind our work through our commitment to quality, continuous improvement, and open communication with our clients.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Contact Us
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have a question about any of these Terms, please contact our Support team at support@devexana.com.
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mt-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Devexana Inc.</p>
              <p className="text-gray-700 dark:text-gray-300">Legal Department</p>
              <p className="text-gray-700 dark:text-gray-300">United States</p>
              <p className="text-gray-700 dark:text-gray-300">Email: legal@devexana.com</p>
              <p className="text-gray-700 dark:text-gray-300">Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default TermsOfService;
