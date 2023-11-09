import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Ourvalues from './components/Ourvalues';
import Community from './pages/Community';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <>
        <div className='bg-[#E9EBE7] '>
        <Navbar />
          {/* Other components go here */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About} />
            <Route path="/ourvalues" element={<Ourvalues} /> */}
            <Route path="/community" element={<Community />} />
            {/* <Route path="/newsletter" element={<Newsletter} /> */}
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
