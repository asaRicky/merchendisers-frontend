import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Mechants from './components/pages/Mechants';
import Manager from './components/pages/Manager';
import SignUp from './components/pages/Signup';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="about" element={<About />}/>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/merchants" element={<Mechants/>}/>
        <Route path="/signup" element={<SignUp/>}/>

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
