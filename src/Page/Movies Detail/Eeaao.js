import React, { useState, useRef } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import every from "../../Assets/list/every.jpg";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";

const Eeaao = () => {
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
                <img src={every} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>EVERYTHING EVERYWHERE ALL AT ONCE</h1>
                <hr className="separator"/>
                <p>An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what’s important to her by connecting with the lives she could have led in other universes.</p>
                <h4>Cast</h4>
                <p>Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, James Hong </p>
                <h4>Age Rating</h4>
                <p ref={ageRatingRef}>R</p>
                <h4>Ticket Price</h4>
                <p>50.000 IDR</p>
                <button className="btn btn-primary" onClick={() => handleBuyTicket("R")}>Buy Ticket</button>
        
                
                {showPopUp && <PopUp onClose={handleClosePopUp} ageRatingRef={ageRatingRef} movieTitleRef={movieTitleRef} />}

                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Eeaao;
