
import React, { useState, useRef } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import budapest from "../../Assets/list/budapest.webp";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Budapest = () => {
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
                <img src={budapest} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>THE GRAND BUDAPEST HOTEL</h1>
                <hr className="separator"/>
                <p>The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.</p>
                <h4>Cast</h4>
                <p>Ralph Fiennes, Mathieu Amalric, Jeff Goldblum, Bill Murray </p>
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

export default Budapest


