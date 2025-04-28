import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Uslugi from './pages/Uslugi';
import Kontakt from './pages/Kontakt';
import Cennik from './pages/Cennik';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/cennik" element={<Cennik />} />
        {/* Add more routes as they are developed */}
        <Route path="*" element={<HomePage />} /> {/* Fallback for non-existent routes */}
      </Routes>
    </Router>
  );
}

export default App;