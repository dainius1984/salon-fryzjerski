import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Statyczne tło jako fallback/wsparcie dla wideo */}
      <div className="absolute inset-0 bg-gray-900"></div>
      
      {/* Zoptymalizowane wideo - niższa jakość dla lepszej wydajności */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster="/images/fallback-poster.jpg"
      >
        <source src="/videos/salon-compilation.mp4" type="video/mp4" />
      </video>

      {/* Ciemniejsza nakładka - tylko jedna warstwa */}
      <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

      {/* Navbar z przezroczystym tłem */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar transparent={true} />
      </div>

      {/* Zawartość główna - uproszczona struktura */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Zmień z Nami Swój Styl
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-white drop-shadow-lg max-w-2xl mx-auto">
            Odkryj nową siebie dzięki profesjonalnym usługom fryzjerskim. 
            Twoje włosy zasługują na wyjątkową opiekę i świeże spojrzenie.
          </p>
          
          {/* Przyciski CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/uslugi" className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
              Sprawdź nasze usługi
            </Link>
            <Link to="/kontakt" className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
              Umów wizytę już dziś
            </Link>
          </div>
        </div>
      </div>

      {/* Wskaźnik przewijania - uproszczony dla zmniejszenia obciążenia */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 