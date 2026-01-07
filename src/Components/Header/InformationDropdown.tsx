import { useState, useRef, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

type InformationDropdownProps = Props & {
  isMobile?: boolean;
};

const InformationDropdown = ({ selectedPage, setSelectedPage, isMobile = false }: InformationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (only for desktop)
  useEffect(() => {
    if (isMobile) return; // Don't handle outside clicks for mobile
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (!isMobile) setIsOpen(false);
    }
  };

  const handleLinkClick = (page: SelectedPage, sectionId?: string) => {
    setSelectedPage(page);
    if (sectionId) {
      scrollToSection(sectionId);
    } else if (page === SelectedPage.ContactUs) {
      // For ContactUs, scroll to the information section which contains contact info
      scrollToSection('information');
    } else {
      // If no specific section, scroll to the information section
      scrollToSection('information');
    }
    if (!isMobile) setIsOpen(false);
  };

  if (isMobile) {
    // For mobile view, render as a simple list of anchor links
    return (
      <div className="flex flex-col">
        <AnchorLink
          className={`${
            selectedPage === SelectedPage.Information
              ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
              : 'text-[#1d4d85]'
          } transition font-bold text-2xl duration-500 hover:text-[#2b7dad]`}
          href="#information"
          onClick={() => {
            setSelectedPage(SelectedPage.Information);
            setIsOpen(false);
          }}
        >
          Information
        </AnchorLink>
        <div className="mt-3 space-y-2">
           <Link
             className="block text-[#1d4d85] hover:text-[#2b7dad]"
             to="/Hospital-Website/home/antrian"
             onClick={() => {
               setSelectedPage(SelectedPage.Antrian);
               if (!isMobile) setIsOpen(false);
             }}
           >
             Antrian
           </Link>
           <Link
             className="block text-[#1d4d85] hover:text-[#2b7dad]"
             to="/Hospital-Website/home/doctors"
             onClick={() => {
               setSelectedPage(SelectedPage.Doctors);
               if (!isMobile) setIsOpen(false);
             }}
           >
             Doctors
           </Link>
           <Link
             className="block text-[#1d4d85] hover:text-[#2b7dad]"
             to="/Hospital-Website/home/services"
             onClick={() => {
               setSelectedPage(SelectedPage.Services);
               if (!isMobile) setIsOpen(false);
             }}
           >
             Services
           </Link>
           <Link
             className="block text-[#1d4d85] hover:text-[#2b7dad]"
             to="/Hospital-Website/home/reviews"
             onClick={() => {
               setSelectedPage(SelectedPage.Reviews);
               if (!isMobile) setIsOpen(false);
             }}
           >
             Reviews
           </Link>
           <div
             className="block text-[#1d4d85] hover:text-[#2b7dad] cursor-pointer"
             onClick={() => {
               setSelectedPage(SelectedPage.ContactUs);
               scrollToSection('information');
               if (!isMobile) setIsOpen(false);
             }}
           >
             Contact Us
           </div>
         </div>
      </div>
    );
  }

  // For desktop view, render as a dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`${
          selectedPage === SelectedPage.Information
            ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
            : 'text-[#1d4d85]'
        } transition font-bold text-lg duration-500 hover:text-[#2b7dad]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Information
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
          <ul className="py-1">
            <li>
              <Link
                className="block w-full text-left px-4 py-2 text-sm text-[#1d4d85] hover:bg-[#84ceff] transition"
                to="/Hospital-Website/home/antrian"
                onClick={() => {
                  setSelectedPage(SelectedPage.Antrian);
                  if (!isMobile) setIsOpen(false);
                }}
              >
                Antrian
              </Link>
            </li>
            <li>
              <Link
                className="block w-full text-left px-4 py-2 text-sm text-[#1d4d85] hover:bg-[#84ceff] transition"
                to="/Hospital-Website/home/doctors"
                onClick={() => {
                  setSelectedPage(SelectedPage.Doctors);
                  if (!isMobile) setIsOpen(false);
                }}
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                className="block w-full text-left px-4 py-2 text-sm text-[#1d4d85] hover:bg-[#84ceff] transition"
                to="/Hospital-Website/home/services"
                onClick={() => {
                  setSelectedPage(SelectedPage.Services);
                  if (!isMobile) setIsOpen(false);
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="block w-full text-left px-4 py-2 text-sm text-[#1d4d85] hover:bg-[#84ceff] transition"
                to="/Hospital-Website/home/reviews"
                onClick={() => {
                  setSelectedPage(SelectedPage.Reviews);
                  if (!isMobile) setIsOpen(false);
                }}
              >
                Reviews
              </Link>
              </li>
              <li>
                <div
                  className="block w-full text-left px-4 py-2 text-sm text-[#1d4d85] hover:bg-[#84ceff] transition cursor-pointer"
                  onClick={() => {
                    setSelectedPage(SelectedPage.ContactUs);
                    scrollToSection('information');
                    if (!isMobile) setIsOpen(false);
                  }}
                >
                  Contact Us
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };
export default InformationDropdown;

