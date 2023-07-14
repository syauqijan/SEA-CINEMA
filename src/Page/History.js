import React, { useState } from 'react';
import "../Styles/History.css"
import Navigation from "../Components/Navbar";
const History = () => {
  const [transactions, setTransactions] = useState([]);

  // Fungsi untuk menambahkan transaksi ke dalam history
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
        <Navigation/>
      <h2>Transaction History</h2>
      {transactions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Movie Title</th>
              <th>Seat Number</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.name}</td>
                <td>{transaction.movieTitle}</td>
                <td>{transaction.seatNumber.join(', ')}</td>
                <td>{transaction.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No transactions yet.</p>
      )}
    </div>
  );
};

export default History;
