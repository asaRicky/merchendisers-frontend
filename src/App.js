import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Mechants from './components/pages/Mechants';
import Manager from './components/pages/Manager';
import SignUp from './components/pages/Signup';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/manager" element={<Manager />}/>
        <Route path="/merchants" element={<Mechants/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
