import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Link, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Link>
         <Route path='/' exact component={Home} />
      </Link>
    </Router>
  );
}

export default App;
