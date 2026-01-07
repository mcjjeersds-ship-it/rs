import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

type HomeDropdownProps = Props & {
  isMobile?: boolean;
};

const HomeDropdown = ({ selectedPage, setSelectedPage, isMobile = false }: HomeDropdownProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
 };

  const handleLinkClick = () => {
    setSelectedPage(SelectedPage.Home);
    scrollToSection('home');
  };

  // Render as a simple link instead of dropdown
return (
    <Link
      className={`${
        selectedPage === SelectedPage.Home
          ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
          : 'text-[#1d4d85]'
      } transition font-bold ${isMobile ? 'text-2xl' : 'text-lg'} duration-500 hover:text-[#2b7dad]`}
      to="/Hospital-Website/home"
      onClick={() => {
        setSelectedPage(SelectedPage.Home);
      }}
    >
      Home
    </Link>
  );
};

export default HomeDropdown;