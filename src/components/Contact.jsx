import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@modernstepsaba.com',
    href: 'mailto:info@modernstepsaba.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Service Area',
    value: 'Virginia',
    href: null,
  },
  {
    icon: FaClock,
    label: 'Hours',
    value: 'Mon-Fri: 8am-6pm',
    href: null,
  },
  {
    icon: FaCalendarAlt,
    label: 'Appointments',
    value: 'Schedule Online',
    href: '#contact',
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            Feel free to reach out to us by filling out the form below with your information
            and we will get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FaCheckCircle className="text-secondary text-6xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thanks for submitting!</h3>
                <p className="text-slate-600">
                  We&apos;ve received your message and will get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone number is required' })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Leave us a message...
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
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
                      className="font-semibold text-slate-800 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-slate-800">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="aspect-video bg-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="text-primary text-4xl mx-auto mb-4" />
                  <p className="text-slate-600">
                    Serving families across Virginia
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    In-home services available in your area
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-white/80 mb-4">
                Schedule your free consultation today and take the first step toward progress.
              </p>
              <a
                href="mailto:info@modernstepsaba.com"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors"
              >
                <FaEnvelope />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
