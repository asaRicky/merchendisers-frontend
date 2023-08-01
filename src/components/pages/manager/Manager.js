import React, { useState } from 'react';
import Merchant from '../Mechants';
import RoutePlanning from './RoutePlanning';
import Reports from './Reports';
// import GPSTracking from './GPSTracking';
import Settings from './Settings';
// import Attendance from './Attendance';
// import Email from './Email';
import './Manager.css';

function Manager() {
  // ... Your existing state and functions ...
  
 // State variables to store employees' data and new merchant details
  // const [employees, setEmployees] = useState([]);
  // const [newMerchant, setNewMerchant] = useState({
  //   firstname: '',
  //   lastname: '',
  //   email: '',
  // });
  // const [successMessage, setSuccessMessage] = useState('');

   // Function to handle adding a new merchant
  // const handleAddMerchant = (e) => {
  //   e.preventDefault();
  //   // Code to send a request to the backend to add the new merchant goes here
  //   // CorRECT THE API 
  //   fetch('/api/addMerchant', {
  //     method: 'POST',
  //     body: JSON.stringify(newMerchant),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //    })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSuccessMessage(`Merchant ${data.firstname} has been added successfully.`);
  //       setNewMerchant({ firstname: '', lastname: '', email: '' });
  //     })
  //     .catch((error) => console.error('Error adding merchant:', error));
  // };

  // Function to fetch employees' data from the server
// useEffect(() => {
//   // remember to put the right backend api
//   fetch('/api/getMerchants')
//     .then((response) => response.json())
//     .then((data) => setMerchants(data))
//     .catch((error) => console.error('Error fetching merchants:', error));
// }, []);

  // // State variable to store route plan details
  // const [routePlan, setRoutePlan] = useState({
  //   merchantName: '',
  //   date: '',
  //   locations: '',
  //   // Add other fields for the route plan as needed
  // });

  //   // Function to handle route plan submission
  // const handleRoutePlanSubmission = (e) => {
  //   e.preventDefault();
  //   // Code to send a request to the backend to add the new route plan goes here
  //   // REMEMBER TO PUT THE CORRECT API
  //   fetch('/api/addroute-plans', {
  //     method: 'POST',
  //     body: JSON.stringify(routePlan),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle success or show a success message
  //       console.log('Route plan submitted successfully:', data);
  //     })
  //     .catch((error) => console.error('Error adding route plan:', error));
  // };


  // State variable to store the active feature to be displayed
  const [activeFeature, setActiveFeature] = useState('dashboard');

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
            {/* <button onClick={() => handleFeatureSelect('gpsTracking')}>GPS Tracking</button> */}
            <button onClick={() => handleFeatureSelect('settings')}>Settings</button>
            {/* <button onClick={() => handleFeatureSelect('attendance')}>Attendance</button>
            <button onClick={() => handleFeatureSelect('email')}>Email</button> */}
          </div>
        );
      case 'routePlanning':
        return <RoutePlanning />;
      case 'reports':
        return <Reports />;
      // case 'gpsTracking':
      //   return <GPSTracking />;
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
     (
        <div className="dashboard-and-background-container">
          <div className="background-container">
            {/* Your customized background elements go here */}
            {/* For example, you can add an image carousel or a weekly reports graph */}
          </div>
          {renderActiveFeature()}
          {/* Rest of your manager-specific UI */}
          {/* Show Merchant component to display individual merchant details */}
          <Merchant />
        </div>
      )
    </div>
  );
}

export default Manager;
