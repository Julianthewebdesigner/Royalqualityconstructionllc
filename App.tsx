import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactBar from './components/FloatingContactBar';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Projects from './pages/Projects';

const ScrollToTopOnNav: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopOnNav />
      <div className="relative w-full max-w-[100vw] overflow-x-hidden">
        {/* Light beam texture overlay */}
        <div className="beam-overlay"></div>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/projects" element={<Projects />} />
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
