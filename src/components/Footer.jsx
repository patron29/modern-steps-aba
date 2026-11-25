import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, FACEBOOK_URL, INSTAGRAM_URL } from '../config/site.js';
import { scrollToSection } from '../utils/scrollToSection.js';

const quickLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About Us', href: 'about' },
  { name: 'Services', href: 'services' },
  { name: 'Our Process', href: 'process' },
  { name: 'Our Team', href: 'team' },
  { name: 'FAQ', href: 'faq' },
  { name: 'Contact', href: 'contact' },
];

const services = [
  { name: 'In-Home ABA Therapy', href: '/services/in-home-aba-therapy' },
  { name: 'Early Intervention ABA', href: '/services/early-intervention-aba' },
  { name: 'Functional Behavior Assessment', href: '/services/functional-behavior-assessment' },
  { name: 'Natural Environment Teaching', href: '/services/natural-environment-teaching' },
  { name: 'Caregiver Training & Support', href: '/services/caregiver-training' },
];

const areas = [
  { name: 'Woodbridge', href: '/aba-therapy-woodbridge-va' },
  { name: 'Richmond', href: '/aba-therapy-richmond-va' },
  { name: 'Manassas', href: '/aba-therapy-manassas-va' },
  { name: 'Alexandria', href: '/aba-therapy-alexandria-va' },
  { name: 'Fairfax', href: '/aba-therapy-fairfax-va' },
  { name: 'Fredericksburg', href: '/aba-therapy-fredericksburg-va' },
  { name: 'Stafford', href: '/aba-therapy-stafford-va' },
  { name: 'Arlington', href: '/aba-therapy-arlington-va' },
  { name: 'Springfield', href: '/aba-therapy-springfield-va' },
  { name: 'Dale City', href: '/aba-therapy-dale-city-va' },
  { name: 'Chesterfield', href: '/aba-therapy-chesterfield-va' },
  { name: 'Midlothian', href: '/aba-therapy-midlothian-va' },
  { name: 'Henrico', href: '/aba-therapy-henrico-va' },
];

const resources = [
  { name: 'Parent Resources', href: '/resources' },
  { name: 'Starting ABA Therapy in Virginia', href: '/resources/starting-aba-therapy-virginia' },
  { name: 'ABA Terms in Plain Language', href: '/resources/aba-terms-glossary' },
  { name: 'In-Home vs. Center-Based ABA', href: '/resources/in-home-vs-center-based-aba' },
];

const socialLinks = [
  { icon: FaFacebookF, href: FACEBOOK_URL, label: 'Facebook' },
  { icon: FaInstagram, href: INSTAGRAM_URL, label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => handleSectionClick(e, 'home')}
              className="inline-block mb-6"
            >
              <img
                src="/images/logo.png"
                alt="Modern Steps ABA"
                className="h-24 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              Modern Steps ABA offers in-home ABA therapy, empowering individuals
              with autism to grow and thrive.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon size={24} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-lg mb-6 mt-8">Parent Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link to={resource.href} className="text-white/70 hover:text-secondary transition-colors">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-white/70 hover:text-secondary transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="font-bold text-lg mb-6">Areas We Serve</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link to={area.href} className="text-white/70 hover:text-secondary transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <FaPhone className="text-secondary shrink-0" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <FaEnvelope className="text-secondary shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <FaMapMarkerAlt className="text-secondary mt-1" aria-hidden="true" />
                <span>Serving families across Virginia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container-custom mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                &copy; {currentYear} Modern Steps ABA. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
