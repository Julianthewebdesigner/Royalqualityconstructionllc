import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactBar from './components/FloatingContactBar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative w-full max-w-[100vw] overflow-x-hidden">
        {/* Light beam texture overlay */}
        <div className="beam-overlay"></div>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
          </Routes>
        </main>

        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Floating Contact Bar - Shows on scroll up */}
        <FloatingContactBar />
      </div>
    </Router>
  );
};

export default App;
