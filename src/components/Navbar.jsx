// src/components/Navbar.js
import React, { useState } from 'react';
// If you are using React Router (recommended for multi-page apps in React),
// you would import Link instead of using <a> tags.
// import { Link } from 'react-router-dom';

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Placeholder links - replace with actual routes if using React Router
  const navLinks = [
    { name: 'Strona Główna', href: '/' }, // Link to homepage
    { name: 'Usługi', href: '/uslugi' },
    { name: 'Cennik', href: '/cennik' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  // Dynamic classes based on transparent prop
  const navClasses = transparent 
    ? "transition-all duration-300 text-white" 
    : "bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-md";

  return (
    <header className={`${navClasses} w-full z-50 ${transparent ? '' : 'fixed'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between flex-wrap">

        {/* Logo/Site Title */}
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* Replace with your logo or salon name */}
          <span className="font-semibold text-xl tracking-tight">Salon Fryzjerski u Małgosi</span>
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white/50 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile) */}
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="text-sm lg:flex-grow lg:text-right">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href} // Use Link component here if using React Router
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white/80 hover:underline mr-6 text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </nav>
      {/* Optional: Placeholder for the graphic below the menu */}
      {/* This graphic seems part of the header area */}
      {/* You might place it below the navbar if it's part of the overall header */}
      {/* <div className="relative w-full" style={{ height: '100px' }}>
           <img src="/path/to/scissors-graphic.png" alt="Graphic" className="absolute bottom-0 right-0 h-full object-cover"/>
      </div> */}
    </header>
  );
};

export default Navbar;