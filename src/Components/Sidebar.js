import React, { useState, useRef} from "react";
import logo from "../Assets/logosc.png";
import profile from "../Assets/profile.png";
import "../Styles/Sidebar.css";
import WalletIcon from '@mui/icons-material/Wallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Icon, IconButton, SvgIcon, Avatar } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ScriptHTMLAttributes } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TopUp from "./Topup";




const Sidebar = ({ onClose}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showTopUp, setShowTopUp] = useState(false);

    const handleTopUp = () => {
      setShowTopUp(true);
    };

    const handleTopUpClose = () => {
      setShowTopUp(false);
    };

    const handleMenuOpenIconClick = () => {
      setShowSidebar(false);
    };
  
    const handleOutsideClick = (event) => {
      if (showSidebar && !event.target.closest(".sidebar")) {
        setShowSidebar(false);
      }
    };
    
    const [myBalance, setMyBalance] = useState();
    console.log("myBalance", myBalance);
    const balance = localStorage.getItem("myBalances");

    useEffect(() => {
        // Mendapatkan nilai myBalance dari localStorage saat komponen dimuat
        if (balance) {
          setMyBalance(parseInt(balance));
        }
        console.log("balance : ",balance);
      }, [balance]);

    
    useEffect(() => {
      // Menambahkan event listener saat komponen dimuat
      document.addEventListener("mousedown", handleOutsideClick);
  
      // Membersihkan event listener saat komponen dibongkar
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
    
  return (
    
    <nav className={`sidebar ${showSidebar ? "show" : ""}`}>
        <header>
        <div className='top-icon'>
          <MenuOpenIcon className="menu-icon" sx={{ fontSize: 35}} onClick={onClose} />
              
          </div>
        </header>
        <div className="profile-card">
            <div className="card-body">
                <div className="profile-info">
                <div className="profile-details">
                    <div >
                        <AccountCircleIcon sx={{ fontSize: 50}} />
                    </div>
                    <div className="profile-text">
                        <div className="profile-name">Syauqi</div>
                        <div className="profile-phone">+62 85159933</div>
                    </div>
                </div>
                <hr className="divider"/>
                
                <div className="profile-balance-text">Balance</div>
                    <div className="balance-details">
                        <span >
                            <WalletIcon />
                        </span>
                        <div className="profile-balance"> {myBalance}IDR</div>
                        <AddCircleIcon className="add-icon" onClick={handleTopUp} sx={{ fontSize: 27}}/>
                        {showTopUp && (<TopUp onClose={handleTopUpClose} />) }
                    </div>
                </div>
            </div>
        </div>

        <div class="menu-bar">
            <div class="menu">
                
                <ul class="menu-links">
                    <li class="nav-link">
                        <Link to = "/dashboard">
                            
                            <span class="text nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            
                            <span class="text nav-text">Movies</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            
                            <span class="text nav-text">History</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            
                            <span class="text nav-text">Logout</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
      
    </nav>

  );
};

export default Sidebar;
