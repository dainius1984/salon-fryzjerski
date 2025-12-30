import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Lista metod płatności z ich ścieżkami publicznymi
  const paymentImages = [
    { name: 'BLIK', path: '/img/blik.svg' },
    { name: 'VISA', path: '/img/visa.png' },
    { name: 'MASTERCARD', path: '/img/mastercard.png' },
    { name: 'PAY U', path: '/img/payu.png' }
  ];
  
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Column 1: Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 font-playfair tracking-wide">Kontakt</h3>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-center justify-center md:justify-start">
                <span>ul. Osmańczyka 8 A, 54-058 Wrocław</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span>+48 539 919 065</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <p>Pon, Śr, Pt: 10:00 - 16:00</p>
                  <p>Wt, Czw: 11:00 - 18:00</p>
                  <p>Sb: 10:00 - 14:00</p>
                  <p>Nd: Zamknięte</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Column 2: Szybkie linki */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 font-playfair tracking-wide">Szybkie linki</h3>
            <ul className="space-y-2 text-purple-100">
              <li className="flex items-center justify-center">
                <Link to="/" onClick={scrollToTop} className="hover:text-white hover:underline transition duration-300">
                  Strona Główna
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/uslugi" onClick={scrollToTop} className="hover:text-white hover:underline transition duration-300">
                  Usługi
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/cennik" onClick={scrollToTop} className="hover:text-white hover:underline transition duration-300">
                  Cennik
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/galeria" onClick={scrollToTop} className="hover:text-white hover:underline transition duration-300">
                  Galeria
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link to="/kontakt" onClick={scrollToTop} className="hover:text-white hover:underline transition duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: Metody płatności */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6 font-playfair tracking-wide text-center">Metody płatności</h3>
            <div className="grid grid-cols-2 gap-4 max-w-[280px] mx-auto">
              {/* Użycie tablicy paymentImages do wyświetlania obrazów */}
              {paymentImages.map((payment, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md flex items-center justify-center h-[100px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-5"
                >
                  <img 
                    src={payment.path} 
                    alt={payment.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="py-4 mt-8 text-center border-t border-purple-600">
        <p className="text-sm text-purple-200">
          &copy; {currentYear} Salon Fryzjerski "U Małgosi". Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 