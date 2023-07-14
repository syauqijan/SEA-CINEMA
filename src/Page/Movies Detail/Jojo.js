
import React, { useState, useRef } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import jojo from "../../Assets/list/jojo.webp";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Jojo = () => {
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
                <img src={jojo} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>JOJO RABBIT</h1>
                <hr className="separator"/>
                <p>A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.</p>
                <h4>Cast</h4>
                <p>Roman Griffin Davis, Taika Waititi, Thomasin McKenzie, Scarlett Johansson </p>
                <h4>Age Rating</h4>
                <p ref={ageRatingRef}>PG-13</p>
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

export default Jojo


