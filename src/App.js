import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Route path="/" exact component={Home} /> */}
    </Router>
  );
}

export default App;
