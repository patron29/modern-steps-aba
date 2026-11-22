import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileContactButton from './components/MobileContactButton';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import InHomeABA from './pages/services/InHomeABA';
import EarlyIntervention from './pages/services/EarlyIntervention';
import FunctionalBehaviorAssessment from './pages/services/FunctionalBehaviorAssessment';
import NaturalEnvironmentTeaching from './pages/services/NaturalEnvironmentTeaching';
import CaregiverTraining from './pages/services/CaregiverTraining';
import Woodbridge from './pages/cities/Woodbridge';
import Richmond from './pages/cities/Richmond';
import Manassas from './pages/cities/Manassas';
import Alexandria from './pages/cities/Alexandria';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services/in-home-aba-therapy" element={<InHomeABA />} />
          <Route path="/services/early-intervention-aba" element={<EarlyIntervention />} />
          <Route path="/services/functional-behavior-assessment" element={<FunctionalBehaviorAssessment />} />
          <Route path="/services/natural-environment-teaching" element={<NaturalEnvironmentTeaching />} />
          <Route path="/services/caregiver-training" element={<CaregiverTraining />} />
          <Route path="/aba-therapy-woodbridge-va" element={<Woodbridge />} />
          <Route path="/aba-therapy-richmond-va" element={<Richmond />} />
          <Route path="/aba-therapy-manassas-va" element={<Manassas />} />
          <Route path="/aba-therapy-alexandria-va" element={<Alexandria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileContactButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
