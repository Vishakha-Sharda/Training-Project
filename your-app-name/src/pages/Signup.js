// import React, { useState } from 'react';
// import '../styles/sign.css';
// import { useNavigate } from 'react-router';
// import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('patient');
//   const [specialty, setSpecialty] = useState(''); // Added specialty state
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
// //signup function
//   const handleSignup = (e) => {
//     e.preventDefault();
// //check if the  password and confirm password are same
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     // Generate a unique ID for the user

//     const userId = uuidv4();

// //userdata is an object with variables to hold the specific values
//     const userData = {
//       id: userId, // Assign the generated unique ID

//       userType: userType,
//       email: email,
//       name: name,
//       password: password,
//       specialty: specialty,
//     };

//     let existingData = JSON.parse(localStorage.getItem('key')) || [];
// //check if the existing data is in the  array 
//     if (!Array.isArray(existingData)) {
//       existingData = [];
//     }
// //then push the userData
//     existingData.push(userData);
// //set the existing data in the localstorage
//     localStorage.setItem('key', JSON.stringify(existingData))
//     ;
// //once set -->then alert the message
//     alert(`Welcome ${email}! You have successfully signed up.`);
//     navigate('/');
//    //after submission clear the data
//     setName('');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setUserType('patient');
//     setSpecialty('');
//     setError('');
//   };

//   return (
//     <div className="signup-container">
//       <h1>Sign Up</h1>
//       {error && <div className="error-message">{error}</div>}
//       <form onSubmit={handleSignup}>
//       {/*Name Field*/ }
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="name"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//            {/*Email Field*/ }
//         <div className="form-group">
//           <label htmlFor="email">Email Address:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//            {/*Password Field*/ }
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//            {/*Confirmation password Field*/ }
//         <div className="form-group">
//           <label htmlFor="confirm-password">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirm-password"
//             name="confirm-password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//            {/* {/*Check the usertype Field*/ }
//          <div className="form-group">
//           <label>User Type:</label>
//           <select
//             id="user-type"
//             name="user-type"
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="admin">Admin</option>
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//           </select>
//         </div>
    
//             {userType === 'doctor' && (<div className="form-group">
//             <label htmlFor="id">Doctor ID:</label>
//             <input
//               type="text"
//               id="specialty"
//               name="specialty"
//               value={specialty}
//               onChange={(e) => setSpecialty(e.target.value)}
//               required
//             />
//           </div>
//         )} 
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;











import React, { useState } from 'react';
import '../styles/sign.css';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('patient');
  const [doctorId, setDoctorId] = useState(''); // Changed state name to doctorId
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (userType === 'doctor') {
      // Check if the entered doctor ID exists in the 'doctors' key in local storage
      const doctorsData = JSON.parse(localStorage.getItem('doctors')) || [];
      console.log('Doctors Data:', doctorsData);
console.log('Entered Doctor ID:', doctorId);
      const matchingDoctor = doctorsData.find((doctor) => doctor.D_id === doctorId);
      console.log('Matching Doctor:', matchingDoctor);

      if (!matchingDoctor) {
        setError('Invalid Doctor ID');
        return;
      }
    }

    const userId = uuidv4();

    const userData = {
      id: userId,
      userType: userType,
      email: email,
      name: name,
      password: password,
    };

    let existingData = JSON.parse(localStorage.getItem('key')) || [];

    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    existingData.push(userData);
    localStorage.setItem('key', JSON.stringify(existingData));

    alert(`Welcome ${email}! You have successfully signed up.`);
    navigate('/');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setUserType('patient');
    setDoctorId(''); // Clear doctorId after signup
    setError('');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <select
            id="user-type"
            name="user-type"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {userType === 'doctor' && (
          <div className="form-group">
            <label htmlFor="doctorId">Doctor ID:</label>
            <input
              type="text"
              id="doctorId"
              name="doctorId"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

