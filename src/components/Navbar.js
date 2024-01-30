import React, { useState } from 'react';
import './Navbar.css';
import logoImage from '../Images/ayslogo.png';

const Navbar = ({ onLogout, loggedInUser }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <div className='logoimg'>
          <img src={logoImage} alt="logo" width='160' height='120' viewBox='0 0 160 120' />
        </div>
        <div className="navbar">
          <ul id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            {loggedInUser && <li><button onClick={onLogout}>Logout</button></li>}
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
