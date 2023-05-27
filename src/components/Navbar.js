import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TbDeviceTvOld } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import { AiOutlineAliwangwang } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="glass" id="Navbar">
            <div class="cancel-button">
              <button class="cancel-btn" onclick="scrollToHead()">
                Cancel
              </button>
            </div>
            <div class="d-flex justify-content-center">
              <div class="navv">
                <div class="row">
                  <div class="col-md-6 text-center">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <AiFillHome />
                      </span>{" "}
                      Home
                    </a>
                  </div>
                  <div class="col-md-6 text-center">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <TbDeviceTvOld />
                      </span>{" "}
                      Gadgets
                    </a>
                  </div>
                  <div class="col-md-6 text-center py-5">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <TbWorld />
                      </span>{" "}
                      Web Services
                    </a>
                  </div>
                  <div class="col-md-6 text-center py-5">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <AiOutlineAliwangwang />
                      </span>{" "}
                      About Us
                    </a>
                  </div>
                  <div class="col-md-6 text-center">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <IoPeopleOutline />
                      </span>{" "}
                      Contact Us
                    </a>
                  </div>
                  <div class="col-md-6 text-center">
                    <a href="/" class="d-block">
                      <span class="icon1">
                        <BsCameraVideo />
                      </span>{" "}
                      Videos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
