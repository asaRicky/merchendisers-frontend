import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Merchants from './components/Merchants/Merchants';
// import Manager from './components/pages/Manager';
import Login from './components/pages/Login';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/manager" element={<Manager />}/> */}
        <Route path="/merchants" element={<Merchants/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
