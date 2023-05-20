import React from "react";
import { VscCompassActive } from "react-icons/vsc";

export default function Head() {
  return (
    <div class="container-fluid a">
      <div className="nav">
        <button className="button" >
          <VscCompassActive /> Nav
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
      <button className="more">Learn More</button>
      </div>
  );
}
