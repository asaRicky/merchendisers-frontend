import { FaceRetouchingNatural } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';


const AttendancePage = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch attendance data from the backend
  useEffect(() => {
    FaceRetouchingNatural.get('/api/attendance') // Replace this with your actual backend API endpoint for fetching attendance data
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching attendance data:', error);
      });
  }, []);

  // Function to handle merchant check-in and check-out
  const handleCheckInOut = (merchantName, action) => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();

    // Prepare the data to be sent to the backend
    const newData = {
      merchantName,
      action,
      date: currentDate.toDateString(),
      time: currentTime,
    };

    // Send the data to the backend to update the attendance
    fetch('/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      }) // Replace this with your actual backend API endpoint for handling check-in and check-out
        .then((response) => response.json())
        .then((data) => {
          // If the backend successfully handles the check-in/out action, update the attendance data locally
          setAttendanceData([...attendanceData, newData]);
        })
        .catch((error) => {
          console.error('Error handling check-in/out action:', error);
        });
    };
    
  return (
    <div>
      <h2>Attendance</h2>
      <ul>
        {attendanceData.map((entry, index) => (
          <li key={index}>
            {entry.merchantName} {entry.action} on {entry.date} at {entry.time}
          </li>
        ))}
      </ul>
      <button onClick={() => handleCheckInOut('Merchant A', 'Check-in')}>Check-in Merchant A</button>
      <button onClick={() => handleCheckInOut('Merchant B', 'Check-in')}>Check-in Merchant B</button>
      <button onClick={() => handleCheckInOut('Merchant A', 'Check-out')}>Check-out Merchant A</button>
      <button onClick={() => handleCheckInOut('Merchant B', 'Check-out')}>Check-out Merchant B</button>
    </div>
  );
};

export default AttendancePage;
