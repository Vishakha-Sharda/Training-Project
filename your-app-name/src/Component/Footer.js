import React from 'react';
import { useAuth } from '../pages/AuthContext';
import '../styles/footer.css';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn && ( 
        // Only render the Footer if the user is logged in
        <div className="footer">
          <div className='social media'>
            <InstagramIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <FacebookIcon className='icon'/>
            <LinkedInIcon className='icon'/>
          </div>
          <p>&copy; 2023 abc.com</p>
        </div>
      )}
    </>
  );
}

export default Footer;
