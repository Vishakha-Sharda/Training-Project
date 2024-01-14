import React, { useState, useEffect } from 'react';
import "../styles/view.css";

function ViewRecords() {
  const [appointments, setAppointments] = useState([]);
  const [appointmentsArray, setAppointmentsArray] = useState([]);
  //getting login status
  const isLoggedInString = localStorage.getItem("isLoggedIn");
  const isLoggedIn = JSON.parse(isLoggedInString);
  const isDoctor = isLoggedIn && isLoggedIn.userType === "doctor";
  const loggedInDoctorId = isLoggedIn && isLoggedIn.doctorId;

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    const storedAppointmentsArray = JSON.parse(localStorage.getItem('appointmentsArray')) || [];
    setAppointmentsArray(storedAppointmentsArray);
  }, []);

  const handleCancelAppointment = (index, doctorId) => {
    if (isDoctor && doctorId === loggedInDoctorId) {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(index, 1);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      setAppointments(updatedAppointments);
    } else {
      alert("You are not authorized to cancel this appointment.");
    }
  };
  
  
  return (
    <>
      <div className='view'>
        <h1 className='view-heading'>Registered Appointments</h1>
        <table className='appointment-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Age</th>
              <th>Phone Number</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Doctor</th>
              <th>Specialty</th>
              <th>D_Id</th>
              {isDoctor && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index} className='appointment-row'>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.age}</td>
                <td>{appointment.phoneNumber}</td>
                <td>{appointment.bloodGroup}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.selectedDoctor}</td>
                <td>{getDoctorSpecialty(appointment.selectedDoctor)}</td>
                <td>{getDoctorId(appointment.selectedDoctor)}</td>
                {isDoctor && (
                  <td>
                    <button onClick={() => handleCancelAppointment(index, getDoctorId(appointment.selectedDoctor))}>
                      Cancel
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='view1'>
        <h1 className='view-heading'>Booked Appointments</h1>
        <table className='other-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointmentsArray.map((appointmentArray, index) => (
              <tr key={index} className='other-row'>
                <td>{appointmentArray.userName}</td>
                <td>{appointmentArray.selectedDate}</td>
                <td>{appointmentArray.selectedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function getDoctorSpecialty(doctorName) {
  const doctors = [
    { D_id: 10, name: 'Dr. John Smith', specialty: 'Cardiologist' },
    { D_id: 11, name: 'Dr. Varun', specialty: 'Cardiologist' },
    { D_id: 12, name: 'Dr. Ankush Ahuja', specialty: 'Cardiologist' },
    { D_id: 13, name: 'Dr. Jane Doe', specialty: 'Dermatologist' },
    { D_id: 14, name: 'Dr. Jane Frank', specialty: 'Dentistry' },
    { D_id: 15, name: 'Dr. John ', specialty: 'Dentistry' },
    { D_id: 16, name: 'Dr. Anne', specialty: 'ENT' },
    { D_id: 17, name: 'Dr. Marko', specialty: 'Nephrology' },
    { D_id: 18, name: 'Dr. Gandhi', specialty: 'Neurology' },
  ]
  const doctor = doctors.find((doc) => doc.name === doctorName);
  return doctor ? doctor.specialty : '';
}

function getDoctorId(doctorName) {
  const doctors = [
    { D_id: 10, name: 'Dr. John Smith', specialty: 'Cardiologist' },
    { D_id: 11, name: 'Dr. Varun', specialty: 'Cardiologist' },
    { D_id: 12, name: 'Dr. Ankush Ahuja', specialty: 'Cardiologist' },
    { D_id: 13, name: 'Dr. Jane Doe', specialty: 'Dermatologist' },
    { D_id: 14, name: 'Dr. Jane Frank', specialty: 'Dentistry' },
    { D_id: 15, name: 'Dr. John ', specialty: 'Dentistry' },
    { D_id: 16, name: 'Dr. Anne', specialty: 'ENT' },
    { D_id: 17, name: 'Dr. Marko', specialty: 'Nephrology' },
    { D_id: 18, name: 'Dr. Gandhi', specialty: 'Neurology' },
  ]

  const doctor = doctors.find((doc) => doc.name === doctorName);
  return doctor ? doctor.D_id : '';
}

export default ViewRecords;
