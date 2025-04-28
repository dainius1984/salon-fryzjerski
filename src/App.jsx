import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import Uslugi from './pages/Uslugi';
import Kontakt from './pages/Kontakt';
import Gallery from './pages/Gallery';
import Cennik from './pages/Cennik';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 