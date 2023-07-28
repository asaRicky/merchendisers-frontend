import React, { useState, useEffect } from 'react';

function Merchant() {
  // State variables to store route plans, check-in/out status, and report
  const [routePlans, setRoutePlans] = useState([]);
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);
  const [report, setReport] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  useEffect(() => {
    // Fetch route plans on component mount
    fetchRoutePlans();
  }, []);

  // Function to fetch route plans from the server
  const fetchRoutePlans = () => {
    // Assuming you have an API endpoint to fetch the route plans
    fetch('/api/route-plans')
      .then((response) => response.json())
      .then((data) => setRoutePlans(data))
      .catch((error) => console.error('Error fetching route plans:', error));
  };

  // Function to handle check-in
  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  // Function to handle check-out
  const handleCheckOut = () => {
    setCheckedOut(true);
  };

  // Function to handle report submission
  const handleSubmitReport = (e) => {
    e.preventDefault();
    console.log('Report submitted:', report);
  };

  // Function to handle report text change
  const handleReportChange = (e) => {
    const { value } = e.target;
    setReport(value);
  };

  // Function to handle check-in time input change
  const handleCheckInTimeChange = (e) => {
    const { value } = e.target;
    setCheckInTime(value);
  };

  // Function to handle check-out time input change
  const handleCheckOutTimeChange = (e) => {
    const { value } = e.target;
    setCheckOutTime(value);
  };

  return (
    <div className="merchant-container">
      <h2>Route Plans</h2>
      {routePlans.map((plan) => (
        <div className="merchant-route-plan" key={plan.id}>
          {/* Render plan details here */}
        </div>
      ))}
      
      <h2>Check-in/Check-out</h2>
      {!checkedIn ? (
        <>
          <input
            type="time"
            value={checkInTime}
            onChange={handleCheckInTimeChange}
            className="merchant-time-input"
          />
          <button onClick={handleCheckIn} disable={checkedIn}className="merchant-check-btn">
            Check-in Morning
          </button>
        </>
      ) : (
        <>
          <input
            type="time"
            value={checkOutTime}
            onChange={handleCheckOutTimeChange}
            className="merchant-time-input"
          />
          <button onClick={handleCheckOut} disable={checkedOut}className="merchant-check-btn">
            Check-out Evening
          </button>
        </>
      )}

      {/* Report */}
      <h2>Write Report</h2>
      <form onSubmit={handleSubmitReport} className="merchant-report">
        <div className="coolinput">
          <label htmlFor="input" className="text">
            Report:
          </label>
          <textarea
            value={report}
            onChange={handleReportChange}
            placeholder="Write your report here..."
            className="input"
          />
        </div>
        <button type="submit" className="merchant-submit-btn">
          Submit Report
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="white"
              strokeWidth="2"
            ></circle>
            <path
              d="M8 13.5C7.44772 13.5 7 13.9477 7 14.5C7 15.0523 7.44772 15.5 8 15.5V13.5ZM13.5 8C13.5 7.44772 13.0523 7 12.5 7C11.9477 7 11.5 7.44772 11.5 8H13.5ZM12.5 13C13.0523 13 13.5 13.4477 13.5 14C13.5 14.5523 13.0523 15 12.5 15C11.9477 15 11.5 14.5523 11.5 14V12H12.5ZM7 12V14H8V12H7ZM7 8H8V10H7V8ZM10 7V8H12V7H10ZM14 8V10H15V8H14ZM15 12H14V14H15V12ZM14 12V8H13V12H14ZM10 14V12H9V14H10Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </form>

      {/* Google Maps */}
      <div
        id="map"
        style={{ width: '100%', height: '400px', marginTop: '20px' }}
      ></div>
    </div>
  );
}

export default Merchant;
