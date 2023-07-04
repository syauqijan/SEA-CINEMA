import React, { useState } from "react";
import "../Styles/Popup.css";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
const PopUp = ({ onClose }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const maxTickets = 6;
    const ticketPrice = 10;
    const balance = 100;
  
    const handleSeatSelection = (seat) => {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      } else {
        if (selectedSeats.length < maxTickets) {
          setSelectedSeats([...selectedSeats, seat]);
        }
      }
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleAgeChange = (e) => {
      setAge(e.target.value);
    };
  
    const handleNext = () => {
      setShowPersonalInfo(true);
    };
  
    const handleBuyTickets = () => {
      if (age < 13) {
        alert("Anda belum cukup umur untuk menonton film ini!");
      } else {
        setShowPayment(true);
      }
    };
  
    const handlePayNow = () => {
      // Lakukan tindakan pembayaran atau redireksi ke halaman pembayaran
    };
  
    return (
      <div className="popup">
        <div className="popup-content">
        <Button className="exit-button" color="inherit" onClick={onClose} size="large">
          <CancelRoundedIcon />
        </Button>
          <h2 className="titlePopup">SEA CINEMA</h2>
          {!showPersonalInfo && !showPayment && (
            <>
              <hr className="borderLegend"/>
              <div className="legend-container">
                <div className="legend-item">
                  <div className="legend-color available"></div>
                  <span className="legend-text">Available</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color unavailable"></div>
                  <span className="legend-text">Unavailable</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color your-seat"></div>
                  <span className="legend-text">Your Seat</span>
                </div>
              </div>
              <hr className="borderLegend"/>
              <div className="seat-container">
                {Array.from({ length: 64 }, (_, index) => (
                  <div
                    key={index}
                    className={`seat ${selectedSeats.includes(index) ? "selected" : ""}`}
                    onClick={() => handleSeatSelection(index)}
                  >
                    <span className="seat-number">{index + 1}</span>
                  </div>
                ))}
              </div>
              <div className="screen">
                <span className="screen-text">Screen</span>
              </div>
              <div className="note-container">     
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
              </div>
            </>
          )}
          {showPersonalInfo && !showPayment && (
            <>
            <div className="containerPersonal">
              <h2>Personal Information</h2>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="number" value={age} onChange={handleAgeChange} />
              </div>
              <button className="btn btn-primary" onClick={handleBuyTickets}>
                Buy Tickets
              </button>
              </div>
            </>
          )}
          {showPayment && (
            <>
              <h2>Payment Details</h2>
              <p>Name: {name}</p>
              <p>Movie Title: Movie Title</p>
              <p>Seat Number: {selectedSeats.map((seat) => seat + 1).join(", ")}</p>
              <p>Total Price: ${selectedSeats.length * ticketPrice}</p>
              <p>Balance: ${balance}</p>
              <button className="btn btn-primary" onClick={handlePayNow}>
                Pay Now
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default PopUp;
  