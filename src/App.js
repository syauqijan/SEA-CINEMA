import './App.css';
import './Styles/Landingpage.css';
import React, { useState, useRef} from "react";

import CustomCarousel from './Components/Slider';
import Movies from './Components/Movies';
import HalamanSignin from './Page/SigninPage';
import Slider from './Components/Slider';
import Dashboard from './Page/Dashboard';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Movieslider from './Components/Movieslider';

function App() {
  let myBalance = 500000;
  let myBalance_convert = JSON.stringify(myBalance);
  localStorage.setItem("myBalances", myBalance_convert);

  return (
    <div>
      <div className='myBG'>

        
        <Dashboard/>
        
      {/* <Navigation/>
      <CustomCarousel/> */}
      {/* <Movies/> */}
      {/* <HalamanSignin/> */}
      </div>
    </div>
  );
}

export default App;
