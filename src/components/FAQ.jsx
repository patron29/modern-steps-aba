import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is ABA therapy?',
    answer:
      'Applied Behavior Analysis (ABA) is a scientifically proven therapy that focuses on improving specific behaviors, such as social skills, communication, reading, and academics, as well as adaptive learning skills like fine motor dexterity, hygiene, grooming, domestic capabilities, and punctuality. ABA is widely recognized as the most effective evidence-based treatment for individuals with autism.',
  },
  {
    question: 'Who can benefit from ABA therapy?',
    answer:
      'ABA therapy can benefit individuals of all ages who are diagnosed with autism spectrum disorder (ASD) or other developmental conditions. At Modern Steps ABA, we provide services for children (ages 2-12), teenagers (ages 13-18), and adults (18+). Early intervention is often recommended, but it\'s never too late to start.',
  },
  {
    question: 'How long does ABA therapy take?',
    answer:
      'The duration of ABA therapy varies depending on the individual\'s needs and goals. Some clients may see significant progress in a few months, while others may benefit from longer-term therapy. Our BCBAs continuously assess progress and adjust treatment plans accordingly. We work with families to set realistic expectations and milestones.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept most major insurance plans that cover ABA therapy services. Our team will work with you to verify your benefits and handle the authorization process. We understand navigating insurance can be challenging, so we\'re here to help every step of the way.',
  },
  {
    question: 'What\'s the difference between in-home and clinic-based therapy?',
    answer:
      'In-home therapy takes place in your home environment, allowing therapists to work on skills in natural settings where the individual spends most of their time. Clinic-based therapy occurs in our facility, which provides a structured environment with specialized equipment and opportunities for peer interaction. Many families choose a combination of both.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Simply call us at (800) 555-1234 or fill out our contact form to schedule a free consultation. During this call, we\'ll discuss your needs, explain our services, and answer any questions. From there, we\'ll schedule a comprehensive assessment and develop a personalized treatment plan.',
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg pr-8">{faq.question}</span>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
            isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
          }`}
        >
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Have questions? We have answers. If you don&apos;t see your question
              here, feel free to reach out to us directly.
            </p>
            <a href="#contact" className="btn-primary">
              Ask a Question
            </a>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
