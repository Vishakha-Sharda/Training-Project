import React, { useState } from 'react';
import "../styles/consult.css"
function DoctorConsultationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, e.g., send data to a server or show a confirmation message.
    console.log('Form submitted:', { name, email, specialty, message });
  };

  return (
    <div className='app2'>
     
      <form className='login-form2' onSubmit={handleSubmit}>
      <h1><b>Online Doctor Consultation</b></h1>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br/>

        </div>
        

        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/>
        </div>          
      
        <div>
          <label htmlFor="specialty">Select Doctor Specialty:</label>
          <select
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="">Choose a specialty</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="neurologist">Neurologist</option>
            <option value="nephrology">Nephrologist</option>
            <option value="ENT">ENT specialist</option>
            <option value="Dentist">Dentist</option>
          </select>
          <br/>
          <label htmlFor="message">Message to the Doctor:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="1"
            required
          />
        </div>
        <button className="btn2" type="submit">Request Consultation</button>
      </form>
    </div>
  );
}

export default DoctorConsultationForm;
