import { useEffect, useState } from 'react';
import { getAnchorFromHash, getRouteFromHash } from './routes';

function readHash() {
  return window.location.hash;
}

export function useHashRouter() {
  const [route, setRoute] = useState(() => getRouteFromHash(readHash()));

  useEffect(() => {
    const handleHashChange = () => {
      const hash = readHash();
      const nextRoute = getRouteFromHash(hash);
      const anchor = getAnchorFromHash(hash);

      setRoute(nextRoute);
      window.scrollTo(0, 0);

      if (nextRoute === 'home' && anchor) {
        window.setTimeout(() => {
          const target = document.getElementById(anchor);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}
