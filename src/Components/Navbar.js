import React, { useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../Assets/logosc.png"
import profile from "../Assets/profile.png"
import '../Styles/Navbar.css';
import Sidebar from "../Components/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from "react";

const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuIconClick = () => {
    setShowSidebar(true);
  };

  const handleMenuOpenIconClick = () => {
    setShowSidebar(false);
  };

  const handleOutsideClick = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    // Menambahkan event listener saat komponen dimuat
    document.addEventListener("mousedown", handleOutsideClick);

    // Membersihkan event listener saat komponen dibongkar
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className='navbarBody'>
      <Navbar className="navbar-content" variant="dark">
        <div className='top-icon'>
          <MenuIcon
            className="menu-icon"
            sx={{ fontSize: 35 }}
            onClick={handleMenuIconClick}
          />
          <img
            src={logo}
            width="50"
            height="50"
            className="logosc"
            alt="logo"
          />
          <div className="text-title">
            SEA CINEMA
          </div>
        </div>
      </Navbar>

      {showSidebar && <Sidebar onClose={handleMenuOpenIconClick} />}
    </div>
  );
};

export default Navigation;
