
import React, { useState, useRef} from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import dune from "../../Assets/dune.jpg";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Dune = () => {
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
                <img src={dune} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>DUNE</h1>
                <hr className="separator"/>
                <p>Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity’s greatest potential-only those who can conquer their fear will survive.</p>
                <h4>Cast</h4>
                <p>Timothée Chalamet, Zendaya, Stephen McKinley Henderson, Oscar Isaac </p>
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

export default Dune


