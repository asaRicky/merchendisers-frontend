import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Merchants from './components/pages/Merchants';
import Manager from './components/pages/manager/Manager';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/merchants" element={<Merchants/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/contact us" element={<Contact/>}/>

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
