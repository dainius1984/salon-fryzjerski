// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import QualitySection from '../components/QualitySection';
import ContactMap from '../components/ContactMap';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  console.log('Homepage component rendering');
  return (
    <>
      <SEO 
        title="Salon Fryzjerski u Małgosi - Profesjonalne Usługi Fryzjerskie we Wrocławiu"
        description="Salon fryzjerski oferujący pełen zakres usług fryzjerskich dla pań, panów i dzieci we Wrocławiu. Profesjonalne strzyżenie, koloryzacja i stylizacja włosów."
        url="/"
        canonical="/"
      />
      <Hero />
      <QualitySection />
      <ContactMap />
      <Footer />
    </>
  );
};

export default HomePage;