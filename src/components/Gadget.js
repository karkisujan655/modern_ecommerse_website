import { BsCart4 } from "react-icons/bs";

export default function Gadget() {
  return (
    <div className="container-fluid gb" id="Gadget">
      <div className="row">
        <div className="col-lg-5 col-md-4 mx-auto py-5 text-center">
          <div className="se">
            <h1>Gadgets</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="item">
              <img src="/images/mmonitors.png" alt="" />
              <h6>New Oled Monitor 44.0"</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"> <a href=""> <BsCart4 /> </a>  </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="item">
              <img src="/images/phones.jpg" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"> <a href=""> <BsCart4 /> </a> </div>
          </div>
        </div>        
        
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="item">
              <img src="/images/buds.jpg" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"> <a href=""> <BsCart4 /> </a> </div>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="row py-5">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center py-5">
          <div className="box">
            <div className="item">
              <img src="/images/tv.jpg" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"><a href=""> <BsCart4 /> </a></div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="item">
              <img src="/images/sp.jpg" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"><a href=""> <BsCart4 /> </a></div>
          </div>
        </div>        
        
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <div className="box">
            <div className="item">
              <img src="/images/drone.webp" alt="" />
              <h6>hello This is me</h6>
            </div>
            <button className="buy-now">Buy Now</button>
            <div className="cart"><a href=""> <BsCart4 /> </a></div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}
