import { useLocation } from 'react-router-dom';
import { AnnouncementBar, Navbar, Footer } from './components';

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#59433F]">
      {!location.pathname.includes('admin') && <AnnouncementBar />}
      {!location.pathname.includes('admin') && <Navbar />}
      <main>{children}</main>
      {!location.pathname.includes('admin') && <Footer />}
    </div>
  );
}
