import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Register from './components/pages/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
