import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const areas = [
  { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
  { name: 'Richmond', href: '/aba-therapy-richmond-va' },
  { name: 'Manassas', href: '/aba-therapy-manassas-va' },
  { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
  { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
  { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
  { name: 'Stafford', href: '/aba-therapy-stafford-va' },
];

export default function AreasWeServe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="areas" className="py-20 bg-white" ref={ref}>
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Areas We Serve
          </h2>
          <p className="text-gray-700 text-base">
            In-home ABA therapy across Virginia - choose your area to see how we serve families near you. Now enrolling with no waitlist.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={area.href}
                className="flex items-center gap-2 bg-[#f5f0e8] hover:bg-[#ece3d4] rounded-xl px-4 py-4 font-semibold text-gray-800 transition-colors"
              >
                <FaMapMarkerAlt className="text-[#5a7a6e] shrink-0" aria-hidden="true" />
                ABA Therapy in {area.name}, VA
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
