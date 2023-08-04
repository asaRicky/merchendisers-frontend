import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import Merchants from './components/pages/Merchants';
import Manager from './components/pages/manager/Manager';

import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/merchants" element={<Mechants/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
