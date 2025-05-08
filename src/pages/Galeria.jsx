import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMap from '../components/ContactMap';
import SEO from '../components/SEO';
import ImageSlider from '../components/ImageSlider'; // Import the new component
import { LazyLoadImage } from 'react-lazy-load-image-component';

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

  // Otwórz zdjęcie w trybie pełnoekranowym
  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Zamknij tryb pełnoekranowy
  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
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

 {/* All Photos Grid Section */}
      <section id="allPhotos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
 <div className="mt-8 text-center">
              <button
                onClick={() => document.getElementById('allPhotos').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md"
              >
                Zobacz wszystkie zdjęcia
              </button>
            </div>
          <ImageSlider 
            imagePaths={images} 
            openModal={openModal} /> {/* Pass images array to ImageSlider */}
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

    </>
  );
};

export default Galeria; 