import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUserMd, FaClipboardCheck, FaHome, FaCalendarCheck } from 'react-icons/fa';

const items = [
  {
    icon: FaUserMd,
    title: 'BCBA-Led Care',
    text: 'Every plan is designed and supervised by a Board Certified Behavior Analyst.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Free Insurance Verification',
    text: 'We verify your coverage with you before you commit to anything.',
  },
  {
    icon: FaHome,
    title: 'In-Home Across Virginia',
    text: 'Therapy at home, where your child learns and uses new skills every day.',
  },
  {
    icon: FaCalendarCheck,
    title: 'No Waitlist',
    text: 'Now enrolling - start with a free consultation, Mon-Fri 8am-6pm.',
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="bg-[#f5f0e8] py-12" ref={ref}>
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#c4b5a5] flex items-center justify-center flex-shrink-0">
                <item.icon className="text-[#5a7a6e] text-xl" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
