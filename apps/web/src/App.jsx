
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import BusinessPage from './pages/BusinessPage.jsx';
import BusinessFranchisePage from './pages/BusinessFranchisePage.jsx';
import BusinessLaundryPage from './pages/BusinessLaundryPage.jsx';
import CareersPage from './pages/CareersPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/business/franchise" element={<BusinessFranchisePage />} />
        <Route path="/business/laundry" element={<BusinessLaundryPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
