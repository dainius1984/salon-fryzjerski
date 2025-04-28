import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Uslugi from './pages/Uslugi';
import Kontakt from './pages/Kontakt';
import Galeria from './pages/Galeria';
import Cennik from './pages/Cennik';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Zatrzymaj wskaźnik ładowania karty po pełnym załadowaniu strony
    window.addEventListener('load', () => {
      if (document.readyState === 'complete') {
        // Jeśli w URL jest fragment, przewiń do niego
        if (window.location.hash) {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) element.scrollIntoView();
        }
        // Wymuś zatrzymanie wskaźnika ładowania
        setTimeout(() => {
          window.stop();
        }, 1000);
      }
    });
    
    // Funkcja do obsługi SameSite cookie issues
    const fixCookieIssues = () => {
      document.cookie = "SameSite=None; Secure; path=/";
    };
    
    fixCookieIssues();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/cennik" element={<Cennik />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={
              <div>
                <h1>404 - Not Found</h1>
                <p>Current path: {window.location.pathname}</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 