import React from "react";

// import link1 from "./Gadget.js";

export default function Services() {
  return (
    <div className="container-fluid b">
      <div className="row">
        <div className="col-lg-5 mx-auto py-5 text-center">
        <div className="se">
            <h1>Our Services</h1>
            </div>
          
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-6 mx-auto py-5 d-flex justify-content-center">
          <div className="book ">
            <a href="#Gadget">click Here</a>
            <div className="cover">
              <p>Gadgets</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mx-auto  py-5 d-flex justify-content-center">
          <div className="book ">
            <a href="">Click Here</a>
            <div className="cover">
              <p>IT Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 mx-auto py-5 text-center">
          <p>We are the authorized seller of Xiaomi. We sell Desktop, Laptop, Monitor, Phones and many more Gadgets.</p>
          <p>And also We develop Web Application, Mobile Application, Software and so on at a resonable pricing.</p>
        </div>
      </div>
    </div>
  );
}
