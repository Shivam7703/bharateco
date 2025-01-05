// MenuMobile.tsx
import React, { useState } from "react";
import Link from "next/link";





const navItemsArray = [{id:1, label: "About", href : "about", latest:false,},
    {id:2, label: "Services & Techs", href : "services", latest:false,},
    { id: 3, label: "Sustainability", href: "sustainability", latest: false },
  { id: 4, label: "Blogs", href: "blogs", latest: false },
  { id: 5, label: "Contact Us", href: "contact-us", latest: false },
]

interface NavItem {
  id: number | string;
  label: string;
  href: string;
  latest: Boolean;
  subNav?: NavItem[];
  iconImage?: string;
}

interface MenuMobileProps {
  navItemsArray: NavItem[];
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeItemId: string | null;
  onItemClick: (itemId: string, href: string) => void; 
  onTop: Boolean;// Update this line
}

const MenuMobile: React.FC<MenuMobileProps> = ({ 
 onTop,
  activeItemId, 
  onItemClick 
}) => {
  return (
    <ul className="w-full flex flex-col ">
      {navItemsArray.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={`block px-4 ${onTop ? 'text-white' : 'text-black'} bg-opacity-30 backdrop-blur-xl  py-2 ${activeItemId === item.href ? 'bg-main' : 'bg-transparent'}`}
            onClick={() => onItemClick(item.id.toString(), item.href)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

interface SingleNavItemProps {
  item: NavItem;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeItemId: string | null;
  onItemClick: (itemId: string, href: string) => void;  // Update this line
}

const SingleNavItem: React.FC<SingleNavItemProps> = ({ 
  item, 
  activeItemId, 
  onItemClick 
}) => {
  const [isItemOpen, setItemOpen] = useState(false);

  const toggleItem = () => {
    setItemOpen(!isItemOpen);
    onItemClick(item.id.toString(), item.href);  // Update this line
  };

  // ... rest of the component remains the same

  

  return (
    <>
      <Link
        onClick={toggleItem}
        href={item.href ?? "#"}
        className={`relative px-5 py-3 transition-all border-b border-zinc-200 hover:bg-pink1 hover:text-white ${activeItemId === item.id.toString() ? 'text-pink2' : 'text-black'}`}
      >
        {/* ... */}
      </Link>

      {isItemOpen && item.subNav && item.subNav.length !== 0 && (
        <div className="z-10 w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {item.subNav.map((ch, i) => (
            <Link
              key={i}
              href={ch.href ?? "#"}
              className={`flex cursor-pointer items-center py-1 pl-6 pr-8 hover:bg-pink2 hover:text-white ${activeItemId === ch.id.toString() ? 'text-pink2' : 'text-blue-950'}`}
              onClick={() => onItemClick(ch.id.toString(), ch.href)}  // Update this line
            >
              {/* ... */}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MenuMobile;