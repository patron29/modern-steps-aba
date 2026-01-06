import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-white/80 mt-4">Last updated: January 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Modern Steps ABA ("we," "our," or "us") is committed to protecting the privacy of our clients,
                their families, and visitors to our website. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge
                that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Fill out a contact form or request information</li>
                <li>Schedule a consultation or intake appointment</li>
                <li>Enroll in our ABA therapy services</li>
                <li>Communicate with us via email, phone, or other methods</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Name, address, email address, and phone number</li>
                <li>Child's name, date of birth, and diagnosis information</li>
                <li>Insurance information</li>
                <li>Medical records and assessment results</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600">
                When you visit our website, we may automatically collect certain information about your device,
                including information about your web browser, IP address, time zone, and some of the cookies
                installed on your device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide, operate, and maintain our ABA therapy services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you administrative information and service updates</li>
                <li>Develop and improve our services and client experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Communicate with healthcare providers and insurance companies as authorized</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">HIPAA Compliance</h2>
              <p className="text-gray-600 mb-4">
                As a healthcare provider, Modern Steps ABA is committed to complying with the Health Insurance
                Portability and Accountability Act (HIPAA). We implement appropriate administrative, technical,
                and physical safeguards to protect the privacy and security of Protected Health Information (PHI).
              </p>
              <p className="text-gray-600">
                You have specific rights regarding your PHI, including the right to access, amend, and receive
                an accounting of disclosures. For more information about our HIPAA practices, please contact us
                or request a copy of our Notice of Privacy Practices.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With your consent or at your direction</li>
                <li>With healthcare providers involved in your care</li>
                <li>With insurance companies for billing and authorization purposes</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect the rights, property, or safety of Modern Steps ABA, our clients, or others</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are designed to serve children, and we collect information about minors only with
                parental or guardian consent as part of providing ABA therapy services. We are committed to
                protecting the privacy of children and complying with applicable laws regarding children's privacy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last updated" date. You are advised to
                review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold">Modern Steps ABA</p>
                <p className="text-gray-600">Email: info@modernstepsaba.com</p>
                <p className="text-gray-600">Serving families across Virginia</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
