// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import QualitySection from '../components/QualitySection';
import ContactMap from '../components/ContactMap';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <QualitySection />
      <ContactMap />
      <Footer />
    </>
  );
};

export default HomePage;