
// import React, { useState } from 'react';
// import '../styles/register.css';

// function Doctor_register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState(''); // Use state to manage the selected gender
//   const [disease, setDisease] = useState('');
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [error, setError] = useState('');

//   const doctors = [
//         { D_id: 10, name: 'Dr. John Smith', specialty: 'Cardiologist' },
//         { D_id: 11, name: 'Dr. Varun', specialty: 'Cardiologist' },
//         { D_id: 12, name: 'Dr. Ankush Ahuja', specialty: 'Cardiologist' },
//         { D_id: 13, name: 'Dr. Jane Doe', specialty: 'Dermatologist' },
//         { D_id: 14, name: 'Dr. Jane Frank', specialty: 'Dentistry' },
//         { D_id: 15, name: 'Dr. John ', specialty: 'Dentistry' },
//         { D_id: 16, name: 'Dr. Anne', specialty: 'ENT' },
//         { D_id: 17, name: 'Dr. Marko', specialty: 'Nephrology' },
//         { D_id: 18, name: 'Dr. Gandhi', specialty: 'Neurology' },
//   ];

//   const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//   const phoneNumberRegex = /^\d{10}$/;

//   const handleAppointmentSubmit = (e) => {
//     e.preventDefault();
// //check if all fields are filled
//     if (
//     !name || !email || !age ||!gender ||!disease ||!bloodGroup ||!phoneNumber ||!date ||!time ||!selectedDoctor
//     ) {
//       setError('All fields are required');
//       return;
//     }
// //if email not match with the regex
//     if (!email.match(emailRegex)) {
//       setError('Invalid email format');
//       return;
//     }
// //if email not match with the numberregex
//     if (!phoneNumber.match(phoneNumberRegex)) {
//       setError('Invalid phone number format');
//       return;
//     }
// const appointmentDetails = {
//       name,
//       email,
//       age,
//       gender,
//       disease,
//       bloodGroup,
//       phoneNumber,
//       date,
//       time,
//       selectedDoctor,
//     };
//     const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
//     console.log(existingAppointments,"existingappointments")
//     const updatedAppointments = [...existingAppointments, appointmentDetails];
//     localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
//     console.log(updatedAppointments,"updateedappointments")
//     setSuccessMessage('Appointment submitted successfully!');
//   //after submitting clear the form 
//     setError('');
//     setName('');
//     setEmail('');
//     setAge('');
//     setGender('');
//     setDisease('');
//     setBloodGroup('');
//     setPhoneNumber('');
//     setDate('');
//     setTime('');
//     setSelectedDoctor('');
//   };

//   return (
//     <div className="app">
//       <form className="register-form" onSubmit={handleAppointmentSubmit}>
//         <h2>
//           <b>Book an Appointment</b>
//         </h2>
//         {error && <div className="error-message">{error}</div>}
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//           {/*required attribute makes the field mandatory*/}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Age:</label>
//           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)} required>
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="nonbinary">Non-binary</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Disease:</label>
//           <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} required />
//         </div>
//         <div>
//           <label>Blood Group:</label>
//           <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Time:</label>
//           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
//         </div>
//         <div>
//           <label>Select Doctor:</label>
//           <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
//             <option value="">Choose a doctor</option>
//             {/* maps the value or get the value from the doctors variable*/}
//             {doctors.map((doctor) => (
//               <option key={doctor.id} value={doctor.name}>
//                {doctor.D_id} - {doctor.name} - {doctor.specialty}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <button className="btn" type="submit">
//             Submit Appointment
//           </button>
//         </div>
//         {successMessage && <div className="success-message">{successMessage}</div>}
//       </form>
//     </div>
//   );
// }

// export default Doctor_register;



import React, { useState } from 'react';
import '../styles/register.css';
import { useNavigate } from 'react-router';

function Doctor_register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [disease, setDisease] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const [specialty, setSpecialty] = useState('');


  const isLoggedInString = localStorage.getItem("isLoggedIn"); // Retrieve the stored string
  const isLoggedIn = JSON.parse(isLoggedInString); // Parse the string to an object
  const isAdmin = isLoggedIn && isLoggedIn.userType === "admin";
const isPatient = isLoggedIn && isLoggedIn.userType === "patient";
let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
const navigate = useNavigate();


// const doctors = [

