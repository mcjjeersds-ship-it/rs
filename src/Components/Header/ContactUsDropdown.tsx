import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

type Props = {
  isMobile?: boolean;
  setSelectedPage?: (value: SelectedPage) => void;
};

const ContactUsDropdown = ({ isMobile = false, setSelectedPage }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = () => {
    // Set selected page to ContactUs and scroll to information section
    if (setSelectedPage) {
      setSelectedPage(SelectedPage.ContactUs);
    }
    scrollToSection('information');
  };

  // Render as a simple link instead of dropdown
  return (
    <AnchorLink
      className={`${
        isMobile
          ? 'text-[#1d4d85] font-bold text-2xl hover:text-[#2b7dad]'
          : 'text-[#1d4d85] transition font-bold text-lg duration-500 hover:text-[#2b7dad]'
      }`}
      href="#information"
      onClick={handleLinkClick}
    >
      Contact Us
    </AnchorLink>
  );
};

export default ContactUsDropdown;