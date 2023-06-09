import React, { useState } from "react";
import { VscCompassActive } from "react-icons/vsc";
import Navbar from "./Navbar";

export default function Head() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavClick = () => {
    setShowNavbar(prev=>!prev);
  };

  return (
    <div className="container-fluid a" id="Head">
      <div className="nav ">
        <button className="button" onClick={handleNavClick}>
          <div className="text-centre NavBar">
            <VscCompassActive /> Nav
          </div>
        </button>
      </div>

      <span className="loader">Welcome</span>
      <div className="c">
        <h1>
          Gadget
          <br />
          House
        </h1>
      </div>
      <a href="#Services" className="button more">
        Learn More
      </a>

      {showNavbar && <Navbar handleNavClick={handleNavClick}/>}
    </div>
  );
}
