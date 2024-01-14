import React, { useState, useEffect } from 'react';
import "../styles/appoint.css";

const BookAppointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    userName: '',
    selectedDate: '',
    selectedTime: ''
  });

  const [appointmentsArray, setAppointmentsArray] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointmentsArray')) || [];
    setAppointmentsArray(storedAppointments);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value
    });
  };

  const handleAppointmentSubmission = () => {
    // Create a copy of the existing appointments array and add the new appointment data to it
    const updatedAppointments = [...appointmentsArray, appointmentData];

    // Save the updated appointments array to local storage
    localStorage.setItem('appointmentsArray', JSON.stringify(updatedAppointments));

    // Update the state to reflect the new data
    setAppointmentsArray(updatedAppointments);

    alert(`Appointment Scheduled for ${appointmentData.userName}: Date - ${appointmentData.selectedDate}, Time - ${appointmentData.selectedTime}`);
    
    // Clear the input fields
    setAppointmentData({
      userName: '',
      selectedDate: '',
      selectedTime: ''
    });
  };

  return (
    <div className='app1'>
      <form className="register-form1">
        <h1>Book Appointment</h1>
        <div className="input-container">
          <label htmlFor="userName">Your Name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={appointmentData.userName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            name="selectedDate"
            value={appointmentData.selectedDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="time">Select Time:</label>
          <input
            type="time"
            id="time"
            name="selectedTime"
            value={appointmentData.selectedTime}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" className="btn1" onClick={handleAppointmentSubmission}>
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
