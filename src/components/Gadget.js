import React from "react";

export default function Gadget() {
  return (
    <div class="container-fluid a">
      <div className="row">
        <div className="col-lg-5 mx-auto py-5 text-center">
          <div className="se">
            <h1>Gadgets</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ">
          <div class="box text-center">
            <div class="item">
              <img src="" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button class="buy-now">Buy Now</button>
            <div class="cart"></div>
          </div>
        </div>
        <div className="col-lg-4 text-center">hello</div>
        <div className="col-lg-4 text-center">hello</div>
      </div>
    </div>
  );
}
