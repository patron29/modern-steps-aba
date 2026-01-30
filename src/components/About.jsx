import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaUsers, FaChartLine, FaHandHoldingHeart } from 'react-icons/fa';

const values = [
  {
    icon: FaHeart,
    title: 'Compassionate Care',
    description: 'Every individual is treated with dignity, respect, and genuine care.',
  },
  {
    icon: FaUsers,
    title: 'Family-Centered',
    description: 'We partner with families to create meaningful, lasting progress.',
  },
  {
    icon: FaChartLine,
    title: 'Evidence-Based',
    description: 'Our methods are grounded in proven scientific research and data.',
  },
  {
    icon: FaHandHoldingHeart,
    title: 'Individualized',
    description: 'Treatment plans tailored to each person\'s unique needs and goals.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1587654780014-1dfba4e2dbe3?w=600&h=400&fit=crop"
                alt="Child playing with colorful blocks"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=500&fit=crop"
                alt="Parent and child learning together"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=500&fit=crop"
                alt="Child drawing and creating art"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-white/80">Years of Combined Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Modern Steps ABA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Empowering Individuals with Autism to
              <span className="text-primary"> Grow and Thrive</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              At Modern Steps ABA, we are dedicated to providing high-quality, evidence-based
              Applied Behavior Analysis (ABA) therapy services. Our team of experienced
              Board Certified Behavior Analysts (BCBAs) and Registered Behavior Technicians (RBTs)
              work collaboratively to create personalized treatment plans that address the unique
              needs of each individual.
            </p>
            <p className="text-slate-600 text-lg mb-8">
              We believe in a family-centered approach, involving caregivers in every step
              of the therapeutic process to ensure lasting progress. Our in-home services
              allow us to work with clients in their natural environment, promoting
              generalization of skills across settings.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{value.title}</h3>
                    <p className="text-slate-600 text-xs">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
