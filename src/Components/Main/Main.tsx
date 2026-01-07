import { useState, useEffect } from 'react';
import Home from '@/Components/Main/Home/Home';
import Services from './Services/Services';
import Doctors from './Doctors/Doctors';
import Reviews from './Review/Reviews';
import Information from './Home/Information';
const Main = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    // Fungsi untuk menentukan halaman berdasarkan URL
    const determinePageFromURL = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/information')) {
        return 'information';
      } else if (window.location.hash.includes('#information')) {
        // When URL has #information hash (like when clicking Contact Us), return 'information' to show the information section
        return 'information';
      }
      return 'home';
    };

    // Set halaman awal berdasarkan URL
    setCurrentPage(determinePageFromURL());

    // Event listener untuk perubahan URL (misalnya saat menggunakan back/forward button)
    const handlePopState = () => {
      setCurrentPage(determinePageFromURL());
    };

    // Observasi perubahan URL secara manual
    let currentPath = window.location.pathname;
    const urlCheckInterval = setInterval(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        setCurrentPage(determinePageFromURL());
      }
    }, 100);

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearInterval(urlCheckInterval);
    };
  }, []);

  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      {currentPage === 'information' ? (
        <Information />
      ) : (
        <>
          <Home />
          <Services />
          <Doctors />
          <Reviews />
          <Information />
        </>
      )}
    </div>
  );
};

export default Main;
