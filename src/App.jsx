import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileContactButton from './components/MobileContactButton';
import ConsultationModal from './components/ConsultationModal';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [showConsultation, setShowConsultation] = useState(false);

  useEffect(() => {
    const handler = () => setShowConsultation(true);
    window.addEventListener('open-consultation', handler);
    return () => window.removeEventListener('open-consultation', handler);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <MobileContactButton />
        <ConsultationModal
          isOpen={showConsultation}
          onClose={() => setShowConsultation(false)}
        />
      </div>
    </Router>
  );
}

export default App;
