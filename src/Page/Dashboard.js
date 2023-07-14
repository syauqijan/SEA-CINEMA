import React, { useState } from "react";
import Navigation from "../Components/Navbar";
import Slider from "../Components/Slider";
import Movies from "../Components/Movies";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import CardSlider from "../Components/Movieslider";


const Dashboard = () => {

  return (
    <div className="myBG">
      <Navigation />
      <div className="body">

        <div>
        <Slider />
        
        <CardSlider />
        <hr className='separator-footer'/>
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
