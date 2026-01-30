import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-white/80 mt-4">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Modern Steps ABA. These Terms of Service ("Terms") govern your use of our website
                and the ABA therapy services we provide. By accessing our website or using our services, you
                agree to be bound by these Terms.
              </p>
              <p className="text-gray-600">
                If you do not agree to these Terms, please do not use our website or services. We reserve the
                right to modify these Terms at any time, and your continued use of our services constitutes
                acceptance of any changes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Modern Steps ABA provides Applied Behavior Analysis (ABA) therapy services for individuals with
                autism spectrum disorder and related developmental conditions. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>In-home ABA therapy</li>
                <li>Natural Environment Teaching (NET)</li>
                <li>Functional Behavior Assessment (FBA)</li>
                <li>Caregiver training and support</li>
                <li>Behavior intervention planning</li>
                <li>Progress monitoring and reporting</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a client or guardian of a client receiving services from Modern Steps ABA, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information during the intake process</li>
                <li>Notify us of any changes to contact information, insurance, or medical status</li>
                <li>Ensure a safe and appropriate environment for in-home therapy sessions</li>
                <li>Participate in caregiver training as recommended</li>
                <li>Follow through with treatment recommendations to the best of your ability</li>
                <li>Communicate openly with our team about concerns or challenges</li>
                <li>Provide at least 24 hours notice for appointment cancellations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Scheduling and Cancellation Policy</h2>
              <p className="text-gray-600 mb-4">
                We understand that unexpected situations arise. However, consistent attendance is crucial for
                therapeutic progress. Our cancellation policy is as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Please provide at least 24 hours notice for any cancellations</li>
                <li>Repeated late cancellations or no-shows may affect service availability</li>
                <li>We will make reasonable efforts to reschedule missed sessions</li>
                <li>Emergency situations will be handled on a case-by-case basis</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment and Insurance</h2>
              <p className="text-gray-600 mb-4">
                Modern Steps ABA works with various insurance providers and offers different payment options:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>We will verify insurance benefits and obtain necessary authorizations</li>
                <li>Clients are responsible for any co-pays, deductibles, or non-covered services</li>
                <li>Payment is expected at the time of service or according to the agreed payment plan</li>
                <li>We will provide documentation for out-of-network reimbursement if applicable</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Confidentiality</h2>
              <p className="text-gray-600">
                We are committed to maintaining the confidentiality of all client information in accordance
                with HIPAA regulations and professional ethical standards. Information about your or your
                child's treatment will only be shared with your written consent, except as required by law
                or in emergency situations to protect safety.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                All content on our website, including text, graphics, logos, images, and software, is the
                property of Modern Steps ABA and is protected by copyright and other intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works from any content
                without our prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                While we strive to provide the highest quality ABA therapy services, we cannot guarantee
                specific outcomes. Each individual's progress depends on many factors, including the nature
                and severity of their condition, consistency of treatment, and family involvement.
              </p>
              <p className="text-gray-600">
                To the fullest extent permitted by law, Modern Steps ABA shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of our services
                or website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Website Use</h2>
              <p className="text-gray-600 mb-4">
                When using our website, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to any portion of the website</li>
                <li>Not use the website to transmit any harmful or malicious content</li>
                <li>Not interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Termination of Services</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate services with appropriate notice. We may terminate or suspend
                services if:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>There is a pattern of missed appointments without proper notice</li>
                <li>The therapy environment becomes unsafe for our staff</li>
                <li>Payment obligations are not met</li>
                <li>Continued treatment is not clinically appropriate</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Upon termination, we will provide appropriate referrals and transition support to ensure
                continuity of care.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed by and construed in accordance with the laws of the Commonwealth
                of Virginia, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dispute Resolution</h2>
              <p className="text-gray-600">
                Any disputes arising from these Terms or our services shall first be addressed through good
                faith negotiation. If a resolution cannot be reached, disputes may be submitted to mediation
                or arbitration in accordance with Virginia law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold">Modern Steps ABA</p>
                <p className="text-gray-600">Email: mchoudhary@modernstepsaba.com</p>
                <p className="text-gray-600">Serving families across Virginia</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
