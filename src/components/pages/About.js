import React from 'react';
import merchandisersImage from './456.png';

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

      <h2>Core Values</h2>
      <ul>
        <li>Customer Satisfaction: Our clients' needs and satisfaction are our top priorities.</li>
        <li>Innovation: Embracing innovation to create unique and effective merchandising strategies.</li>
        <li>Integrity: Conducting business with honesty, transparency, and ethical practices.</li>
        <li>Teamwork: Collaborating as a team to achieve the best results for our clients and partners.</li>
        <li>Excellence: Striving for excellence in every aspect of our work.</li>
      </ul>

      <h2>Our Services</h2>
      <p>
        At our company, we offer a wide range of merchandising services tailored to suit the specific needs of each client. Our services include product placement and displays, retail store optimization, market research, inventory management, and more.
      </p>

      <h2>Why Choose Us?</h2>
      <p>
        - Expertise: Our team consists of experienced and knowledgeable merchandisers.
      </p>
      <p>
        - Customization: We tailor our strategies to meet the unique requirements of your business.
      </p>
      <p>
        - Results-driven: We focus on delivering measurable results and increasing sales for our clients.
      </p>
      <p>
        - Client-Centric: Our clients' success and satisfaction are at the heart of everything we do.
      </p>
      {/* Add more text content as needed */}
    </div>
  );
}

export default About;
