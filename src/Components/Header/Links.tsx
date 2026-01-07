import { SelectedPage } from '@/Components/Shared/Types';
import Link from './Link';
import InformationDropdown from './InformationDropdown';
import HomeDropdown from './HomeDropdown';
import ContactUsDropdown from './ContactUsDropdown';
import { links } from '@/Components/Shared/Consts';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMobile?: boolean;
};


const Links = ({ selectedPage, setSelectedPage, isMobile = false }: Props) => {
  return (
    <>
      {links.map((link) => {
        if (link === 'Information') {
          return (
            <InformationDropdown
              key={link}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobile={isMobile}
            />
          );
        } else if (link === 'Home') {
          return (
            <HomeDropdown
              key={link}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobile={isMobile}
            />
          );
        } else if (link === 'Contact Us') {
          return (
            <ContactUsDropdown
              key={link}
              isMobile={isMobile}
              setSelectedPage={setSelectedPage}
            />
          );
        } else {
          return (
            <Link
              key={link}
              page={link}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMobile={isMobile}
            />
          );
        }
      })}
    </>
  );
};

export default Links;
