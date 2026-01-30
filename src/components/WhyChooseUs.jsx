import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaUserMd,
  FaClipboardList,
  FaClock,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaChartLine,
} from 'react-icons/fa';

const features = [
  {
    icon: FaUserMd,
    title: 'Experienced BCBAs',
    description:
      'Our team consists of highly trained, Board Certified Behavior Analysts with years of clinical experience.',
  },
  {
    icon: FaClipboardList,
    title: 'Personalized Plans',
    description:
      'Every treatment plan is custom-designed based on thorough assessments and individual goals.',
  },
  {
    icon: FaClock,
    title: 'Flexible Scheduling',
    description:
      'We work around your schedule with morning, afternoon, and weekend appointment availability.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Multiple Settings',
    description:
      'Choose between in-home therapy or clinic-based sessions based on what works best for your family.',
  },
  {
    icon: FaHandsHelping,
    title: 'Family Involvement',
    description:
      'We believe in partnership. Parents and caregivers are integral to the therapy process.',
  },
  {
    icon: FaChartLine,
    title: 'Data-Driven Results',
    description:
      'We track progress meticulously, using data to continuously refine and improve treatment outcomes.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-tan" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            The <span className="text-primary">Modern Steps</span> Difference
          </h2>
          <p className="text-slate-600 text-lg">
            We go above and beyond to provide exceptional ABA therapy services
            that make a real difference in the lives of our clients and their families.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="text-primary text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6 text-lg">
            Ready to take the first step toward progress?
          </p>
          <a href="https://calendly.com/mchoudhary-modernstepsaba/interview" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
