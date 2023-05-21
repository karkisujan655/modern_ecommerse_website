import React from "react";
import { VscCompassActive } from "react-icons/vsc";

export default function Head() {
  return (
    <div class="container-fluid a">
      <div className="nav ">
        <a href="#Navbar" className="button ">
          <div className="text-centre NavBar">   
          <VscCompassActive /> Nav
          </div>
        </a>
      </div>

      <span className="loader">Welcome</span>
      <div className="c">
        <h1>
          Gadget
          <br />
          House
        </h1>
      </div>
      <a href="#Navbar" class="button more">Learn More</a>
    </div>
  );
}
