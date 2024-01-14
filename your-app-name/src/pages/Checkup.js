import React, { useState, useEffect } from 'react';
import '../styles/checkup.css';

function HealthCheckupPage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const [scheduledAppointments, setScheduledAppointments] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('Data'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('scheduledAppointments')) || [];
    setScheduledAppointments(storedAppointments);
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add the new appointment data to the array and save it in local storage
    const updatedAppointments = [...scheduledAppointments, formData];
    localStorage.setItem('scheduledAppointments', JSON.stringify(updatedAppointments));

    alert('Appointment Scheduled', formData);

    // Clear the form
    setFormData({
      name: '',
      contact: '',
      appointmentDate: '',
      appointmentTime: '',
    });
    // Clear the selected option
    setSelectedOption('');
  };

  return (
    <div className="health-checkup-container">
      <h1>Health Checkup</h1>
      <h2>Select a Health Checkup Option:</h2>
      <div>
        <label>
          <input
            type="radio"
            value="basic"
            checked={selectedOption === 'basic'}
            onChange={handleOptionChange}
          />
          Basic Checkup
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="comprehensive"
            checked={selectedOption === 'comprehensive'}
            onChange={handleOptionChange}
          />
          Comprehensive Checkup
        </label>
      </div>

      <form onSubmit={handleFormSubmit}>
        <h2>Schedule an Appointment:</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="number">Contact Number:</label>
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleFormChange}
          />
          <label htmlFor="date">Select Time:</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Schedule Appointment</button>
        
      </form>
    </div>
  );
}

export default HealthCheckupPage;
