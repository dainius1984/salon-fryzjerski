import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Lista metod płatności z ich ścieżkami publicznymi
  const paymentImages = [
    { name: 'BLIK', path: '/img/Blik.svg', fallback: 'https://www.blik.com/static/esplatform/blik/public/static/type01.d7292e54.svg' },
    { name: 'VISA', path: '/img/Visa.png', fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png' },
    { name: 'MASTERCARD', path: '/img/Mastercard.png', fallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1920px-Mastercard_2019_logo.svg.png' },
    { name: 'PAY U', path: '/img/PayU.png', fallback: 'https://poland.payu.com/wp-content/uploads/sites/14/2020/05/PayU_logo_Lime.png' }
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
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>ul. Osmańczyka 8 A, 54-058 Wrocław</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+48 539 919 065</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-center md:text-left">
                  <p>Pn - Pt: 10:00 - 18:00</p>
                  <p>Sb: 9:00 - 14:00</p>
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
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/" className="hover:text-white hover:underline transition duration-300">
                  Strona Główna
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/uslugi" className="hover:text-white hover:underline transition duration-300">
                  Usługi
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/cennik" className="hover:text-white hover:underline transition duration-300">
                  Cennik
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/galeria" className="hover:text-white hover:underline transition duration-300">
                  Galeria
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <Link to="/kontakt" className="hover:text-white hover:underline transition duration-300">
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
                    src={process.env.PUBLIC_URL + payment.path} 
                    alt={payment.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = payment.fallback;
                    }}
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