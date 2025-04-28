import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {/* Column 1: Kontakt */}
          <div>
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
                <div className="text-left">
                  <p>Pn - Pt: 10:00 - 18:00</p>
                  <p>Sb: 9:00 - 14:00</p>
                  <p>Nd: Zamknięte</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Column 2: Szybkie linki */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair tracking-wide">Szybkie linki</h3>
            <ul className="space-y-2 text-purple-100">
              <li>
                <a href="/" className="hover:text-white hover:underline transition duration-300 flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Strona Główna
                </a>
              </li>
              <li>
                <a href="/uslugi" className="hover:text-white hover:underline transition duration-300 flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Usługi
                </a>
              </li>
              <li>
                <a href="/cennik" className="hover:text-white hover:underline transition duration-300 flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Cennik
                </a>
              </li>
              <li>
                <a href="/galeria" className="hover:text-white hover:underline transition duration-300 flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Galeria
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-white hover:underline transition duration-300 flex items-center">
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3: Metody płatności */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-playfair tracking-wide">Metody płatności</h3>
            <div className="grid grid-cols-2 gap-4 max-w-[280px]">
              <div className="bg-purple-800/50 rounded-xl shadow-md flex items-center justify-center h-[100px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-5">
                <img src="/img/Blik.svg" alt="Blik" className="w-full h-full object-contain" />
              </div>
              <div className="bg-purple-800/50 rounded-xl shadow-md flex items-center justify-center h-[100px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-5">
                <img src="/img/Visa.png" alt="Visa" className="w-full h-full object-contain" />
              </div>
              <div className="bg-purple-800/50 rounded-xl shadow-md flex items-center justify-center h-[100px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-5">
                <img src="/img/Mastercard.png" alt="Mastercard" className="w-full h-full object-contain" />
              </div>
              <div className="bg-purple-800/50 rounded-xl shadow-md flex items-center justify-center h-[100px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer p-5">
                <img src="/img/PayU.png" alt="PayU" className="w-full h-full object-contain" />
              </div>
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