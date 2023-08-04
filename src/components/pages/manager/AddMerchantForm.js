import React, { useState } from "react";

const AddMerchantForm = ({ handleAddMerchant }) => {
  const [newMerchant, setNewMerchant] = useState({
    name: "",
    email: "",
    address: "", // Add address field if needed
  });

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMerchant((prevMerchant) => ({
      ...prevMerchant,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed from the Manager component to add the new merchant
    handleAddMerchant(newMerchant);
    // Clear the form inputs after submission
    setNewMerchant({ name: "", email: "", address: "" });
  };

  return (
    <div>
      <h2>Add Merchant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Merchant Name"
          value={newMerchant.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newMerchant.email}
          onChange={handleChange}
        />
        {/* Add input field for address if needed */}
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newMerchant.address}
          onChange={handleChange}
        />
        <button type="submit">Add Merchant</button>
      </form>
    </div>
  );
};

export default AddMerchantForm;
