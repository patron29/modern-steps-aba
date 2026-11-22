import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';

const serviceLinks = [
  { name: 'In-Home ABA Therapy', href: '/services/in-home-aba-therapy' },
  { name: 'Early Intervention ABA', href: '/services/early-intervention-aba' },
  { name: 'Functional Behavior Assessment', href: '/services/functional-behavior-assessment' },
  { name: 'Natural Environment Teaching', href: '/services/natural-environment-teaching' },
  { name: 'Caregiver Training & Support', href: '/services/caregiver-training' },
];

export default function CityLayout({ title, description, heading, intro, areas, sections, faqs, nearby }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{heading}</h1>
        {intro.map((p, i) => (
          <p key={i} className="text-lg text-slate-600 mb-6 leading-relaxed">{p}</p>
        ))}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Areas We Serve</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
        {sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{s.heading}</h2>
            {s.body && <p className="text-slate-600 mb-4 leading-relaxed">{s.body}</p>}
            {s.bullets && (
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {faqs && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-gray-800 mb-1">{f.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Services</h2>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link to={s.href} className="font-semibold text-[#5a7a6e] hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {nearby && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Also Serving Nearby</h2>
            <div className="space-x-6">
              {nearby.map((n) => (
                <Link key={n.href} to={n.href} className="font-semibold text-[#5a7a6e] hover:underline">
                  {n.name}
                </Link>
              ))}
            </div>
          </section>
        )}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">
            Now enrolling with no waitlist. Book a free consultation or call us Mon-Fri, 8am-6pm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/mchoudhary-modernstepsaba/interview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors"
            >
              <FaCalendarAlt /> Book a Free Consultation
            </a>
            <a
              href="tel:5718660640"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaPhone /> (571) 866-0640
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
