import React from "react";
import Navigation from "../Components/Navbar";
import Slider from "../Components/Test";
import Movies from "../Components/Movies";

const Dashboard = () => {
    return (
        <div>
            <Navigation/>
            <Slider/>
            <Movies/>
        </div>
    )
}

export default Dashboard