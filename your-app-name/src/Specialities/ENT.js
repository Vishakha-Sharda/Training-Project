import React from 'react';
import image1 from "../images/img_avatar5.png";
import award from "../images/award-symbol.png";
import pin from "../images/pin.png";
import { Link } from 'react-router-dom';

function ENT() {
  return (
    <div>
      <h2><i> <center>ENT Specialists</center></i></h2>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. John Anderson</b></h5>
          <p className="card-text">
            MBBS (1992), MS ENT (1997)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} className="pe-2" width="30" />: 18 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Oak Street, ENTville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. John Anderson</b></h5>
          <p className="card-text">
            MBBS (1992), MS ENT (1997)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} className="pe-2" width="30" />: 18 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Oak Street, ENTville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>

      {/* Add more ENT specialists here */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Sarah Miller</b></h5>
          <p className="card-text">
            MBBS (1990), MS ENT (1995)<br />
            Registration no: 5678<br />
            Language: English, Spanish<br />
            <img src={award} className="pe-2" width="30" />: 26 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 456 Elm Avenue, EarCare City
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default ENT;
