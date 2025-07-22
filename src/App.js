import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home2.jsx';
import AboutPage from './pages/about.jsx';
import ServicesPage from './pages/services.jsx';
import TreatmentOptionsPage from './pages/treat.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/treatment-options" element={<TreatmentOptionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;