import React, { useState, useContext, useEffect } from "react";
import "../Styles/Topup.css";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Button } from "@mui/material";
import Numpad from "./Numpad";

const TopUp = ({ handleTopUp, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showNumpad, setShowNumpad] = useState(false);
  const [myBalance, setMyBalance] = useState(0);

  useEffect(() => {
    // Mendapatkan nilai myBalance dari localStorage saat komponen dimuat
    const balance = localStorage.getItem("myBalances");
    if (balance) {
      setMyBalance(parseInt(balance));
    }
  }, []);

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = () => {
    setShowNumpad(true);
  };

  const handleNumberClick = (number) => {
    setCustomAmount((prevAmount) => prevAmount + number);
  };

  const handleClearClick = () => {
    setCustomAmount('');
  };

  const handleDeleteClick = () => {
    setCustomAmount((prevAmount) => prevAmount.slice(0, -1));
  };

  const handleTopUpClick = () => {
    if (selectedAmount) {
      const newBalance = myBalance + parseInt(selectedAmount);
      setMyBalance(newBalance);
      alert("Thank you! Your balance has been topped up.");
      onClose();
      // Simpan nilai myBalance ke localStorage
      localStorage.setItem("myBalances", newBalance);
    } else if (customAmount) {
      const newBalance = myBalance + parseInt(customAmount);
      setMyBalance(newBalance);
      alert("Thank you! Your balance has been topped up.");
      onClose();
      // Simpan nilai myBalance ke localStorage
      localStorage.setItem("myBalances", newBalance);
    } else {
      alert('Please select or enter an amount for top-up.');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <Button className="exit-button" color="inherit" onClick={onClose} size="large">
          <CancelRoundedIcon />
        </Button>
        <h2 className="titlePopup">SEA CINEMA</h2>
        <div>
          <h2>Top Up Balance</h2>
          <div>
            <p>Select an amount:</p>
            <div>
              <button
                className={`top-up-amount ${selectedAmount === '50000' ? 'selected' : ''}`}
                onClick={() => handleSelectAmount('50000')}
              >
                50000 IDR
              </button>
              <button
                className={`top-up-amount ${selectedAmount === '100000' ? 'selected' : ''}`}
                onClick={() => handleSelectAmount('100000')}
              >
                100000 IDR
              </button>
              <button
                className={`top-up-amount ${selectedAmount === '200000' ? 'selected' : ''}`}
                onClick={() => handleSelectAmount('200000')}
              >
                200000 IDR
              </button>
            </div>
          </div>
          <div>
            <p>Or enter custom amount:</p>
            <input
              type="text"
              value={customAmount}
              onChange={() => {}}
              onClick={handleCustomAmount}
              placeholder="Enter custom amount"
            />
          </div>
          {showNumpad && (
            <Numpad
              onNumberClick={handleNumberClick}
              onClearClick={handleClearClick}
              onDeleteClick={handleDeleteClick}
            />
          )}
          <button className="topUpButton" onClick={handleTopUpClick}>Top Up</button>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
