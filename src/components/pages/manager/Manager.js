import React, { useState } from 'react';
import Merchant from '../Merchants';
import RoutePlanning from './RoutePlanning';
import Reports from './Reports';
import Settings from './Settings';
import Sidebar from './scenes/Sidebar';
import AddMerchantForm from "./AddMerchantForm"; 
// import Attendance from './Attendance';
import './Manager.css';

function Manager() {
 
  // // State variable to store the active feature to be displayed
  const [activeFeature, setActiveFeature] = useState('sidebar');
  const [successMessage, setSuccessMessage] = useState("");
  
  // const [merchants, setMerchants] = useState([]);

  const handleAddMerchant = (newMerchant) => {
    // Code to add the new merchant goes here
    // You can perform any API call or state update to add the new merchant to the system
    // For now, we just set a success message to indicate that the merchant was added
    setSuccessMessage(`Merchant ${newMerchant.name} added successfully.`);
  };

  // Function to handle adding a new merchant
  // const handleAddMerchant = (newMerchant) => {
  //   // Update the list of merchants
  //   setMerchants((prevMerchants) => [...prevMerchants, newMerchant]);
  // };

  // Function to handle feature selection
  const handleFeatureSelect = (feature) => {
    setActiveFeature(feature);
  };

  // Render the active feature based on user selection
  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'sidebar':
        return (
          <div className="sidebar-container">
            {/* Render Manager's dashboard with buttons to select features */}
            <h2>Manager's Dashboard</h2>
            <button onClick={() => handleFeatureSelect('routePlanning')}>Route Planning</button>
            <button onClick={() => handleFeatureSelect('reports')}>Reports</button>
            <button onClick={() => handleFeatureSelect('settings')}>Settings</button>
            {/* <button onClick={() => handleFeatureSelect('attendance')}>Attendance</button>
            <button onClick={() => handleFeatureSelect('email')}>Email</button> */}
          </div>
        );
      case 'routePlanning':
        return <RoutePlanning />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      // case 'attendance':
      //   return <Attendance />;
      // case 'email':
      //   return <Email />;
      default:
        return null;
    }
  };

  return (
    <div className="manager-page">
    
        <div className="dashboard-and-background-container">
         <Sidebar
         handleAddMerchant={handleAddMerchant} // Pass the function to the Sidebar component
        />
            {/* Your customized background elements go here */}
            {/* For example, you can add an image carousel or a weekly reports graph */}
          {renderActiveFeature()}
          {/* Rest of your manager-specific UI */}
          {/* Show Merchant component to display individual merchant details */}
          <Merchant />
          {successMessage && <p>{successMessage}</p>}
          <AddMerchantForm />
        </div>
      
    </div>
  );
}

export default Manager;
