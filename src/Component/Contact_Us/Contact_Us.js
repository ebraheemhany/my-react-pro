import React from "react";
import Banner from "../Banner/Banner";
import './Contact_Us.css';
export default function Contact_Us() {
  return (
    <>
      <Banner title="Contact Us" smtitle="Contact Us" />
      <section className="contact-us">
        <div className="contianer">
          
            
              <div className="form-control">
                <input type="name" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <input type="Number" placeholder="Phone Number" />
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                >
                  <option selected>Seleety Doctor:</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea placeholder="Your Message" />
                <button type="submit">Send</button>
              
            </div>
            
            <div className="right-section">
            <h4>Contact Us For Any Informations</h4>
              <h5>
                <i class="fa-solid fa-map-location-dot"></i> Location
              </h5>
              <span className="line"></span>
              <p>
               2005 Stokes Isle Apt.
                896, Venaville 10010, USA
              </p>
              <h5><i class="fa-regular fa-address-card"></i> Email & Phone</h5>
              <span className="line"></span>
<p>info@yourdomain.com
(+68) 120034509</p>
<h5><i class="fa-solid fa-globe"></i> Follow Us</h5>
<span className="line"></span>
<div className="icon">
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin"></i>
<i class="fa-brands fa-instagram"></i>


            </div>
            </div>
          </div>
      
      </section>
    </>
  );
}
