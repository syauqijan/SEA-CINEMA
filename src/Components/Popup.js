import React, { useState, useContext, useEffect } from "react";
import "../Styles/Popup.css";
import {addTransaction} from "../Page/History";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
const PopUp = ({ onClose, ageRatingRef, movieTitleRef }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const maxTickets = 6;
    const ticketPrice = 50000;
    const [myBalance, setMyBalance] = useState(0);
    useEffect(() => {
      // Mendapatkan nilai myBalance dari localStorage saat komponen dimuat
      const balance = localStorage.getItem("myBalances");
      if (balance) {
        setMyBalance(parseInt(balance));
      }
    }, []);
    // let balance = JSON.parse(localStorage.getItem("myBalances"));
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
    const ageRating = ageRatingRef.current.textContent;
    const handleBuyTickets = () => {
      let minimumAge;
      
      // Tentukan minimum usia berdasarkan age rating film
      switch (ageRating) {
        case 'R':
          minimumAge = 17;
          break;
        case 'G':
          minimumAge = 0;
          break;
        case 'PG-13':
          minimumAge = 13;
          break;
        default:
          minimumAge = 0;
      }
    
      if (age < minimumAge) {
        alert("You must be "+minimumAge + " years old to watch this film!");
      } else {
        setShowPayment(true);
      }
    };
    const movieTitle = movieTitleRef.current.textContent
  
    const handlePayNow = () => {
      const totalPrice = selectedSeats.length * ticketPrice;
    
      if (myBalance >= totalPrice) {
        const newBalance = myBalance - totalPrice;
        setMyBalance(newBalance);
        console.log(myBalance);
        alert("Thank you! your payment is successful");
        onClose();
        // Simpan nilai myBalance ke localStorage
        localStorage.setItem("myBalances", newBalance);
        const transaction = {
          name: name,
          movieTitle: movieTitle,
          seatNumber: selectedSeats.map((seat) => seat + 1),
          totalPrice: totalPrice,
        };
    
        

        // Lakukan tindakan pembayaran atau redireksi ke halaman pembayaran
      } else {
        alert("Insufficient balance. Please top up your balance.");
      }
      
      
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
              <p>Movie Title: {movieTitle}</p>
              <p>Seat Number: {selectedSeats.map((seat) => seat + 1).join(", ")}</p>
              <p>Total Price: IDR {selectedSeats.length * ticketPrice}</p>
              <p>Balance: IDR {myBalance}</p>
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
  