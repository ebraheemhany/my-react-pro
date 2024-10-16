import React from "react";
import "./content.css";
import phone from "../clink/phone.png";
import contactImg from "../clink/content-img.png";
import seting from "../clink/seting.png";
import loction from "../clink/location.png";
import True from "../clink/true.png";
import like from "../clink/like.png";

export default function Content() {
  return (
    <div className="content_us">
      <div className="from_img">
        <div className="from">
          <h1>Book Appointment</h1>

          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Seleety Department:</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected>Seleety Doctor:</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <input type="name" placeholder="Your name" />
          <input type="number" placeholder="phone number" />
          <input type="number" placeholder="mm/dd/yy" />
          <button>Appointment Now</button>
        </div>
        <div className="img">
          <img className="phone" src={phone} alt="85" />
          <div className="cont">
            <img src={contactImg} alt="85" />
          </div>

          <div className="small_img">
            <img className="steting" src={seting} alt="85" />
            <img className="loction" src={loction} alt="85" />
            <img className="True" src={True} alt="85" />
            <img className="like" src={like} alt="856" />
          </div>
        </div>
      </div>
    </div>
  );
}
