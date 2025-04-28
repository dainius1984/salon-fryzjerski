import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMap from '../components/ContactMap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const priceList = [
  { service: 'Strzyżenie męskie', price: '50 zł' },
  { service: 'Strzyżenie dziecięce', price: 'od 35 do 45 zł' },
  { service: 'Strzyżenie damskie', price: 'od 55 do 100 zł' },
  { service: 'Farba', price: 'od 130 do 250 zł' },
  { service: 'Balejaż', price: 'od 150 do 280 zł' },
  { service: 'Pielęgnacja', price: 'od 100 do 150 zł' },
  { service: 'Trwała', price: 'od 120 do 200 zł' },
];

const Cennik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="pt-28 pb-10 md:pt-36 md:pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 text-purple-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cennik
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90 leading-relaxed text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sprawdź nasze aktualne ceny usług fryzjerskich. Dbamy o przejrzystość i najwyższą jakość obsługi!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ul className="divide-y divide-purple-100">
              {priceList.map((item, idx) => (
                <li key={item.service} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-2">
                  <span className="font-medium text-lg text-gray-800">{item.service}</span>
                  <span className="text-purple-700 font-bold text-lg md:text-xl">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-gray-700 text-base md:text-lg bg-purple-50 rounded-lg p-4">
              Na wyposażeniu posiadamy <span className="font-semibold text-purple-800">lokownicę do loków</span> i <span className="font-semibold text-purple-800">pielęgnicę do regeneracji włosów za pomocą fal ultradźwiękowych</span>.
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <Link
              to="/galeria"
              className="inline-block bg-white border-4 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-bold py-4 px-10 rounded-full transition duration-300 text-xl shadow-lg tracking-wide uppercase"
              style={{ minWidth: '220px', letterSpacing: '0.05em' }}
            >
              Zobacz galerię
            </Link>
            <Link
              to="/kontakt"
              className="inline-block bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-xl shadow-lg tracking-wide uppercase"
              style={{ minWidth: '220px', letterSpacing: '0.05em' }}
            >
              Umów wizytę
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section - full width */}
      <section className="py-10 bg-gray-50">
        <div className="w-full max-w-full px-0">
          <div className="mx-auto" style={{ maxWidth: '100vw' }}>
            <ContactMap />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cennik; 