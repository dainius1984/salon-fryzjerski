import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Galeria = () => {
  console.log('Galeria component rendering');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Generate array of image paths from 1 to 95
  const images = Array.from({ length: 95 }, (_, i) => ({
    id: i + 1,
    path: `/img/haircut/${String(i + 1).padStart(2, '0')}.jpg`
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => setCurrentSlide(next),
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

  return (
    <>
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
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Slider {...settings} className="gallery-slider">
              {images.map((image) => (
                <div key={image.id} className="px-2">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image.path}
                      alt={`Fryzura ${image.id}`}
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
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
              <a
                href="#mapa"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-300 shadow-md"
              >
                <MapPinIcon className="w-5 h-5 mr-2" />
                Gdzie nas znaleźć
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-playfair text-purple-900 mb-8 text-center">
              Lokalizacja Salonu
            </h2>
            <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.5762366053283!2d16.952890776891713!3d51.12624583523275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc275c1091bc1%3A0x6a9f5e7b1bb6d0ee!2zT3NtYcWEY3p5a2EgOEEsIDU0LTA1OCBXcm9jxYJhdw!5e0!3m2!1spl!2spl!4v1710284547744!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom styles for the carousel */}
      <style jsx>{`
        .gallery-slider .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        .gallery-slider .slick-center {
          opacity: 1;
        }
        .gallery-slider .slick-dots li button:before {
          color: #7e22ce;
        }
        .gallery-slider .slick-dots li.slick-active button:before {
          color: #7e22ce;
        }
      `}</style>
    </>
  );
};

export default Galeria; 