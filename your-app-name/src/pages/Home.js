import React  from 'react'
import '../styles/home.css'
import  team from '../images/team.jpg'
import calendar from '../images/time.png'
import checkup from '../images/examination.png'
import  buy from '../images/trolley.png'
import consult from "../images/consultation.png"
import record from '../images/health-report.png'
import dentist from "../images/dentistry.png"
import heart  from "../images/heart-rate-monitor.png"
import neuron from "../images/neurology.png"
import nephron from "../images/nephrology.png"
import skin from "../images/skin.png"
import throart from "../images/throat.png"
import doctor1 from "../images/Doctor1.jpg"
import women from "../images/Woman.webp"
import angiography from "../images/angiography.png"
import cataract from "../images/cataract.png"
import colonoscopy from "../images/colonoscopy.png"
import lamine from "../images/laminectomy.png"
import neuro from "../images/neurosurgery.png"
import endoscopy from "../images/endoscopy.png"
import brain from "../images/brain.png"
import knee from "../images/painful.png"
import { Link } from 'react-router-dom'
import BannerImage from '../images/doc.jpg'

const fullSizeStyle = {
  width: '100%',
  height: '100%',
};

function Home() {
  const isLoggedInString = localStorage.getItem("isLoggedIn"); // Retrieve the stored string
const isLoggedIn = JSON.parse(isLoggedInString); // Parse the string to an object

console.log("Login Information:", isLoggedIn);

const isDoctor = isLoggedIn && isLoggedIn.userType === "doctor";
const isAdmin = isLoggedIn && isLoggedIn.userType === "admin";
const isPatient = isLoggedIn && isLoggedIn.userType === "patient";
console.log("current user",isAdmin);

console.log("Current user: Doctor?", isDoctor, "Admin?", isAdmin, "Patient?", isPatient);

  return (
    <>
    <div>
    <div className="container">
            
        </div>
    <div className='home'  style={{backgroundImage:`url(${BannerImage})`}}>
    
    <div className='headerContainer'>

    <h1>Zeeva Hospital</h1> <br/>
    <p>We are here to serve You</p>

        </div>
        </div> 
        <div className="contane">
        <div className='row row-cols-3 row-cols-lg-6 g-2 g-lg-4 mt-4 mb-4 mx-auto'>
                               <div className="col hover-effect">
                                 <Link to="/bookappointment"  className="tp_widget" id="btn-cta-bb-book-appointment">
                                    <img src={calendar} alt="icon" width="64"/>
                                    <h5>Book Appointment</h5>
                                 </Link>
                              </div>
                               <div className="col  d-none d-sm-block hover-effect">
                     <Link to ="/checkup"  className="tp_widget" id="btn-cta-bb-book-prohealth">
                        <img src={checkup} alt="icon" width="64"/>
                        <h5>Book Health Check-Up</h5>
                     </Link>
                             </div>
                  
                              <div className="col hover-effect">
                                 <Link to= "/doctorconsultationform"  className="tp_widget">
                                    <img src={consult} alt="icon" width="64"/>
                                    <h5>Consult Online</h5>
                                 </Link>
                              </div>
                          <div className="col hover-effect">
                                 <Link to="/buy" id="btn-cta-bb-buy-medicine"  className="tp_widget">
                                    <img src={buy} alt="icon" width='64'/>
                                    <h5>Buy Medicine</h5>
                                 </Link>
                              </div> 
                                     {isDoctor && (
                                    <div className="col hover-effect">
                                      <Link to="/view" id="btn-cta-bb-book-labtest" className="tp_widget">
                                        <img src={record} alt="icon" width="64" />
                                        <h5>View Records</h5>
                                      </Link>
                                    </div>
                                  )}

                                  {isPatient && (
                                    <div className="col hover-effect">
                                      <Link to="/upload" id="btn-cta-bb-find-hospital" className="tp_widget">
                                        <img src={record} alt="icon" width="64" />
                                        <h5>Upload & Check Files</h5>
                                      </Link>
                                    </div>
                                  )}

                                  {isAdmin && (
                                    <div className="col hover-effect">
                                      <Link to="/view" id="btn-cta-bb-book-labtest" className="tp_widget">
                                        <img src={record} alt="icon" width="64" />
                                        <h5>View Records</h5>
                                      </Link>
                                    </div>
                                  )}

                                  {isAdmin && (
                                    <div className="col hover-effect">
                                      <Link to="/upload" id="btn-cta-bb-find-hospital" className="tp_widget">
                                        <img src={record} alt="icon" width="64" />
                                        <h5>Upload & Check Files</h5>
                                      </Link>
                                    </div>
                                  )}
    
                              </div>
                        </div>
                        <div className='nav mt-4 mb-4'>
  <ul className="nav nav-tabs scroll-items justify-content-center" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="specialties-tab" data-bs-toggle="tab" data-bs-target="#specialties" type="button" role="tab" aria-controls="specialties" aria-selected="true">Specialties</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="Procedures-tab" data-bs-toggle="tab" data-bs-target="#Procedures" type of="button" role="tab" aria-controls="Procedures" aria-selected="false" tabIndex="-1">Procedures</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="ProHealth-tab" data-bs-toggle="tab" data-bs-target="#ProHealth" type="button" role="tab" aria-controls="ProHealth" aria-selected="false" tabIndex="-1">ProHealth</button>
    </li>
  </ul>
</div>
      <div className="tab-content py-sm-5 py-3">

<div className="tab-pane" id="Procedures" role="tabpanel" aria-labelledby="specialties-tab" tabIndex="0" style={fullSizeStyle}>
<div className="container">
    <div className="row justify-content-center text-center">
        <div className="col-md-12">
            <h2>Best Doctors in India</h2>
          <p className="sub_hdng pt-1">Confused about what to do? Consult the  Experts Now to <strong>Get a Second Opinion</strong></p> 
            <p className="sub_hdng pt-1">Learn about the world className health care we provide</p>
            <br/>
        </div>
        
        <div className="col-md-5">
            <img src={doctor1} alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-none d-sm-block" style={fullSizeStyle}/>
            <img src={doctor1} alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-block d-sm-none"/>
        </div>
        <div className="col-md-7">
            <div className="text-center pt-lg-0 pt-4">
                <div className="row justify-content-center">                                      
                    <div className="col-md-12">
                        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-4 mt-4 mb-4">
                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/angioplasty" className="pg_widget">
                                    <img src={angiography} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Angioplasty</h5>
                                </Link>
                            </div>

                          

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to ="/endoscopy">
                                    <img src={endoscopy} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Endoscopy</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to ="/neurosurgery">
                                    <img src={neuro}alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Neurosurgery</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/lamino">
                                    <img src={lamine} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Laminectomy</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/stroke">
                                    <img src={brain} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Surgery for Stroke</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/clonoscopy">
                                    <img src={colonoscopy} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Colonoscopy</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/cataract">
                                    <img src={cataract} alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Cataract</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-4 mb-4">
                                <Link to="/kneereplacement">
                                    <img src={knee}alt="icon" width="64"/>
                                    <h5 style={{fontsize:'12px' }}>Knee replacement</h5>
                                </Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>

<div className="tab-pane active show" id="specialties" role="tabpanel" aria-labelledby="Procedures-tab" tabIndex="0"> 
    <div className="row justify-content-center text-center">
        <div className="col-md-12">
            <h2>Explore our Centres of Clinical Excellence </h2>
            <p className="sub_hdng pt-1">Learn about the world class health care we provide </p>
            <br/>
        </div>

    

      
        <div className="col-md-5">
            <img src={team} alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-none d-sm-block" style={fullSizeStyle}/>
            <img src={team} alt="Advised a procedure or surgery?" className="img-fluid rounded-4 d-block d-sm-none"/>
        </div>
        <div className="col-md-7">
            <div className="text-center pt-lg-0 pt-4">
                <div className="row justify-content-center">
                   
                   <div className="col-md-12">
                        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-4">
                            <div className="col hover-effect mt-2 mb-2">
                              <Link to= '/cardiology' >
                                    <img src={heart} alt="icon" width="64"/>
                                    <h5>Cardiology</h5>
                                </Link>
                            </div>

                            <div className="col hover-effect mt-2 mb-2">
                            <Link to ='/neurology'>
                                    <img src={neuron} alt="icon" width="64"/>
                                    <h5>Neurology</h5>
                                    </Link>
                            </div>
                            <div className="col hover-effect mt-2 mb-2">
                                    <Link to ='/dermatology'>
                                    <img src={skin} alt="icon" width="64"/>
                                    <h5>Dermatology</h5>
                                    </Link>
                            </div>
                            <div className="col hover-effect mt-2 mb-2">
                                   <Link to='/nephrology'>
                                    <img src={nephron} alt="icon" width="64"/>
                                    <h5>Nephrology</h5>
                                    </Link>
                            </div>
                            <div className="col hover-effect mt-2 mb-2">
                            <Link to ='/dentistry'>
                                    <img src={dentist} alt="icon" width="64"/>
                                    <h5>Dentistry</h5>
                                    </Link>
                            </div>
                            <div className="col hover-effect mt-2 mb-2">
                                  <Link to ='/ent'>
                                    <img src={throart} alt="icon" width="64"/>
                                    <h5>ENT</h5>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       

    </div>



</div>
<div className="tab-pane" id="ProHealth" role="tabpanel" aria-labelledby="ProHealth-tab" tabIndex="0">


  <div className="row justify-content-center">
       <div className="col-md-12">
            
        </div> 

         
        <div className="col-md-5">
            <img src={women} alt="Get proactive - Be Prohealth !" className="img-fluid rounded-4 d-none d-sm-block"/>
            <img src={women} alt="Get proactive - Be Prohealth !" className="img-fluid rounded-4 d-block d-sm-none"/>
        </div>
        <div className="col-md-7">

            <h2>Your Wellness, Our Commitment - ProHealth !</h2>
            <p className="sub_hdng pt-1"> Your Path to Wellness and Well-Being. </p>

          <p>ProHealth Program is a unique end-to-end personalized proactive health program that brings together predictive risk analysis, doctor-curated health packages, cutting-edge diagnostics with expert evaluation, and a personalized path to wellness, designed to make positive shifts – making you healthier. </p>

<p>This health program is based on  empowering individuals to take control of their health. They become active participants in their well-being, making informed choices about their lifestyles and healthcare. </p>

<p> Program can PREDICT health risks, help PREVENT ailments, and OVERCOME lifestyle diseases where possible.</p>
          <p></p>
        </div>
  </div>
</div>

</div>


        </div>


        </>
        
      )
    }

export default Home;
