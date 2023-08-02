import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Merchants from './components/pages/Merchants';
import Manager from './components/pages/manager/Manager';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/merchants" element={<Merchants/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
