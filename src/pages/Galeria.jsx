import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMap from '../components/ContactMap';
import SEO from '../components/SEO';
import ImageSlider from '../components/ImageSlider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Galeria = () => {
  const [modalImage, setModalImage] = useState(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sliderRef = useRef(null);

  // Initialize images and preload the first few when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Galeria component mounted");

    // Generate array of image paths from 1 to 95
    const imageArray = Array.from({ length: 95 }, (_, i) => {
      const id = i + 1;
      const filename = String(id).padStart(2, '0');
      return {
        id,
        path: `/img/haircut/${filename}.jpg`
      };
    });
    
    setImages(imageArray);
    
    // Preload first 3 images for better initial load experience
    const preloadImages = imageArray.slice(0, 3).map(image => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.path;
        img.onload = () => resolve();
        img.onerror = () => {
          console.error(`Failed to load image: ${image.path}`);
          resolve();
        };
      });
    });
    
    Promise.all(preloadImages)
      .then(() => {
        setImagesLoaded(true);
        console.log("Initial images preloaded");
      })
      .catch(error => {
        console.error("Error preloading images:", error);
        // Even if there's an error, set images as loaded to prevent infinite loading state
        setImagesLoaded(true);
      });
  }, []);

  // Navigation functions for slider
  const goPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Open fullscreen image view
  const openModal = (image) => {
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close fullscreen image view
  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  // Display all images in grid
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
            visibleByDefault={image.id <= 3} // Immediately show first 3 images
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
      
      {/* Hero Section with Integrated Slider */}
      <section className="pt-28 pb-4 md:pt-32 md:pb-6 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-playfair text-center mb-3">
              Nasza Galeria
            </h1>
            <p className="text-base md:text-lg text-center text-purple-200 max-w-2xl mx-auto mb-4">
              Odkryj nasze najlepsze fryzury i metamorfozy. Każde zdjęcie opowiada historię zadowolonego klienta i naszej pasji do fryzjerstwa.
            </p>
          </div>

          {imagesLoaded && images.length > 0 ? (
            <div className="max-w-5xl mx-auto">
              <ImageSlider 
                ref={sliderRef}
                imagePaths={images} 
                openModal={openModal}
              />
            </div>
          ) : (
            <div className="flex justify-center items-center h-48 mt-4">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          <div className="mt-6 mb-2 text-center">
            <button
              onClick={() => document.getElementById('allPhotos').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg font-medium text-lg"
            >
              Zobacz wszystkie zdjęcia
            </button>
          </div>
        </div>
      </section>

      {/* All Photos Grid Section */}
      <section id="allPhotos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair text-purple-900 mb-6 text-center">
            Wszystkie nasze realizacje
          </h2>
          {imagesLoaded ? allImages() : (
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            </div>
          )}
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

      {/* Map Section */}
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

      {/* Modal for fullscreen images */}
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
            <img 
              src={modalImage.path} 
              alt={`Fryzura ${modalImage.id}`} 
              className="w-full h-auto object-contain max-h-[80vh]"
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