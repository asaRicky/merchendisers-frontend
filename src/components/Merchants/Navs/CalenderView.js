import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const eventsData = [
  {
    id: 1,
    title: 'Meeting with Client',
    date: new Date(2023, 7, 5, 12, 30),
    description: 'Discuss new product launch',
  },
  {
    id: 2,
    title: 'Team Building Event',
    date: new Date(2023, 7, 15, 14, 0),
    description: 'Outdoor team-building activities',
  },
  // Add more events as needed
];

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const getEventsForDate = (date) => {
    const eventsForDate = eventsData.filter(
      (event) =>
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );
    return eventsForDate;
  };

  return (
    <div className="calendar-container">
      <h1>Merchant's Calendar</h1>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        calendarType="US"
        className="react-calendar"
      />
      <div className="events-container">
        <h2>Events on {selectedDate.toDateString()}</h2>
        <ul>
          {getEventsForDate(selectedDate).map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarView;
