import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBook, FaClipboardList, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    icon: FaBook,
    title: 'Natural Environment Teaching (NET)',
    image: '/images/service-1.jpg',
    description: [
      'Natural Environment Training (NET) is a practical approach used in special education and applied behavior analysis (ABA) to teach children with developmental delays or disabilities essential skills within their natural environment.',
      'This training method focuses on creating a supportive and meaningful learning environment that closely resembles the child\'s everyday surroundings, such as home, school, or community.',
      'It aims to enhance generalization and effectively promote functional skills acquisition in various situations.',
    ],
  },
  {
    icon: FaClipboardList,
    title: 'Functional Behavior Assessment (FBA)',
    image: '/images/service-2.jpg',
    description: [
      'Functional Behavior Assessment (FBA) is a process to understand why a child engages in challenging behaviors. It involves gathering information to identify the underlying function or purpose of the behavior.',
      'By conducting an FBA, parents can gain insights into what triggers the behavior and how it serves a specific purpose for their child.',
      'This assessment helps parents and professionals develop effective strategies to support and address the child\'s needs, promoting positive behavior and reducing challenging ones.',
    ],
  },
  {
    icon: FaHandsHelping,
    title: 'Caregiver Support',
    image: '/images/service-3.jpg',
    description: [
      'The structure of parent training should aim to balance the caregiver\'s concerns with the child\'s ability to perform. Modern Steps staff strive to understand, reflect and empathize with the individual needs of caregivers. A core component of the parent training program also adheres to the Behavioral Skills Training Model (BST) developed by Miltenberger (2003).',
      'Parent training sessions will be conducted in all of the following categories:',
    ],
    features: [
      'Indirect/ Direct Instruction',
      'Informative Discussion',
      'Powerpoint on Focused Skills',
      'Hands on coaching/modeling',
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 bg-[#d9cec1]" ref={ref}>
      <div className="container-custom mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Services - Right at Home
          </h2>
          <p className="text-gray-700 text-base">
            From the first session to real progress – personalized ABA therapy, delivered where it matters most.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#c4b5a5] flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-[#5a7a6e] text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>

                {/* Description */}
                <div className="text-gray-600 text-sm space-y-3">
                  {service.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  {/* Features list if exists */}
                  {service.features && (
                    <ol className="list-decimal list-inside mt-2 space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
