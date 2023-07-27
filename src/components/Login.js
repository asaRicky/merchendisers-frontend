import React, { useState } from 'react';

function Register() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add your logic to submit the form data to the server or perform any other actions here.
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>
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

      <p className="signin">
        Already have an account? <a href="./login">Sign in</a>
      </p>
    </form>
  );
}

export default Register;
