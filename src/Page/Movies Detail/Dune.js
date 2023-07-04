
import React, { useState } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import dune from "../../Assets/dune.jpg";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Dune = () => {
    const [showPopUp, setShowPopUp] = useState(false);

    // Fungsi untuk menampilkan pop-up
    const handleBuyTicket = () => {
        setShowPopUp(true);
    };

    // Fungsi untuk menutup pop-up
    const handleClosePopUp = () => {
        setShowPopUp(false);
    };

    return (
        <div className="detailBody">
            <Navigation/>
            <div className="containerDetail">
            <div className="row">
                <div className="col-md-3">
                <img src={dune} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1>Dune</h1>
                <hr className="separator"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>Age Rating</h3>
                <p>PG-13</p>
                <h3>Ticket Price</h3>
                <p>$10</p>
                <button className="btn btn-primary" onClick={handleBuyTicket}>Buy Ticket</button>

                    {showPopUp && <PopUp onClose={handleClosePopUp} />}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dune


