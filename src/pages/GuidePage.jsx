import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { PHONE_DISPLAY, PHONE_HREF, CALENDLY_URL } from '../config/site.js';
import { GUIDES } from '../data/guides.js';

export default function GuidePage({ slug }) {
  const guide = GUIDES.find((item) => item.slug === slug);
  const otherGuides = GUIDES.filter((item) => item.slug !== slug);

  useEffect(() => {
    if (guide) {
      document.title = `${guide.title} | Modern Steps ABA`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', guide.metaDescription);
      }
    }
    window.scrollTo(0, 0);
  }, [guide]);

  if (!guide) {
    return (
      <div className="pt-28 pb-16">
        <div className="container-custom mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Guide Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            This guide does not exist or has been moved.
          </p>
          <Link to="/resources" className="btn-primary">
            Browse Parent Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          {guide.title}
        </h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">{guide.intro}</p>

        {guide.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {section.heading}
            </h2>
            {(section.paragraphs || []).map((paragraph) => (
              <p key={paragraph} className="text-slate-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {guide.terms && (
          <section className="mb-10">
            <div className="space-y-6">
              {guide.terms.map((item) => (
                <div key={item.term}>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.term}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* More parent resources */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            More parent resources
          </h2>
          <ul className="space-y-2">
            {otherGuides.map((other) => (
              <li key={other.slug}>
                <Link
                  to={`/resources/${other.slug}`}
                  className="font-semibold text-[#5a7a6e] hover:underline"
                >
                  {other.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/resources"
                className="font-semibold text-[#5a7a6e] hover:underline"
              >
                Parent Resources
              </Link>
            </li>
          </ul>
        </section>

        {/* CTA Band */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">
            Now enrolling with no waitlist. Book a free consultation or call us Mon-Fri,
            8am-6pm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FaCalendarAlt aria-hidden="true" /> Book a Free Consultation
            </a>
            <a
              href={PHONE_HREF}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
