import React from 'react';

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="glass" id="Navbar">
            <div className="d-flex justify-content-center ">
              <div className="col-md-12 text-center ">
                <div className="navv">
                <a href="/" className="d-block">Home</a>
                <a href="/" className="d-block">Gadgets</a>
                <a href="/" className="d-block">Web Services</a>
                <a href="/" className="d-block">About Us</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
