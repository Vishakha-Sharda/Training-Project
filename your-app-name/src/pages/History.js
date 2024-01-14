import React from 'react';
import hospitalImage from '../images/Doctors-1024x570.jpg'; 
import '../styles/history.css'; 

function History() {
  return (
    <div className="history-container">
      <div className="history-image" style={{ backgroundImage: `url(${hospitalImage})` }}>
        <div className="history-header">
          <h1>Our History</h1>
        </div>
      </div>
      <div className="history-body">
        <p>
          XYZ Hospital was established in 19XX and has been a cornerstone of the community's healthcare for decades. Starting from humble beginnings with a small staff and limited facilities, it has since grown into a state-of-the-art medical institution, renowned for its exceptional patient care and groundbreaking research initiatives.
        </p>
        <p>
          Over the years, we have continuously strived to expand our services, introducing innovative treatments and technologies to ensure the best possible outcomes for our patients. Our commitment to excellence and compassion remains unwavering, as we continue to serve the community with dedication and integrity.
        </p>
        <p>
          Throughout our history, we have achieved several significant milestones, including:
        </p>
        <ul>
          <li>Year XXXX: Opened a new state-of-the-art medical research center.</li>
          <li>Year XXXX: Introduced cutting-edge medical technology that revolutionized patient care.</li>
          <li>Year XXXX: Collaborated with international medical institutions on groundbreaking research projects.</li>
          <li>Year XXXX: Expanded our outreach programs to underserved communities.</li>
        </ul>
        <p>
          We take pride in our history and look forward to a future filled with innovation, patient-centered care, and a continued commitment to improving the health and well-being of our community.
        </p>
      </div>
    </div>
  );
}

export default History;
