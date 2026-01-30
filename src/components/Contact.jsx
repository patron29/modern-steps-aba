import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaClock, FaCalendarAlt } from 'react-icons/fa';
import VirginiaMap from './VirginiaMap';

const contactInfo = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '(571) 866-0640',
    href: 'tel:5718660640',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'mchoudhary@\nmodernstepsaba.com',
    href: 'mailto:mchoudhary@modernstepsaba.com',
  },
  {
    icon: FaClock,
    label: 'Hours',
    value: 'Mon-Fri: 8am-8pm',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-tan" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Get a <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Reach out to us and we will get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <item.icon className="text-white text-xl" />
                </div>
                <p className="text-slate-500 text-sm mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-semibold text-slate-800 hover:text-primary transition-colors text-sm whitespace-pre-line"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold text-slate-800 text-sm">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Virginia Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <VirginiaMap />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Schedule your free consultation today and take the first step toward progress.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/mchoudhary-modernstepsaba/interview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors"
              >
                <FaCalendarAlt />
                Book a Consultation
              </a>
              <a
                href="mailto:mchoudhary@modernstepsaba.com"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition-colors"
              >
                <FaEnvelope />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
