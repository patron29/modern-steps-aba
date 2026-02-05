import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MobileContactButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contact' } });
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.a
      href="/#contact"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 md:hidden w-14 h-14 rounded-full gradient-primary shadow-lg flex items-center justify-center active:scale-95 transition-transform"
      aria-label="Contact us"
    >
      <FaEnvelope className="text-white text-xl" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full" />
    </motion.a>
  );
}
