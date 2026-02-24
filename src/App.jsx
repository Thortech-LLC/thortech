import './App.css';
import LandingPage from './components/LandingPage';
import { useFadeInOnScroll } from './script';

function App() {
  useFadeInOnScroll();
  return <LandingPage />;
}

export default App;
