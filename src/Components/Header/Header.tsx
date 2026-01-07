import Logo from '@/assets/Images/Logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    // Fungsi untuk menentukan halaman berdasarkan URL
    const determinePageFromURL = () => {
      const path = location.pathname.toLowerCase();
      if (path.includes('/information')) {
        return SelectedPage.Information;
      } else if (path.includes('/contact') || location.hash.includes('#information')) {
        // When URL has #information hash (like when clicking Contact Us), treat as ContactUs page
        return SelectedPage.ContactUs;
      } else if (path.includes('/home') || path === '/') {
        return SelectedPage.Home;
      }
      return SelectedPage.Home;
    };

    // Set halaman awal berdasarkan URL
    setSelectedPage(determinePageFromURL());

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      className={`${flexBetween} ${
        isTopOfPage ? '' : 'bg-[#bce6bf]'
      } transition fixed top-0 z-30 w-full p-5 md:px-16`}
    >
      <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Header;
