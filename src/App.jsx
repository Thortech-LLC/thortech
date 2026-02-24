import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { useFadeInOnScroll } from './script';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useFadeInOnScroll();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <LandingPage />;
    }
  };

  return renderPage();
}

export default App;
