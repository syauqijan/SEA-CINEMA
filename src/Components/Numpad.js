import React, { useState } from "react";

const Numpad = ({ onNumberClick, onClearClick, onDeleteClick }) => {
  const [numbers, setNumbers] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

  const handleNumberClick = (number) => {
    onNumberClick(number);
  };

  return (
    <div className="numpad">
      <div className="numpad-row">
        {numbers.map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="numpad-row">
        <button onClick={onClearClick}>Clear</button>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default Numpad;
