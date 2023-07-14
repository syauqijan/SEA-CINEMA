import React from "react";
import "../Styles/Footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <p>Join our newsletter and be the first to know about new releases, exclusive promotions, and much more.</p>
          <p>Enter your email below to enlist!</p>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Your email address" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div className="footer-center">
      <div className="footer-support">
        <p>SEA CINEMA SUPPORT</p>
        <p>E-MAIL: <a className="mailto-link" href="mailto:HELP@SEA.CINEMA">HELP@SEA.CINEMA</a></p>
      </div>
      <div className="footer-follow">
        <p>FOLLOW US</p>
        
          <InstagramIcon className="social-icons"/>
          <FacebookIcon className="social-icons"/>
          <YouTubeIcon className="social-icons"/>
          <TwitterIcon className="social-icons"/>
        
      </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SEA CINEMA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
