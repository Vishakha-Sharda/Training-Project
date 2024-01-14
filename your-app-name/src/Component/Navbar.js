import React, { useState } from 'react';
import logo from '../images/hospital.png';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import ReorderIcon from "@mui/icons-material/Reorder";
import { useAuth } from '../pages/AuthContext';
import user from "../images/user.png";

function Navbar() {
  //check if the user is loggedIn 
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  //when the screen size reduces then open the links under the icon
  const [openLinks, setOpenLinks] = useState(false);
  //dropdown for uSerinformation
  const [userDropdown, setUserDropdown] = useState(false);
  // Added user info state
  const [userInfo, setUserInfo] = useState(null); 
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/');
  };

  const handleInformation = () => {
    // Get the user information from local storage
    const storedUserInfo = localStorage.getItem('isLoggedIn');
    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setUserInfo(userInfo); // Set the user info to state
    }
  }
console.log("userInformation",userInfo)
  return (
    <>
      {isLoggedIn && ( 
        <div className={`navbar ${openLinks ? 'open' : 'close'}`}>
          <div className='leftSide'>
            <img src={logo} alt='logo' />
            <div className={`rightSide ${openLinks ? 'open' : 'close'}`}>
              <Link to="/home"> Home </Link>
              <Link to="/register"> Register </Link>
              <Link to="/contact"> Contact </Link>
              <Link to="/about"> About </Link>
              <div className="user-dropdown" onClick={toggleUserDropdown}>
                <img
                  src={user}
                  onClick={handleInformation}
                  className="user-pic"
                  alt="User"
                />
                {userDropdown && (
                  <div className="dropdown">
                    {userInfo ? ( 
                      <ul>
                        <li>
                         {userInfo.name}
                        </li>
                        <li>
                          User Type: {userInfo.userType}
                        </li>
                        <li onClick={handleLogout}>Logout</li>
                      </ul>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
            <div className='menu-icon' onClick={toggleNavbar}>
              <ReorderIcon />
            </div>
           </div> 
        </div>
      )}
    </>
  );
}

export default Navbar;
