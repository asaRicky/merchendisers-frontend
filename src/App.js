import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Merchants from './components/pages/Merchants';
import Manager from './components/pages/manager/Manager';
import RoutePlanning from './components/pages/manager/RoutePlanning';
import Attendance from './components/pages/manager/Attendance';
import Reports from './components/pages/manager/Reports';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/manager/*" element={<Manager />}>
          {/* Nested routes for the Manager component */}
          <Route index element={<RoutePlanning />} />
          <Route path="route-planning" element={<RoutePlanning />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="reports" element={<Reports />} />
          {/* Add more nested routes for other features */}
        </Route>
        <Route path="/merchants" element={<Merchants />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