//     { D_id: 10, name: 'Dr. John Smith', specialty: 'Cardiologist' },
//     { D_id: 11, name: 'Dr. Varun', specialty: 'Cardiologist' },
//     // ... other doctors
//   ];

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const phoneNumberRegex = /^\d{10}$/;

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // ... existing code for patient appointment
    //check if all fields are filled
    if (
    !name || !email || !age ||!gender ||!disease ||!bloodGroup ||!phoneNumber ||!date ||!time ||!selectedDoctor
    ) {
      setError('All fields are required');
      return;
    }
//if email not match with the regex
    if (!email.match(emailRegex)) {
      setError('Invalid email format');
      return;
    }
//if email not match with the numberregex
    if (!phoneNumber.match(phoneNumberRegex)) {
      setError('Invalid phone number format');
      return;
    }
const appointmentDetails = {
      name,
      email,
      age,
      gender,
      disease,
      bloodGroup,
      phoneNumber,
      date,
      time,
      selectedDoctor,
    };
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    console.log(existingAppointments,"existingappointments")
    const updatedAppointments = [...existingAppointments, appointmentDetails];
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    console.log(updatedAppointments,"updateedappointments")
    setSuccessMessage('Appointment submitted successfully!'); 
     generateReceipt(appointmentDetails); // Generate and display receipt

  //after submitting clear the form 
    setError('');
    setName('');
    setEmail('');
    setAge('');
    setGender('');
    setDisease('');
    setBloodGroup('');
    setPhoneNumber('');
    setDate('');
    setTime('');
    setSelectedDoctor('');
  };

const generateReceipt = (appointmentDetails) => {
  // Display receipt modal or navigate to receipt page
  // You can customize the receipt layout based on your requirements
  navigate('/receiptpage', { appointmentDetails });
};
  const handleAddDoctorSubmit = (e) => {
    e.preventDefault();
// Check if all fields are filled for the new doctor
if (!name || !email || !specialty) {
  setError('All fields are required');
  return;
}

// Perform additional validation if needed
// ...
const existingDoctors = JSON.parse(localStorage.getItem('doctors')) || [];

  // Create a new doctor object
  const newDoctor = {
    D_id: existingDoctors.length + 1, // Generate a unique ID
    name,
    email,
    specialty,
  };
// Update the list of doctors
const updatedDoctors = [...existingDoctors, newDoctor];

  // Save the updated list to localStorage
  localStorage.setItem('doctors', JSON.stringify(updatedDoctors));

  setSuccessMessage('Doctor added successfully!');
  setError('');

// Reset form fields
setName('');
setEmail('');
setSpecialty('');
};
    

  return (
    <div className="app">
      {isPatient ? (
        <form className="register-form" onSubmit={handleAppointmentSubmit}>
          <h2>
            <b>Book an Appointment</b>
          </h2>
          {error && <div className="error-message">{error}</div>}
          {/* ... patient form fields */}
          <div>
           <label>Name:</label>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
           {/*required attribute makes the field mandatory*/}
         </div>
         <div>
           <label>Email:</label>
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
         </div>
         <div>
           <label>Age:</label>
           <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
         </div>
         <div>
           <label>Gender:</label>
           <select value={gender} onChange={(e) => setGender(e.target.value)} required>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="nonbinary">Non-binary</option>
             <option value="other">Other</option>
           </select>
         </div>
         <div>
           <label>Disease:</label>
           <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} required />
         </div>
         <div>
           <label>Blood Group:</label>
           <input type="text" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required />        
            </div>
         <div>
           <label>Phone Number:</label>
           <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
         </div>
         <div>
           <label>Date:</label>
           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
         </div>
         <div>
           <label>Time:</label>
           <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
         </div>
         <div>
           <label>Select Doctor:</label>
           <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
              <option value="">Choose a doctor</option>
              {/* maps the value or get the value from the doctors variable*/}
              {doctors.map((doctor) => (
                <option key={doctor.D_id} value={doctor.name}>
                  {doctor.D_id} - {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
       </div>
         
          <div>
            <button className="btn" type="submit">
              Submit Appointment
            </button>
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
      ) : (
        <form className="register-form" onSubmit={handleAddDoctorSubmit}>
          <h2>
            <b>Add a New Doctor</b>
          </h2>
          {error && <div className="error-message">{error}</div>}
          {/* ... admin form fields */}
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          {/* Add input field for specialty */}
          <div>
            <label>Specialty:</label>
            <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} required />
          </div>
          <div>
            <button className="btn" type="submit">
              Add Doctor
            </button>
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
      )}
    </div>
  );
}

export default Doctor_register;
