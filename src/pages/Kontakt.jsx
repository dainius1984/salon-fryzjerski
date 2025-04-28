import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <motion.div 
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-purple-800 text-center">
        Dane kontaktowe
      </h3>
      
      <div className="space-y-5 mx-auto">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-700 mb-1">Adres</h4>
            <p className="text-gray-600">Salon Fryzjerski "U Małgosi"</p>
            <p className="text-gray-600">ul. Osmańczyka 8 A</p>
            <p className="text-gray-600">54-058 Wrocław</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-700 mb-1">Telefon</h4>
            <a href="tel:+48539919065" className="text-purple-600 hover:text-purple-800 transition-colors">
              +48 539 919 065
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-700 mb-1">Godziny otwarcia</h4>
            <p className="text-gray-600">Poniedziałek - Piątek: 10:00 - 18:00</p>
            <p className="text-gray-600">Sobota: 9:00 - 14:00</p>
            <p className="text-gray-600">Niedziela: Zamknięte</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-700 mb-1">Social Media</h4>
            <a 
              href="https://www.facebook.com/FryzjerkaMalgosia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="tel:+48539919065" 
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Zadzwoń teraz
        </a>
      </div>
    </motion.div>
  );
};

const LocationSection = () => {
  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-purple-800 text-center">
        Jak do nas trafić
      </h3>
      
      <div className="mb-5 aspect-video rounded-lg overflow-hidden shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0761270182253!2d16.953019776927796!3d51.0915542430224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26e2df42afb%3A0xf8eba71141e507f1!2sOsma%C5%84czyka%208A%2C%2054-058%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1719239531018!5m2!1spl!2spl"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokalizacja salonu U Małgosi"
          className="w-full h-full min-h-[250px] md:min-h-[300px]"
        ></iframe>
      </div>
      
      <div className="max-w-lg mx-auto">
        <h4 className="text-lg font-bold text-gray-700 mb-4 text-center">Jak dojechać:</h4>
        <ul className="space-y-3">
          <li className="flex items-start bg-purple-50 p-3 rounded-lg">
            <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-purple-600 rounded-full text-white font-bold mr-3">1</span>
            <span className="text-gray-700">Znajdujemy się na ul. Osmańczyka 8A w zachodniej części Wrocławia</span>
          </li>
          <li className="flex items-start bg-purple-50 p-3 rounded-lg">
            <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-purple-600 rounded-full text-white font-bold mr-3">2</span>
            <span className="text-gray-700">Jesteśmy dobrze skomunikowani z centrum miasta - dojedziesz do nas autobusami linii 109, 129 i 609</span>
          </li>
          <li className="flex items-start bg-purple-50 p-3 rounded-lg">
            <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 bg-purple-600 rounded-full text-white font-bold mr-3">3</span>
            <span className="text-gray-700">W pobliżu znajduje się bezpłatny parking dla naszych klientów</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

const Kontakt = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-10 md:pt-36 md:pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-purple-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kontakt
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Zapraszamy do kontaktu z nami
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info & Location Section */}
      <section className="py-10 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Location Section - 3/5 width */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <LocationSection />
            </div>
            
            {/* Contact Info - 2/5 width */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Kontakt; 