/*
  Header section
  with brand logo, menu, cart icon, user avatar icon.
*/

import { useEffect, useState } from "react";


export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handler = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [])

  return (
    <>
      {/* Mobile menu */}
      {isMobile && (
        <div className={`bg-black/70 h-screen w-full fixed transition-all duration-100 ${mobileMenuOpen ? 'righ-0' : '-right-full'}`}>
          <div className={`z-10 fixed h-full w-2/3 top-0 px-7 py-7 bg-white transition-all delay-100 duration-300 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
            <div onClick={() => setMobileMenuOpen(false)} className="mb-12">
              <img src="./icon-close.svg" alt="Close"/>
            </div>
            <ul>
              {menu.map((item) => (
                <li className="mb-6 text-lg font-bold" key={item.id}><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <header className="flex justify-between py-5 md:py-0 px-5 md:px-0 items-center md:border-b-[1px]">
        <div className="flex">
          {/* Mobile menu toggle icon */}
          {isMobile && (
            <div onClick={() => setMobileMenuOpen(true)} className="flex justify-center items-center px-2 pt-1">
              <img src="./icon-menu.svg" alt="Menu icon" />
            </div>
          )}
          <div className="flex justify-center items-center px-2 md:px-0">
            <img src="./logo.svg" alt="Logo" />
          </div>
        </div>
        {/* Desktop menu */}
        {!isMobile && (
          <div className="flex justify-center">
            <ul className="flex gap-8">
              {menu.map((item) => (
                <li className="py-10 border-b-4 border-transparent hover:border-orange transition-all duration-300 ease-in-out" key={item.id}><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center gap-6 md:gap-8 ">
          <div>
            <img src="./icon-cart.svg" alt="Cart" />
          </div>
          <div className="pe-2">
            <img className="w-6 h-6 md:w-10 md:h-10" src="./image-avatar.png" alt="User avatar" />
          </div>
        </div>
      </header>
    </>
  )
}

// Menu item array
export const menu: Menu[] = [
  {
    id: 1,
    name:'Collections',
    link: '#'
  },
  {
    id: 2,
    name: 'Men',
    link: '#'
  },
  {
    id: 3,
    name: 'Women',
    link: '#'
  },
  {
    id: 4,
    name: 'About',
    link: '#'
  },
  {
    id: 5,
    name: 'Contact',
    link: '#'
  }
];

// Menu item type
type Menu = {
  id: number;
  name: string;
  link: string; 
}