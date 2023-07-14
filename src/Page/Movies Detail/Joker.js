
import React, { useState, useRef } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import joker from "../../Assets/list/joker.webp";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Joker = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [ageRating, setAgeRating] = useState(""); // Tambahkan state untuk age rating

    // Fungsi untuk menampilkan pop-up
    const handleBuyTicket = (rating) => {
        setAgeRating(rating); // Set age rating berdasarkan parameter rating
        setShowPopUp(true);
    };

    // Fungsi untuk menutup pop-up
    const handleClosePopUp = () => {
        setShowPopUp(false);
    };
    const ageRatingRef = useRef(null);
    const movieTitleRef = useRef(null);

    return (
        <div className="detailBody">
            <Navigation/>
            <div className="containerDetail">
            <div className="row">
                <div className="col-md-3">
                <img src={joker} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef} >JOKER</h1>
                <hr className="separator"/>
                <p>During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</p>
                <h4>Cast</h4>
                <p>Joaquin Phoenix, Frances Conroy, Bill Camp, Robert De Niro </p>
                <h4>Age Rating</h4>
                <p ref={ageRatingRef}>R</p>
                <h4>Ticket Price</h4>
                <p>50.000 IDR</p>
                <button className="btn btn-primary" onClick={handleBuyTicket}>Buy Ticket</button>

                {showPopUp && <PopUp onClose={handleClosePopUp} ageRatingRef={ageRatingRef} movieTitleRef={movieTitleRef} />}

                </div>
            </div>
            </div>
        </div>
    )
}

export default Joker


