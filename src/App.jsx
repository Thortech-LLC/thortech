import './App.css';
import { useHashRouter } from './controllers/useHashRouter';
import { useFadeInOnScroll } from './script';
import PageView from './views/PageView';

function App() {
  const route = useHashRouter();

  useFadeInOnScroll(route);

  return <PageView route={route} />;
}

export default App;
