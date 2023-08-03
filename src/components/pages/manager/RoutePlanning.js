import React, { useState } from 'react';


function RoutePlanning() {
  const [routePlans, setRoutePlans] = useState([]);
  const [merchantName, setMerchantName] = useState('');
  const [date, setDate] = useState('');
  const [outlets, setOutlets] = useState('');
  // Add other necessary state variables for route plan details

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new route plan object with form data
    const newRoutePlan = {
      merchantName,
      date,
      outlets,
      // Add other form fields here
    };

    // Update the route plans state with the new route plan
    setRoutePlans([...routePlans, newRoutePlan]);

    // Clear the form fields after submission
    setMerchantName('');
    setDate('');
    setOutlets('');
    // Clear other form fields here

    // Call a function to send the route plan via email to the merchant
    sendRoutePlanViaEmail(newRoutePlan);
  };

  const handleRoutePlanUpdate = (selectedDate) => {
    // Find the route plan with the selected date in the state
    const updatedRoutePlans = routePlans.map((routePlan) => {
      if (routePlan.date === selectedDate) {
        // Update the route plan as needed (e.g., set it as completed)
        return { ...routePlan, completed: true };
      } else {
        return routePlan;
      }
    });
     // Update the state with the updated route plans
     setRoutePlans(updatedRoutePlans);
    };
  

  const sendRoutePlanViaEmail = (routePlan) => {
    console.log('Sending route plan via email:', routePlan);
  };

  return (
    <div>
      <h2>Route Planning</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Add form fields for merchant selection, date, and other route plan details */}
        <label htmlFor="merchantName">Merchant Name:</label>
        <input type="text" id="merchantName" value={merchantName} onChange={(e) => setMerchantName(e.target.value)} />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

        {/* Add form field for outlets */}
        <label htmlFor="outlets">Outlets:</label>
        <input type="text" id="outlets" value={outlets} onChange={(e) => setOutlets(e.target.value)} />

        {/* Add other form fields here */}
        
        <button type="submit">Assign Route Plan</button>
      </form>

      {/* Display the list of assigned route plans */}
      <h3>Assigned Route Plans:</h3>
     
      <ul>
        {routePlans.map((routePlan, index) => (
          <li key={index}>
            Merchant: {routePlan.merchantName}, Date: {routePlan.date}, Outlets: {routePlan.outlets}
            {/* Display other route plan details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutePlanning;
