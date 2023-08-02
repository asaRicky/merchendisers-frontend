import React, { useState } from 'react';
import Merchant from '../Merchants';
import RoutePlanning from './RoutePlanning';
import Reports from './Reports';
import Settings from './Settings';
// import Dashboard from './Dashboard';
// import Attendance from './Attendance';
import './Manager.css';

function Manager() {
 

  // // State variable to store the active feature to be displayed
  const [activeFeature, setActiveFeature] = useState('dashboard');
  // const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  // Array of report images (replace with your actual report images)
  // const reportImages = [
  //   'report_image_1.jpg',
  //   'report_image_2.jpg',
  //   'report_image_3.jpg',
  //   // Add more report images here
  // ];

  // Function to change the background image every 10 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % reportImages.length);
  //   }, 10000);
  
  //   return () => clearInterval(interval);
  // }, [reportImages.length]); // Add reportImages.length as a dependency
  
  
  // Function to handle feature selection
  const handleFeatureSelect = (feature) => {
    setActiveFeature(feature);
  };

  // Render the active feature based on user selection
  const renderActiveFeature = () => {
    switch (activeFeature) {
      case 'dashboard':
        return (
          <div className="dashboard-container">
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
          <div className="background-container"
            //  style={{
            //   backgroundImage: `url(${reportImages[backgroundImageIndex]})`,
            // }}
          >
            {/* Your customized background elements go here */}
            {/* For example, you can add an image carousel or a weekly reports graph */}
          </div>
          {renderActiveFeature()}
          {/* Rest of your manager-specific UI */}
          {/* Show Merchant component to display individual merchant details */}
          <Merchant />
          {/* <Dashboard /> */}
        </div>
      
    </div>
  );
}

export default Manager;
