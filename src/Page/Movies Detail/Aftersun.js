
import React, { useState, useRef} from "react";
import Navigation from "../../Components/Navbar";
import { Link } from "react-router-dom";
import aftersun from "../../Assets/list/aftersun.jpg";
import PopUp from "../../Components/Popup";
import "../../Styles/MoviesDetail.css";


const Aftersun = () => {
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
                <img src={aftersun} alt="Movie Poster" width="250px" height="350px" style={{marginLeft:"50px", marginTop:"15px"}}/>
                </div>
                <div className="col-md-8">
                <h1 ref={movieTitleRef}>AFTERSUN</h1>
                <hr className="separator"/>
                <p>At a fading vacation resort, 11-year-old Sophie treasures rare time together with her loving and idealistic father, Calum. As a world of adolescence creeps into view, beyond her eye Calum struggles under the weight of life outside of fatherhood. Twenty years later, Sophie’s tender recollections of their last holiday become a powerful and heartrending portrait of their relationship, as she tries to reconcile the father she knew with the man she didn’t.</p>
                <h4>Cast</h4>
                <p>Paul Mescal, Sally Messham, Frankie Corio, Celia Rowlson-Hall </p>
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

export default Aftersun


