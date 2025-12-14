import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Landing from './pages/Landing';
import DonorRegistration from './pages/DonorRegistration';
import RequestBlood from './pages/RequestBlood';
import DonorSearch from './pages/DonorSearch';
import Events from './pages/Events';
import BloodBanks from './pages/BloodBanks';
import LiveChat from './pages/LiveChat';
import Map from './pages/Map';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<DonorRegistration />} />
            <Route path="/request" element={<RequestBlood />} />
            <Route path="/search" element={<DonorSearch />} />
            <Route path="/events" element={<Events />} />
            <Route path="/banks" element={<BloodBanks />} />
            <Route path="/chat" element={<LiveChat />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;