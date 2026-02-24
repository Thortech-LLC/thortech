import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { useFadeInOnScroll } from './script';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  useFadeInOnScroll(currentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentPage('privacy');
        // Page-level route: always start at top.
        window.scrollTo(0, 0);
      } else if (hash === 'terms') {
        setCurrentPage('terms');
        // Page-level route: always start at top.
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        if (!hash) {
          window.scrollTo(0, 0);
          return;
        }
        // Defer anchor scroll until LandingPage is mounted.
        window.setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
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
