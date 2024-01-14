// import React, { createContext, useContext, useState, useEffect } from 'react';
// //create the context
// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn,userId, setUserId] = useState(false);

//   useEffect(() => {
//     // Check local storage for login status
//     const storedStatus = localStorage.getItem('isLoggedIn');
//     console.log(storedStatus,"storedstatus")//stores the loggedin information
//     const isLoggedn = JSON.parse(storedStatus);

//     if (isLoggedn) {
//       setIsLoggedIn(isLoggedn);
//     }
//   }, []);

//   return (
//     //isLoggedIn represents whether a user is authenticated (true or false);;
//     //setIsLoggedIn is a function used to update the isLoggedIn state.
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{/* objects passed to value prop */}
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Initialize isLoggedIn and userId states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check local storage for login status and user ID
    const storedStatus = localStorage.getItem('isLoggedIn');
    const storedUserId = localStorage.getItem('userId');

    if (storedStatus === 'true' && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}


