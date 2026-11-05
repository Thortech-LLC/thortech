import LandingPage from '../components/LandingPage';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
import PCsPage from '../components/PCsPage';
import ConsolesPage from '../components/ConsolesPage';

const pages = {
  home: LandingPage,
  privacy: PrivacyPolicy,
  terms: TermsOfService,
  pcs: PCsPage,
  consoles: ConsolesPage,
};

export default function PageView({ route }) {
  const Page = pages[route] || pages.home;
  return <Page />;
}
