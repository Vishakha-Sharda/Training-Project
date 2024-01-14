// ReceiptPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import "../styles/receipt.css"
function ReceiptPage() {
    const { appointmentDetails } = useParams();
    const navigate = useNavigate();
  
    if (!appointmentDetails) {
      // Handle case where no appointment details are found in URL parameters
      navigate('/'); // Redirect to home or another page
      return null;
    }
  
    const parsedDetails = JSON.parse(appointmentDetails);
 
    console.log(parsedDetails,"Pd")
  // You can customize the receipt layout based on your requirements
  return (
    <div className="receipt-container">
      <h2>Appointment Receipt</h2>
        <div className="receipt-details">
            <div>
            <strong>Name:</strong> {parsedDetails.name}
            </div>
            <div>
            <strong>Email:</strong> {parsedDetails.email}
            </div>
            <div>
            <strong>Age:</strong> {parsedDetails.age}
            </div>
            <div>
            <strong>Gender:</strong> {parsedDetails.gender}
            </div>
            <div>
            <strong>Disease:</strong> {parsedDetails.disease}
            </div>
            <div>
            <strong>Blood Group:</strong> {parsedDetails.bloodGroup}
            </div>
            <div>
            <strong>Phone Number:</strong> {parsedDetails.phoneNumber}
            </div>
            <div>
            <strong>Date:</strong> {parsedDetails.date}
            </div>
            <div>
            <strong>Time:</strong> {parsedDetails.time}
            </div>
            <div>
            <strong>Selected Doctor:</strong> {parsedDetails.selectedDoctor}
            </div>
        </div>
        <div className="download-section">
            {/* Download link for receipt */}
            <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(parsedDetails    , null, 2)
            )}`}
            download="appointment_receipt.json"
            >
            Download Receipt
             </a>
        </div> 
    </div>
  );
}

export default ReceiptPage;



