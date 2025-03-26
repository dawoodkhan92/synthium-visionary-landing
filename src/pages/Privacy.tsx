
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { trackPageView } from '@/services/analytics';

const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - SynthiumAI';
    trackPageView('privacy');
  }, []);

  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="Last updated: June 15, 2023"
    >
      <section className="mb-8">
        <p>
          At SynthiumAI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you visit our website or use our services. Please read this policy 
          carefully to understand our practices regarding your personal data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
        <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Register for an account</li>
          <li>Express interest in obtaining information about our services</li>
          <li>Participate in activities on our website</li>
          <li>Contact us</li>
        </ul>
        <p>This information may include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal identifiers (name, email address, phone number)</li>
          <li>Business information (company name, job title)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (how you interact with our website and services)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our services</li>
          <li>Improve and personalize the user experience</li>
          <li>Develop new products, services, and features</li>
          <li>Communicate with you about our services, updates, and other information</li>
          <li>Monitor the usage of our services</li>
          <li>Detect, prevent, and address technical issues</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., data analysis, email delivery, hosting services)</li>
          <li><strong>Business Partners:</strong> With your consent, we may share your information with our business partners to offer you certain products, services, or promotions</li>
          <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal 
          information. However, please be aware that no method of transmission over the Internet or electronic 
          storage is 100% secure, and we cannot guarantee absolute security of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
        <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access the personal information we have about you</li>
          <li>The right to rectify or update your personal information</li>
          <li>The right to delete your personal information</li>
          <li>The right to restrict or object to our processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, please contact us at privacy@synthiumai.com. We will respond to your request 
          within the timeframe required by applicable law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
          Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
          Policy periodically for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br /><br />
          SynthiumAI<br />
          123 AI Boulevard, Suite 456<br />
          San Francisco, CA 94105<br />
          Email: privacy@synthiumai.com<br />
          Phone: +1-555-123-4567
        </p>
      </section>
    </PageLayout>
  );
};

export default Privacy;
