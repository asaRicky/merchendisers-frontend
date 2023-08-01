import React, { useState } from 'react';

function RoutePlanning() {
  const [routePlans, setRoutePlans] = useState([]);
  const [merchantName, setMerchantName] = useState('');
  const [date, setDate] = useState('');
  // Add other necessary state variables for route plan details

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new route plan object with form data
    const newRoutePlan = {
      merchantName,
      date,
      // Add other form fields here
    };

    // Update the route plans state with the new route plan
    setRoutePlans([...routePlans, newRoutePlan]);

    // Clear the form fields after submission
    setMerchantName('');
    setDate('');
    // Clear other form fields here

    // Call a function to send the route plan via email to the merchant
    sendRoutePlanViaEmail(newRoutePlan);
  };

  const sendRoutePlanViaEmail = (routePlan) => {
    // Implement the logic to send the route plan via email to the merchant
    // You'll need to call a backend API to handle email sending
    // You can use a library like Nodemailer in the backend for email sending
    // The backend will need access to merchant email addresses
    // You can use a separate API endpoint to handle email sending and provide it with necessary data
    // For demonstration purposes, let's just log the route plan to the console
    // Make an HTTP POST request to the backend API
  // fetch('/api/sendRoutePlanEmail', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(routePlan),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //       // If the response is successful, the email has been sent successfully
  //       console.log('Route plan sent via email:', routePlan);
  //     } else {
  //       // If the response is not successful, handle the error
  //       console.error('Failed to send route plan via email.');
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error sending route plan via email:', error);
  //   });
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

        {/* Add other form fields here */}
        
        <button type="submit">Assign Route Plan</button>
      </form>

      {/* Display the list of assigned route plans */}
      <h3>Assigned Route Plans:</h3>
      <ul>
        {routePlans.map((routePlan, index) => (
          <li key={index}>
            Merchant: {routePlan.merchantName}, Date: {routePlan.date}
            {/* Display other route plan details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutePlanning;
