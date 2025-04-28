import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMap from '../components/ContactMap';
import SEO from '../components/SEO';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  // Generate array of image paths from 1 to 95
  const images = Array.from({ length: 95 }, (_, i) => ({
    id: i + 1,
    path: `/img/haircut/${String(i + 1).padStart(2, '0')}.jpg`
  }));

  // Go to previous slide
  const goPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Go to next slide
  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false, // Usunięcie kropek
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    arrows: false, // Usunięcie domyślnych strzałek, dodajemy własne
    swipe: true, // Włączenie obsługi przeciągania na urządzeniach mobilnych
    swipeToSlide: true, // Umożliwienie przewijania do konkretnego slajdu przeciąganiem
    touchMove: true, // Włączenie ruchu dotykowego
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
        }
      }
    ]
  };

  // Otwórz zdjęcie w trybie pełnoekranowym
  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Zamknij tryb pełnoekranowy
  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  // Pokaż wszystkie zdjęcia w siatce - mniejsze zdjęcia w siatce
  const allImages = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 my-8">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="aspect-[3/4] rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
          onClick={() => openModal(image)}
        >
          <LazyLoadImage
            src={image.path}
            alt={`Fryzura ${image.id}`}
            effect="blur"
            className="w-full h-full object-cover"
            threshold={300}
            placeholderSrc="/img/placeholder.jpg"
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SEO 
        title="Galeria Fryzur - Salon Fryzjerski u Małgosi we Wrocławiu"
        description="Zobacz nasze najlepsze realizacje fryzur. Metamorfozy, strzyżenia, koloryzacje i stylizacje wykonane w Salonie Fryzjerskim u Małgosi we Wrocławiu."
        keywords="galeria fryzur, fryzury Wrocław, metamorfozy fryzur, koloryzacja włosów, strzyżenie damskie, fryzury męskie"
        url="/galeria"
        canonical="/galeria"
        type="article"
      />
      <Navbar />
      
      {/* Hero Section - with padding to prevent overlap with fixed navbar */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair text-center mb-6">
              Nasza Galeria
            </h1>
            <p className="text-lg text-center text-purple-200 max-w-2xl mx-auto">
              Odkryj nasze najlepsze fryzury i metamorfozy. Każde zdjęcie opowiada historię zadowolonego klienta i naszej pasji do fryzjerstwa.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto relative px-8 md:px-16">
            {/* Strzałka w lewo */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white rounded-full p-2 shadow-lg hover:bg-purple-700 transition-colors"
              onClick={goPrev}
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            
            <Slider ref={sliderRef} {...settings} className="gallery-slider">
              {images.map((image) => (
                <div key={image.id} className="px-2">
                  <div 
                    className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <LazyLoadImage
                      src={image.path}
                      alt={`Fryzura ${image.id}`}
                      effect="blur"
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      threshold={300}
                      placeholderSrc="/img/placeholder.jpg"
                    />
                    <div className="absolute inset-0 bg-purple-900 bg-opacity-0 hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            
            {/* Strzałka w prawo */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600 text-white rounded-full p-2 shadow-lg hover:bg-purple-700 transition-colors"
              onClick={goNext}
              aria-label="Następne zdjęcie"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            
            <div className="mt-8 text-center">
              <button
                onClick={() => document.getElementById('allPhotos').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
              >
                Zobacz wszystkie zdjęcia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Photos Grid Section */}
      <section id="allPhotos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-purple-900 mb-6 text-center">
            Wszystkie nasze realizacje
          </h2>
          {allImages()}
        </div>
      </section>

      {/* Description and Buttons Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair text-purple-900 mb-6">
              Profesjonalne Usługi Fryzjerskie
            </h2>
            <p className="text-lg text-purple-700 mb-8">
              W naszym salonie każda fryzura to dzieło sztuki. Nasz zespół profesjonalistów 
              dba o najwyższą jakość usług i zadowolenie każdego klienta. Wykorzystujemy 
              najnowsze trendy i techniki fryzjerskie, aby spełnić Twoje oczekiwania.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Umów Wizytę
              </Link>
              <button
                onClick={() => document.getElementById('mapSection').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-300 shadow-md"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Gdzie nas znaleźć
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - użycie komponentu ContactMap */}
      <section id="mapSection" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair text-purple-900 mb-8 text-center">
              Lokalizacja Salonu
            </h2>
            <ContactMap />
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal do wyświetlania zdjęć w pełnym ekranie */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <button 
              className="absolute top-4 right-4 text-white bg-purple-600 rounded-full p-2 hover:bg-purple-700 focus:outline-none"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <LazyLoadImage 
              src={modalImage.path} 
              alt={`Fryzura ${modalImage.id}`} 
              className="w-full h-auto object-contain max-h-[80vh]"
              effect="blur"
              threshold={300}
              placeholderSrc="/img/placeholder.jpg"
            />
            <div className="flex justify-between mt-4">
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex = (modalImage.id - 2 + images.length) % images.length;
                  setModalImage(images[prevIndex]);
                }}
              >
                Poprzednie
              </button>
              <span className="text-white text-lg">
                {modalImage.id} / {images.length}
              </span>
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex = modalImage.id % images.length;
                  setModalImage(images[nextIndex]);
                }}
              >
                Następne
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom styles for the carousel */}
      <style jsx>{`
        .gallery-slider .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .gallery-slider .slick-center {
          opacity: 1;
        }
        /* Usunięcie stylów dla kropek, ponieważ kropki są wyłączone */
      `}</style>
    </>
  );
};

export default Galeria; 