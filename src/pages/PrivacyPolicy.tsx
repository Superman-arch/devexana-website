import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <main className="pt-24 pb-16 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: November 18th 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              The privacy of your data—and it is your data, not ours!—is a big deal to us. In this policy, we lay out: what data we collect and why; how your data is handled; and your rights with respect to your data. We promise we never sell your data: never have, never will.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              This policy applies to all services provided by Devexana Inc. including our website, consulting services, and any voice agent solutions we help you design and implement (together, "Devexana Services").
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              What we collect and why
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our guiding principle is to collect only what we need. Here's what that means in practice:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Identity and access
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              When you reach out to us or sign up for our services, we ask for identifying information such as your name, email address, company name, and phone number. That's so we can communicate with you about our services, send you project updates, invoices, and other essential information. We may also send you optional surveys from time to time to help us understand how we can better serve you. With your consent, we will send you our newsletter with AI voice agent insights and industry updates.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We'll never sell your personal information to third parties, and we won't use your name or company in marketing statements without your permission either.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Billing information
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When you engage our consulting services, you will be asked to provide your payment information and billing address. Credit card information is submitted directly to our payment processor and doesn't hit Devexana servers. We store a record of the payment transaction, including the last 4 digits of the credit card number, for purposes of account history, invoicing, and billing support. We store your billing address so we can invoice you for services, calculate any sales tax due, and send you receipts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Project information
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We store on our servers the content that you share with us for consulting projects. This includes your business requirements, voice agent designs, conversation flows, integration specifications, and any other materials you provide or we create together. This is so we can deliver our consulting services effectively. We keep this content as long as our engagement is active and for a reasonable period afterward for your reference.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Voice agent development data
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we help you design and test voice agents, we may use Vapi's platform to prototype and demonstrate solutions. During this process:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
              <li>Test conversation transcripts may be temporarily stored for optimization purposes</li>
              <li>Voice agent configurations and prompts are saved for your project</li>
              <li>We do not use real customer data during testing unless explicitly authorized by you</li>
              <li>All test data is deleted after project completion unless you request otherwise</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Meeting and communication data
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              When we have video calls, phone calls, or meetings, we may take notes for our internal use. If we need to record a session for reference, we will always ask for your explicit consent first. We keep correspondence history including emails so we have context for ongoing and future engagements.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Website interactions
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We collect information about your browsing activity on our website for analytics and to improve our services. This includes your browser and operating system versions, your IP address, which pages you visited and how long they took to load, and which website referred you to us. We use this information to understand how people find and use our site.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
              Cookies
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We use persistent first-party cookies to make it easier for you to navigate our website and to remember your preferences. A cookie is a small text file stored by your browser. You can adjust cookie retention settings and accept or block individual cookies in your browser settings, although our site may not function properly if you turn cookies off.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              When we access or disclose your information
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>To provide services you've requested.</strong> We use some third-party subprocessors to help run our business and provide services to you. This includes:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
              <li>Payment processing (Stripe, PayPal)</li>
              <li>Voice AI platform (Vapi)</li>
              <li>Email services (for sending project updates)</li>
              <li>Cloud storage (for project files)</li>
              <li>Video conferencing (for consultation sessions)</li>
              <li>Project management tools (if applicable)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>To help you troubleshoot or support your project.</strong> If at any point we need to access your project data to help you with an issue, we will ask for your consent before proceeding.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>To investigate, prevent, or take action regarding restricted uses.</strong> We want to protect the privacy and safety of both our clients and our team. If we discover you are using our services for a restricted purpose (like creating voice agents for illegal activities), we will take action as necessary.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              <strong>When required under applicable law.</strong> Devexana is a U.S. company and all data infrastructure is located in the U.S. Our policy is to not respond to government requests for user data unless we are compelled by legal process or in limited circumstances in the event of an emergency request.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              <strong>Aggregated and de-identified data.</strong> We may aggregate and/or de-identify information collected through our services. We may use de-identified or aggregated data for any purpose, including marketing or analytics.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Your rights with respect to your information
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We apply the same data rights to all clients, regardless of their location. These rights include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li><strong>Right to Know.</strong> You have the right to know what personal information is collected, used, shared or sold.</li>
              <li><strong>Right of Access.</strong> You can access the personal information we gather about you.</li>
              <li><strong>Right to Correction.</strong> You can request correction of your personal information.</li>
              <li><strong>Right to Erasure / "To Be Forgotten".</strong> You can request that your personal information be erased from our possession.</li>
              <li><strong>Right to Complain.</strong> You can make a complaint regarding our handling of your personal information with the appropriate supervisory authority.</li>
              <li><strong>Right to Restrict Processing.</strong> You can request restriction of how and why your personal information is used or processed.</li>
              <li><strong>Right to Object.</strong> You have the right to object to how or why your personal information is processed.</li>
              <li><strong>Right to Portability.</strong> You can receive the personal information we have about you and transmit it to another party.</li>
              <li><strong>Right to Non-Discrimination.</strong> We do not charge different amounts or provide different service levels based on exercising your privacy rights.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Many of these rights can be exercised by contacting us directly. If you have questions about exercising these rights or need assistance, please contact us at legal@devexana.com.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              How we secure your data
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All data is encrypted via SSL/TLS when transmitted from our servers to your browser. We use industry-standard security practices to protect your data at rest. This includes:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
              <li>Encrypted database backups</li>
              <li>Access controls and authentication</li>
              <li>Regular security updates and patches</li>
              <li>Limited access on a need-to-know basis</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              What happens when you delete data
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you request that we delete specific project data, we will remove it from our active systems within 30 days. Copies may remain in our backups for up to an additional 30 days. Altogether, any deleted content should be purged from all of our systems within 60 days.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              For compliance and legal purposes, we may need to retain certain billing and transaction records as required by law.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Data retention
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We keep your information for the time necessary for the purposes for which it is processed:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
              <li>Project data: We retain project materials for the duration of our engagement plus 2 years, unless you request deletion sooner</li>
              <li>Billing records: 7 years as required for tax and accounting purposes</li>
              <li>Communication history: 3 years for business continuity and client service</li>
              <li>Website analytics: 1 year</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Location of site and data
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Our services are operated in the United States. If you are located in the European Union, UK, or elsewhere outside of the United States, please be aware that any information you provide to us will be transferred to and stored in the United States. By using our services and/or providing us with your personal information, you consent to this transfer.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              When transferring personal data from the EU
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              For clients in the EU or UK, we ensure that personal data transferred out of the EU/UK is treated with the same level of protection granted under EU/UK privacy law. We can provide Standard Contractual Clauses upon request for enterprise clients requiring them.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Changes and questions
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We may update this policy as needed to comply with relevant regulations and reflect any new practices. Whenever we make a significant change to our policies, we will refresh the date at the top of this page and notify active clients via email.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Have any questions, comments, or concerns about this privacy policy, your data, or your rights with respect to your information? Please get in touch by emailing us at legal@devexana.com and we'll be happy to answer them!
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mt-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Devexana Inc.</p>
              <p className="text-gray-700 dark:text-gray-300">United States</p>
              <p className="text-gray-700 dark:text-gray-300">Email: legal@devexana.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
