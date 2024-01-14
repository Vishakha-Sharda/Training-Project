import React from 'react';
import image1 from "../images/img_avatar5.png";
import award from "../images/award-symbol.png";
import pin from "../images/pin.png";
import { Link } from 'react-router-dom';

function Dentistry() {
  return (
    <div>
      <h2><i> <center>Dentistry Specialists</center></i></h2>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Sarah Davis</b></h5>
          <p className="card-text">
            BDS (1995), MDS Dentistry (2000)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} alt =".." className="pe-2" width="30" />: 21 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Smile Street, Dentistville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Sarah Davis</b></h5>
          <p className="card-text">
            BDS (1995), MDS Dentistry (2000)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} alt =".." className="pe-2" width="30" />: 21 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Smile Street, Dentistville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>

      {/* Add more Dentistry specialists here */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. John Smith</b></h5>
          <p className="card-text">
            BDS (1990), MDS Dentistry (1995)<br />
            Registration no: 5678<br />
            Language: English, Spanish<br />
            <img src={award} alt =".." className="pe-2" width="30" />: 26 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 456 Dental Avenue, ToothCare City
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Dentistry;
