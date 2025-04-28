import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import Uslugi from './pages/Uslugi';
import Kontakt from './pages/Kontakt';
import Galeria from './pages/Galeria';
import Cennik from './pages/Cennik';

// Wrapper component to log route changes
const RouteLogger = ({ children }) => {
  const location = useLocation();
  console.log('Current route:', location.pathname);
  return children;
};

function App() {
  console.log('App component rendering');
  
  return (
    <Router>
      <RouteLogger>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/uslugi" element={<Uslugi />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route path="/galeria" element={
                <>
                  {console.log('Rendering Galeria route')}
                  <Galeria />
                </>
              } />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="*" element={
                <div>
                  {console.log('404 - Route not found')}
                  <h1>404 - Not Found</h1>
                  <p>Current path: {window.location.pathname}</p>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </RouteLogger>
    </Router>
  );
}

export default App; 