import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import Home from './pages/Home';  
import About from './pages/About';
import Usluge from './pages/Usluge';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <VideoBackground />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onama" element={<About />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
