import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home';  
import About from './pages/About';
import Usluge from './pages/Usluge';
import Contact from './pages/Contact';
import Galerija from './pages/Galerija';
import Oprema from './pages/Oprema';
import Reference from './pages/Reference';


function App() {
  return (
    <LanguageProvider>
      <Router>
        <VideoBackground />
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onama" element={<About />} />
            <Route path="/oprema" element={<Oprema />} />
            <Route path="/usluge" element={<Usluge />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/reference" element={<Reference />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
