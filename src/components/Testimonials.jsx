import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Parent of a 7-year-old',
    content:
      'Modern Steps ABA has been a game-changer for our family. Within just a few months, we saw incredible improvements in our son\'s communication skills. The therapists are patient, knowledgeable, and truly care about his progress.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David & Lisa T.',
    role: 'Parents of twins',
    content:
      'We were hesitant about starting ABA therapy, but the team at Modern Steps made us feel comfortable from day one. They take the time to explain everything and involve us in every step of the process. Highly recommend!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jennifer K.',
    role: 'Parent of a teenager',
    content:
      'Finding ABA services for our teen was challenging until we found Modern Steps. They understand the unique needs of adolescents and have helped our daughter gain confidence and independence. We\'re so grateful.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael R.',
    role: 'Adult client',
    content:
      'As an adult seeking ABA services, I wasn\'t sure what to expect. Modern Steps treated me with respect and helped me develop skills I never thought possible. The in-home option made it convenient to fit into my schedule.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-cream" ref={ref}>
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What <span className="text-primary">Families</span> Say
          </h2>
          <p className="text-slate-600 text-lg">
            Don&apos;t just take our word for it. Hear from the families
            we&apos;ve had the privilege to serve.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/10">
              <FaQuoteLeft size={60} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-slate-600 text-lg md:text-xl text-center leading-relaxed mb-8"
              >
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-primary hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
