import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { PHONE_DISPLAY, PHONE_HREF, CALENDLY_URL } from '../config/site.js';
import { GUIDES } from '../data/guides.js';

export default function ResourcesHub() {
  useEffect(() => {
    document.title = 'Parent Resources | Modern Steps ABA';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Plain-language guides for parents: how ABA therapy starts in Virginia, what ABA terms mean, and how to choose between in-home and center-based ABA.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Parent Resources
        </h1>
        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
          Guides written for parents, in plain language: how ABA starts, what the terms
          mean, and how to choose the right setting for your child.
        </p>

        <div className="space-y-6 mb-10">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                <Link
                  to={`/resources/${guide.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {guide.metaDescription}
              </p>
              <Link
                to={`/resources/${guide.slug}`}
                className="font-semibold text-[#5a7a6e] hover:underline"
              >
                Read the guide
              </Link>
            </article>
          ))}
        </div>

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
