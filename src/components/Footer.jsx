import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Process', href: '#process' },
  { name: 'Our Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Early Intervention (2-6)', href: '#services' },
  { name: 'School-Age Services (6-12)', href: '#services' },
  { name: 'Adolescent & Adult (13+)', href: '#services' },
  { name: 'In-Home Therapy', href: '#services' },
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/share/1D8rnemWZz/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/modernstepsaba?igsh=d2NieWtsbmViMmFm', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto section-padding pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img
                src="/images/logo.png"
                alt="Modern Steps ABA"
                className="h-14 w-auto brightness-0 invert"
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
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon />
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
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={service.href}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </a>
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
                  href="tel:5718660640"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <FaPhone className="text-secondary shrink-0" />
                  (571) 866-0640
                </a>
              </li>
              <li>
                <a
                  href="mailto:mchoudhary@modernstepsaba.com"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors"
                >
                  <FaEnvelope className="text-secondary shrink-0" />
                  mchoudhary@modernstepsaba.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <FaMapMarkerAlt className="text-secondary mt-1" />
                <span>Serving families across Virginia</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="inline-block mt-6 bg-secondary text-primary font-semibold py-2 px-4 rounded-full hover:bg-secondary/90 transition-colors text-sm"
            >
              Contact Us
            </a>
          </div>
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
    </footer>
  );
}
