// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import QualitySection from '../components/QualitySection';
import ContactMap from '../components/ContactMap';

const HomePage = () => {
  return (
    <>
      <Hero />
      <QualitySection />
      <ContactMap />
    </>
  );
};

export default HomePage;