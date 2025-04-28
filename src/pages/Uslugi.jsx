import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="p-8">
        <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-playfair font-bold text-center mb-4 text-purple-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const VideoSection = ({ title, videoSrc, description, flipped = false }) => {
  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden shadow-xl my-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-100 to-purple-200"></div>
        )}
        {/* Overlay with blur effect */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:py-20 md:px-12">
        <div className="container mx-auto">
          <div className={`flex flex-col ${flipped ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white drop-shadow-md">{title}</h2>
              <div className="text-white space-y-4 bg-black bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EquipmentSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-16 my-16 rounded-xl">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center text-purple-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Profesjonalny sprzęt
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold text-center mb-4 text-purple-800">Pielęgnica N°501 Premium</h3>
              <p className="text-gray-600 mb-4">Najnowocześniejsze urządzenie do pielęgnacji włosów, wykorzystujące ultradźwięki i podczerwień.</p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-purple-800">Pielęgnica N°501 Premium</h3>
              <p className="text-gray-700 mb-4">
                Pielęgnica do włosów wyglądem przypomina prostownicę. Jednak nie prostuje włosów, ani nie wytwarza ciepła, ale emituje ultradźwięki i podczerwień. Te zaś szybko regenerują włos.
              </p>
              
              <h4 className="text-xl font-playfair font-semibold mb-4 text-purple-700">Cechy używanej przez nas pielęgnicy:</h4>
              
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Profesjonalna pielęgnica do włosów</li>
                <li>Innowacyjne rozwiązanie w dziedzinie pielęgnacji włosów zapewniające lepsze efekty w zdrowszy sposób</li>
                <li>Wyznacza nowy trend w dziedzinie pielęgnacji - kurację na chłodno</li>
                <li>Zmienia strukturę cząsteczek i przemienia wodę w powietrze w temperaturze pokojowej</li>
                <li>Umożliwia dotarcie wody, białek i substancji odżywczych bezpośrednio do kory włosa, bez podgrzewania</li>
                <li>Odbudowa włosów</li>
                <li>Poprawa struktury i elastyczności włosów</li>
                <li>Zamyka pochewkę korzenia i łuskę włosa, co sprawia, że włosy są jedwabiste i lśniące</li>
              </ul>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">10 sekundowy tryb działania</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">Promieniowanie podczerwone</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">Ultradźwiękowe wibracje</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">Szerokość płytki: 25 mm</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">Obrotowy przewód 360°</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-800 font-semibold text-center">Wyświetlacz LCD</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Uslugi = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Fixed navbar */}
      <Navbar />
      
      {/* Hero Section - with padding to prevent overlap with fixed navbar */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white text-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nasze Usługi
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl opacity-90 leading-relaxed text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Profesjonalne usługi fryzjerskie z wykorzystaniem najlepszych produktów i nowoczesnego sprzętu
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Services Overview */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-purple-800">Oferta</h2>
            <p className="text-gray-700 text-lg">
              W naszym salonie oferujemy kompleksowe usługi dla kobiet, mężczyzn i dzieci. 
              Wykorzystujemy wysokiej jakości produkty i nowoczesne technologie, aby zapewnić 
              najlepsze efekty i dbać o zdrowie Twoich włosów.
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard 
              title="Strzyżenie" 
              description="Profesjonalne strzyżenie damskie, męskie i dziecięce. Nasi styliści pomogą dobrać idealną fryzurę do kształtu twarzy i stylu życia."
              icon={<svg className="w-8 h-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121m0 5.758l3-3m-3 3l-1.5 1.5" />
              </svg>}
              delay={0.1}
            />
            
            <ServiceCard 
              title="Koloryzacja" 
              description="Farby włoskie firm FANOLA ORO-THERAPY bez amoniaku, wzbogacone keratyną, drobinkami złota i olejkiem arganowym oraz ALTER EGO - TECHNO FRUIT z keratyną."
              icon={<svg className="w-8 h-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>}
              delay={0.2}
            />
            
            <ServiceCard 
              title="Balejaże i trwała" 
              description="Kolorowe balejaże, które nadadzą włosom objętości i wielowymiarowości. Trwała ondulacja i profesjonalny styling dla wyjątkowego efektu."
              icon={<svg className="w-8 h-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>}
              delay={0.3}
            />
            
            <ServiceCard 
              title="Pielęgnacja" 
              description="Regeneracja włosów botoksem, zabieg olejowania włosów oraz dogłębna pielęgnacja z wykorzystaniem innowacyjnej pielęgnicy N°501 Premium."
              icon={<svg className="w-8 h-8 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>}
              delay={0.4}
            />
          </div>

          {/* Featured Services with Videos */}
          <VideoSection 
            title="Profesjonalne Strzyżenie"
            videoSrc="/videos/haircut.mp4"
            description={
              <div>
                <p>Oferujemy pełen zakres usług strzyżenia dla kobiet, mężczyzn i dzieci. Nasi doświadczeni styliści potrafią:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Dobrać fryzurę idealnie dopasowaną do kształtu twarzy i typu włosów</li>
                  <li>Zrealizować nawet najbardziej wymagające stylizacje</li>
                  <li>Doradzić w zakresie codziennej pielęgnacji i układania włosów</li>
                  <li>Zapewnić komfort i relaks podczas wizyty</li>
                </ul>
                <p className="mt-4">Każde strzyżenie poprzedzamy konsultacją, aby dokładnie zrozumieć Twoje oczekiwania i zaproponować najlepsze rozwiązania.</p>
              </div>
            }
          />

          <VideoSection 
            title="Koloryzacja Najwyższej Jakości"
            videoSrc="/videos/colour.mp4"
            description={
              <div>
                <p>W naszym salonie używamy wyłącznie wysokiej jakości farb włoskich:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><span className="font-semibold">FANOLA ORO-THERAPY</span> - farby bez amoniaku, wzbogacone keratyną, drobinkami złota i olejkiem arganowym, które nie tylko koloryzują, ale również pielęgnują włosy</li>
                  <li><span className="font-semibold">ALTER EGO - TECHNO FRUIT</span> - koloryzacja z dodatkiem keratyny, zapewniająca intensywny i trwały kolor przy jednoczesnej ochronie włosów</li>
                </ul>
                <p className="mt-4">Nasze farby zapewniają doskonałe krycie siwych włosów, trwały i intensywny kolor oraz minimalizują ryzyko podrażnień skóry głowy.</p>
              </div>
            }
            flipped={true}
          />

          <VideoSection 
            title="Balejaże i Stylizacje"
            videoSrc="/videos/highlights.mp4"
            description={
              <div>
                <p>Specjalizujemy się w technikach koloryzacji wielowymiarowej:</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Kolorowe balejaże, które nadają włosom głębię i dynamiczny wygląd</li>
                  <li>Trwała ondulacja dla dodania objętości i wyrazistości</li>
                  <li>Profesjonalny styling na specjalne okazje</li>
                  <li>Nowoczesne techniki koloryzacji, takie jak ombre, sombre, flamboyage</li>
                </ul>
                <p className="mt-4">Nasze techniki koloryzacji są dostosowane do stanu i typu włosów, co pozwala osiągnąć efekt, który nie tylko wygląda pięknie, ale również dba o zdrowie włosów.</p>
              </div>
            }
          />

          {/* Equipment Section */}
          <EquipmentSection />

          {/* CTA Section */}
          <div className="text-center mt-16">
            <motion.h2 
              className="text-3xl font-playfair font-bold mb-6 text-purple-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Zarezerwuj wizytę już dziś
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Skontaktuj się z nami, aby umówić się na wizytę i przekonać się o naszym profesjonalizmie i jakości usług.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/kontakt" 
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Umów wizytę już dziś
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Uslugi; 