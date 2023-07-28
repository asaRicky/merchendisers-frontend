import React from 'react';
import Login from '../Login';

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
    // For example:
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
  // Code to fetch employees' data from the backend API goes here
  // Upon successful retrieval, update the employees state with the data
  // For example:
  fetch('/api/getEmployees')
    .then((response) => response.json())
    .then((data) => setEmployees(data))
    .catch((error) => console.error('Error fetching employees:', error));
}, []);


  return (
    <div>
        <Login />
    </div>
  )
}

export default Manager