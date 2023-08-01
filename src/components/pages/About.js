import React from 'react';
import merchandisersImage from './456.png';
import Footer from '../Footer';


function About() {
  return (
    <div className="about-container">
      <h1>About Our Merchandisers Company</h1>
      <img
        src={merchandisersImage}
        alt="Merchandisers Company"
        className="about-image"
      />
      <p>
        Welcome to our merchandisers company! We are a dedicated team of professionals committed to providing top-notch merchandising solutions to our clients.
      </p>
      <Footer/>
      {/* Add more text content as needed */}
    </div>
  );
}

export default About;
