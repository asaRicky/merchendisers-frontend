import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace 'your_company_email' with the actual email address where you want to receive the feedback
    const emailTo = "NicoleNamayan133@gmail.com";
    const subject = "Feedback from Merch Ltd Website";
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
    `;
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="contact-form border rounded-lg p-4">
      <h2 className="text-center text-2xl font-bold mb-4">
        <Fade top>Contact Us</Fade>
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Use the Fade animation for the form fields */}
        <Fade bottom>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="feedback" className="block mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              rows="6"
            ></textarea>
          </div>
          <Zoom cascade>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold py-2 rounded-lg focus:outline-none shadow-md transition-all"
        >
          Send
        </button>
      </Zoom>

        </Fade>
      </form>
      {/* Additional contact details section */}
      <div className="contact-details mt-6">
        <h3 className="text-center text-xl font-bold">
          <Fade bottom>Contact Details</Fade>
        </h3>
        <Fade bottom>
          <div className="text-center">
            <p>
              <FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />
              <span>
                Address: P.O Box 49377-00100, Nairobi
              </span>
            </p>
            <p>
              <FaPhone className="inline-block mr-2 text-blue-500" />
              <span>Phone: 0796 303 132</span>
            </p>
            <p>
              <FaEnvelope className="inline-block mr-2 text-blue-500" />
              <span>Email: NicoleNamayan133@gmail.com</span>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ContactForm;