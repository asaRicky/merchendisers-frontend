import React from 'react';
import Login from '../Login';
import Merchant from './Mechants';

function Manager() {
  // State variables to manage manager's authentication and user role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  // State variables to store employees' data and new merchant details
  const [employees, setEmployees] = useState([]);
  const [newMerchant, setNewMerchant] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle manager login
  const handleLogin = (authenticatedRole) => {
    setIsLoggedIn(true);
    setUserRole(authenticatedRole);
  };
  // Function to handle adding a new merchant
  const handleAddMerchant = (e) => {
    e.preventDefault();
    // Code to send a request to the backend to add the new merchant goes here
    // CorRECT THE API 
    fetch('/api/addMerchant', {
      method: 'POST',
      body: JSON.stringify(newMerchant),
      headers: {
        'Content-Type': 'application/json',
      },
     })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMessage(`Merchant ${data.firstname} has been added successfully.`);
        setNewMerchant({ firstname: '', lastname: '', email: '' });
      })
      .catch((error) => console.error('Error adding merchant:', error));
  };
// Function to fetch employees' data from the server
useEffect(() => {
  // remember to put the right backend api
  fetch('/api/getEmployees')
    .then((response) => response.json())
    .then((data) => setEmployees(data))
    .catch((error) => console.error('Error fetching employees:', error));
}, []);

  // State variable to store route plan details
  const [routePlan, setRoutePlan] = useState({
    merchantName: '',
    date: '',
    locations: '',
    // Add other fields for the route plan as needed
  });

  // Function to handle route plan submission
  const handleRoutePlanSubmission = (e) => {
    e.preventDefault();
    // Code to send a request to the backend to add the new route plan goes here
    // REMEMBER TO PUT THE CORRECT API
    fetch('/api/addRoutePlan', {
      method: 'POST',
      body: JSON.stringify(routePlan),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or show a success message
        console.log('Route plan submitted successfully:', data);
      })
      .catch((error) => console.error('Error adding route plan:', error));
  };


  return (
    <div>
        {/* <Login /> */}
 {/* If the manager is not logged in, show the Login component */}
 {!isLoggedIn && <Login onLogin={handleLogin} />}

{/* If the manager is logged in, show manager-specific UI */}
{isLoggedIn && userRole === 'manager' && (
  <div>
    <h2>Register Merchant</h2>
    <form onSubmit={handleAddMerchant}>
      <label>
        Firstname:
        <input
          type="text"
          value={newMerchant.firstname}
          onChange={(e) =>
            setNewMerchant({ ...newMerchant, firstname: e.target.value })
          }
        />
            </label>
            <label>
              Lastname:
              <input
                type="text"
                value={newMerchant.lastname}
                onChange={(e) =>
                  setNewMerchant({ ...newMerchant, lastname: e.target.value })
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={newMerchant.email}
                onChange={(e) =>
                  setNewMerchant({ ...newMerchant, email: e.target.value })
                }
              />
            </label>
            <button type="submit">Add Merchant</button>
          </form>
          {successMessage && <p>{successMessage}</p>}

          {/* Display employees' details */}
          <div>
            <h2>Employees Details</h2>
            {employees.map((employee) => (
              <div key={employee.id}>
                <p>Name: {employee.firstname} {employee.lastname}</p>
                <p>Email: {employee.email}</p>
              </div>
            ))}
          </div>

          {/* Show Merchant component to display individual merchant details */}
          <Merchant />
        </div>
      )}
        <div>
    
          <h2>Add Route Plan</h2>
          <form onSubmit={handleRoutePlanSubmission}>
            <label>
              Merchant Name:
              <input
                type="text"
                value={routePlan.merchantName}
                onChange={(e) =>
                  setRoutePlan({ ...routePlan, merchantName: e.target.value })
                }
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={routePlan.date}
                onChange={(e) =>
                  setRoutePlan({ ...routePlan, date: e.target.value })
                }
              />
            </label>
            <label>
              Locations:
              <textarea
                value={routePlan.locations}
                onChange={(e) =>
                  setRoutePlan({ ...routePlan, locations: e.target.value })
                }
              />
            </label>
            <button type="submit">Submit Route Plan</button>
          </form>
        </div>
     
    </div>
  )
}

export default Manager