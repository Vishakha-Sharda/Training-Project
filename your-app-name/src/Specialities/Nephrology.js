import React from 'react';
import image1 from "../images/img_avatar5.png";
import award from "../images/award-symbol.png";
import pin from "../images/pin.png";
import { Link } from 'react-router-dom';

function Nephrology() {
  return (
    <div>
      <h2><i> <center>Nephrology Specialists</center></i></h2>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Michael Johnson</b></h5>
          <p className="card-text">
            MBBS (1998), MD Nephrology (2003)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} className="pe-2" width="30" />: 18 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Kidney Street, Nephroville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Michael Johnson</b></h5>
          <p className="card-text">
            MBBS (1998), MD Nephrology (2003)<br />
            Registration no: 1234<br />
            Language: English<br />
            <img src={award} className="pe-2" width="30" />: 18 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 123 Kidney Street, Nephroville
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
      {/* Add more Nephrology specialists here */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={image1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"><b>Dr. Emily Smith</b></h5>
          <p className="card-text">
            MBBS (1995), MD Nephrology (2000)<br />
            Registration no: 5678<br />
            Language: English, Spanish<br />
            <img src={award} className="pe-2" width="30" />: 23 Years of experience<br />
            <img src={pin} className="pe-2" width="30" />: 456 Kidney Avenue, NephroCare City
          </p>
          <Link to="/register" className="btn">Book Appointment</Link>
        </div>
      </div>
    </div>
  );
}

export default Nephrology;
