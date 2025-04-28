// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ transparent = false }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoverLink, setHoverLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active link based on current path
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'Strona Główna';
    if (path === '/uslugi') return 'Usługi';
    if (path === '/cennik') return 'Cennik';
    if (path === '/galeria') return 'Galeria';
    if (path === '/kontakt') return 'Kontakt';
    return 'Strona Główna'; // Default
  };

  const activeLink = hoverLink || getActiveLink();

  // Placeholder links - replace with actual routes if using React Router
  const navLinks = [
    { name: 'Strona Główna', href: '/' },
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
    <header className={`${navClasses} w-full z-50 ${transparent ? '' : 'fixed'} font-lato`}>
      <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">

        {/* Logo/Site Title - Left aligned */}
        <div className="flex items-center z-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/img/logo.png" alt="Salon Fryzjerski u Gosii Logo" className="h-12 w-auto" />
            <span className={`text-xl md:text-2xl font-playfair font-bold ${isScrolled ? 'text-purple-800' : 'text-white'}`}>
              Salon Fryzjerski u Gosii
            </span>
          </Link>
        </div>

        {/* Hamburger Icon (for mobile) - Right aligned */}
        <div className="lg:hidden z-20">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white/50 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) - Right aligned */}
        <div className="hidden lg:block">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white font-lato font-bold text-lg hover:underline decoration-2 underline-offset-4 transition-all duration-200 whitespace-nowrap relative py-1 ${activeLink === link.name ? 'underline' : ''}`}
                onMouseEnter={() => setHoverLink(link.name)}
                onMouseLeave={() => setHoverLink(null)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links (Mobile) */}
        <div className={`w-full lg:hidden absolute top-full left-0 right-0 ${isOpen ? 'block' : 'hidden'} bg-purple-800 mt-0 py-4 px-4 z-10`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white font-lato font-bold text-lg hover:underline decoration-2 underline-offset-4 ${activeLink === link.name ? 'underline' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  setHoverLink(null);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;