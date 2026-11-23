import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import AreasWeServe from '../components/AreasWeServe';
import TrustBar from '../components/TrustBar';

export default function Home() {
  useEffect(() => {
    document.title = 'Modern Steps ABA | In-Home ABA Therapy Services in Virginia';
  }, []);

  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <AreasWeServe />
      <WhyChooseUs />
      <Process />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
