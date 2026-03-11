import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Deposits = lazy(() => import('./pages/Deposits'));
const Loans = lazy(() => import('./pages/Loans'));
const MemberServices = lazy(() => import('./pages/MemberServices'));
const Downloads = lazy(() => import('./pages/Downloads'));
const NewsNotices = lazy(() => import('./pages/NewsNotices'));
const Gallery = lazy(() => import('./pages/Gallery'));
const BranchLocator = lazy(() => import('./pages/BranchLocator'));
const Contact = lazy(() => import('./pages/Contact'));

const Loader = () => (
  <div className="bank-container py-16">
    <div className="h-32 animate-pulse rounded-2xl bg-red-100" />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-brand-gray text-brand-darkText">
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/chairman-message" element={<Navigate to="/about-us" replace />} />
            <Route path="/board-of-directors" element={<Navigate to="/about-us" replace />} />
            <Route path="/deposit-schemes" element={<Deposits />} />
            <Route path="/loan-services" element={<Loans />} />
            <Route path="/member-services" element={<MemberServices />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/news-notices" element={<NewsNotices />} />
            <Route path="/branch-locator" element={<BranchLocator />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/complaint-form" element={<Navigate to="/contact-us" replace />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            <Route path="/deposits" element={<Navigate to="/deposit-schemes" replace />} />
            <Route path="/loans" element={<Navigate to="/loan-services" replace />} />
            <Route path="/services" element={<Navigate to="/member-services" replace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
