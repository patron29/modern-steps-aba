import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Process', href: 'process' },
  { name: 'Team', href: 'team' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // We're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scroll after navigation from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="Modern Steps ABA"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-slate-600' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://calendly.com/mchoudhary-modernstepsaba/interview"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-800' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 5rem)' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg overflow-y-auto"
          >
            <div className="container-custom mx-auto py-6 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block py-4 text-lg text-slate-700 font-medium hover:text-primary active:text-primary transition-colors border-b border-slate-100 last:border-b-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                className="pt-6 mt-6 border-t border-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://calendly.com/mchoudhary-modernstepsaba/interview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center text-lg py-4"
                >
                  Schedule Appointment
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
