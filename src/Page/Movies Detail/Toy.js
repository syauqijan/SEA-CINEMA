
import React, { useState, useRef } from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import toy from "../../Assets/list/toy.jpg";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Toy = () => {
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
                <img src={toy} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>TOY STORY 4</h1>
                <hr className="separator"/>
                <p>Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that’s Andy or Bonnie. But when Bonnie adds a reluctant new toy called “Forky” to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.</p>
                <h4>Cast</h4>
                <p>Tom Hanks, Joan Cusack, Jodi Benson, Patricia Arquette </p>
                <h4>Age Rating</h4>
                <p ref={ageRatingRef}>G</p>
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

export default Toy


