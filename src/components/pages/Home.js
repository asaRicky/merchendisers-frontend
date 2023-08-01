import React from 'react';
import homepageImage from './truck-shipment.jpg'; 

function Homepage() {
  return (
    <div className="homepage-container">
      <img
        src={homepageImage}
        alt="Homepage"
        className="homepage-image"
      />
      <h1>Welcome to Our Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel enim et urna tristique efficitur vitae vitae elit. Maecenas vitae neque et eros varius fringilla.
      </p>
      {/* Add more content as needed */}
    </div>
  );
}

export default Homepage;