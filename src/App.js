import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Mechants from './components/pages/Mechants';
import Manager from './components/pages/Manager';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/merchants" element={<Mechants/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact us" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
