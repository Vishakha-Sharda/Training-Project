import React from 'react';
import '../styles/team.css'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.avif'
import team3 from '../images/team3.jpg'
const TeamPage = () => {
  return (
    <div className='app3'>

     <div className='head1'  >
    <div className='head-content'>
    <h1>Our Team</h1>
      <>Welcome to our dedicated team of professionals.</>
    </div>
      </div>

      <div className="team-member"style={{width: "18rem"}}>
        <img src={team1} alt="Team Member 1" />
        <h2>John Doe</h2>
        <p>Position: Doctor</p>
        <p>Email: john@example.com</p>
      </div>

      <div className="team-member"style={{width: "18rem"}}>
        <img src={team2} alt="Team Member 2" />
        <h2>Jane Smith</h2>
        <p>Position: Cardiologist</p>
        <p>Email: jane@example.com</p>
      </div>
      <div className="team-member"style={{width: "18rem"}}>
        <img src={team3} alt="Team Member 2" />
        <h2>Jane Smith</h2>
        <p>Position: Pharmist</p>
        <p>Email: jane@example.com</p>
      </div>
      <div className="team-member"style={{width: "18rem"}}>
        <img src={team1} alt="Team Member 1" />
        <h2>John Doe</h2>
        <p>Position: Doctor</p>
        <p>Email: john@example.com</p>
      </div>

      <div className="team-member"style={{width: "18rem"}}>
        <img src={team2} alt="Team Member 2" />
        <h2>Jane Smith</h2>
        <p>Position: Cardiologist</p>
        <p>Email: jane@example.com</p>
      </div>
      <div className="team-member"style={{width: "18rem"}}>
        <img src={team3} alt="Team Member 2" />
        <h2>Jane Smith</h2>
        <p>Position: Pharmist</p>
        <p>Email: jane@example.com</p>
      </div>
      <div className="team-member"style={{width: "18rem"}}>
        <img src={team1} alt="Team Member 1" />
        <h2>John Doe</h2>
        <p>Position: Doctor</p>
        <p>Email: john@example.com</p>
      </div>

      <div className="team-member"style={{width: "18rem"}}>
        <img src={team2} alt="Team Member 2" />
        <h2>Jane Smith</h2>
        <p>Position: Cardiologist</p>
        <p>Email: jane@example.com</p>
      </div>
 </div>
  );
};

export default TeamPage;
