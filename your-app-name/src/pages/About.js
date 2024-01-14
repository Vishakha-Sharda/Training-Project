import React from 'react'
import '../styles/about.css'
import pink from "../pink.avif"
import "../styles/test.css"
import '../styles/team.css'
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.avif'
import team3 from '../images/team3.jpg'
import hospitalImage from '../images/Doctors-1024x570.jpg'; 
import '../styles/history.css';

 
function About() {
  return (
    <>
{/*TESTIMONIAL*/}

<div className='testimonial' id='testimonial'>
<div className='imagee'  style={{backgroundImage:`url(${pink})`}}>   
<div className='headerContainer'>
<h1> <i> <b> Testimonial</b></i></h1> 
    </div>
    </div>
<div className='body'>
<div id="test1">
<p>" The Healthcare Success team has proven to be extremely effective in increasing Urgent Care patient . </p>
<p> volume Their expertise in search engine optimization, social media, and online advertising continue to </p>
<p>generate a high volume of new patient referrals to our centers. I would highly recommend them."</p>
</div>
<div id="test2">
<p>"We were highly impressed with the thoroughness of the onsite review and the overall marketing plan’s in-</p>
<p>depth assessment.The Healthcare Success team was extremely knowledgeable in their areas of  </p>    
<p>expertise and comprehensiveness of their review.Their recommendations were very detailed and</p>
<p> provided us with a clear understanding of how we needed to proceed with program growth. </p>
<p>I highly recommend the Healthcare Success team to any organization seeking ways to improve their </p>
<p>patient volume and financial growth opportunities."</p>

</div>
<div id="test3">     
<p>" The Healthcare Success team has proven to be extremely effective in increasing Urgent Care patient . </p>
<p> volume Their expertise in search engine optimization, social media, and online advertising continue to </p>
<p>generate a high volume of new patient referrals to our centers. I would highly recommend them."</p>

</div>
</div>      

</div>

{/*team*/}

<div className='app3' id="team">

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
      
 </div>

{/*mission*/}

<div className="mission-container" id='mission'> 
      <h1 className="mission-header">Our Mission</h1> 
      <p className="mission-text"> 
        At XYZ Hospital, our mission is to provide the highest quality healthcare services to our
        patients, using the latest medical technologies and the most compassionate care possible.
        We are dedicated to improving the health and well-being of the communities we serve.
      </p>
    </div>

    {/*history*/}
   
    <div className="history-container" id='history'>
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



</>
  );  
  
}

export default About
