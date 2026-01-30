import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhoneAlt, FaClipboardCheck, FaFileAlt, FaPlay } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    icon: FaPhoneAlt,
    title: 'Free Consultation',
    description:
      'Call us or fill out our contact form. We\'ll discuss your needs, answer questions, and explain our services.',
  },
  {
    number: '02',
    icon: FaClipboardCheck,
    title: 'Comprehensive Assessment',
    description:
      'Our BCBAs conduct a thorough evaluation to understand strengths, challenges, and create a baseline for progress.',
  },
  {
    number: '03',
    icon: FaFileAlt,
    title: 'Personalized Treatment Plan',
    description:
      'We develop a customized therapy plan with specific, measurable goals tailored to the individual\'s unique needs.',
  },
  {
    number: '04',
    icon: FaPlay,
    title: 'Begin Therapy',
    description:
      'Therapy sessions begin with ongoing monitoring, regular updates, and adjustments to maximize progress.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="section-padding" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We&apos;ve simplified the process to help you get the support you need
            as quickly as possible.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-slate-200">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full gradient-primary"
            />
          </div>

          {/* Connection Line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-slate-200 -z-10" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto lg:mx-0">
                    <step.icon className="text-primary text-2xl" />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-center lg:text-left">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-white text-lg">&rarr;</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">
            Ready to begin your journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/mchoudhary-modernstepsaba/interview" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule Your Consultation
            </a>
            <a href="mailto:mchoudhary@modernstepsaba.com" className="btn-outline">
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
