/*
  Header section
  with brand logo, menu, cart icon, user avatar icon.
*/

import { useEffect, useState } from "react";


export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handler = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [])

  return (
    <header className="flex justify-between items-center py-6 md:py-12 md:border-b-[1px]">
      <div className="flex">
        {/* Mobile menu icon */}
        {isMobile && (
          <div className="flex justify-center items-center px-2 pt-1">
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
            {menu.map((item, index) => (
              <li key={index}>{item}</li>
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
  )
}

// Menu item array
export const menu: string[] = [
  'Collections',
  'Men',
  'Women',
  'About',
  'Contact'
];