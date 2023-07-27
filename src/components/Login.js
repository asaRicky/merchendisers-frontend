import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [records, setRecords] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords([...records, formData]);
    
    // Handle form submission here
    console.log(formData);

    // You can add your logic to submit the form data to the server or perform any other actions here.
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register Merchandiser</p>
      <p className="message">Register new merchandisers to the company.</p>
      <div className="flex">
        <label>
          <input
            required
            placeholder=""
            type="text"
            className="input"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <span>Firstname</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="text"
            className="input"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input
          required
          placeholder=""
          type="email"
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>Email</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          className="input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>Password</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          className="input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>Confirm password</span>
      </label>

      <button type="submit" className="submit">
        Submit
      </button>

    </form>
  );
}

export default Login;
