import React, { useEffect, useState } from 'react';
import '../styles/view.css';

function Upload() {
  const [appointments, setappointments] = useState([]);

  useEffect(() => {
    const storedappointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setappointments(storedappointments);
  }, []);

  return (
    <div className="view">
      <h2><b>Patient Information</b></h2>
      {appointments.length > 0 ? (
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
              <th>Blood Group</th>
              <th>Phone Number</th>
             </tr>
             </thead>
             <tbody>
            {appointments.map((patient, iex) => (
              <tr key={iex}>
                <td>{patient.name}</td>
                <td>{patient.email}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.disease}</td>
                <td>{patient.bloodGroup}</td>
                <td>{patient.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No patient information available.</p>
      )}
    </div>
  );
}

export default Upload;
