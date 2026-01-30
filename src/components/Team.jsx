import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Jasmeet Kooner MA, BCBA, LBA',
    title: 'Founder and Clinical Director',
    image: '/images/team-jasmeet.jpg',
    bio: 'Jasmeet has over a decade of experience in working with children to enhance their independence and skills in communication, adaptive, behavioral and social development. She has experience working with a diverse population including; Autism, ADHD, cerebral palsy, down syndrome, epilepsy, anxiety and depression. She obtained her graduate degree in Professional Behavior Analysis from Florida Institute of Technology.',
  },
  {
    name: 'Mohmeet Choudhary, MPH, MBA',
    title: 'Founder and President',
    image: '/images/team-mohmeet.jpg',
    bio: 'Mohmeet currently serves as the co-president at Modern Steps ABA and oversees all administrative, HR and operations. He obtained his graduate degree of Public Health in 2021 and followed with a second graduate degree in Business Administration in 2024.',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding bg-mauve" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-cream">
            Your <span className="text-secondary">Leadership Team</span>
          </h2>
          <p className="text-cream/80 text-lg">
            Our team has a wealth of knowledge in the ABA field to provide the
            highest quality of care for your family
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white/20 rounded-2xl p-6 text-center"
            >
              {/* Photo */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-bold text-cream mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-4">{member.title}</p>

              {/* Bio */}
              <p className="text-cream/70 text-sm leading-relaxed mb-6 text-justify">
                {member.bio}
              </p>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
