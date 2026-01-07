import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
 page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMobile?: boolean;
};

const Link = ({ page, selectedPage, setSelectedPage, isMobile }: Props) => {
  // Skip rendering if the page is Information, Home, Doctors, Services, or Reviews as they're handled by HomeDropdown
  if (page === 'Information' || page === 'Home' || page === 'Doctors' || page === 'Services' || page === 'Reviews') {
    return null;
  }

  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;
  
  const handleLinkClick = () => {
    setSelectedPage(lowerCasePage as SelectedPage);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
          : 'text-[#1d4d85]'
      } transition font-bold ${isMobile ? 'text-base' : 'text-lg'} duration-500 hover:text-[#2b7dad]`}
      href={`#${lowerCasePage}`}
      onClick={handleLinkClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
