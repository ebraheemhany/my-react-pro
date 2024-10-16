import React from 'react'
import './Footer.css';
import FooterLogo from '../clink/logo-1.png';
import FaceBook from '../clink/facebook.png';
import Twiter from '../clink/twiter.png';
import Instegram from '../clink/instegram.png';
import Linked from '../clink/linked.png';
export default function Footer() {
  return (
  <footer>
<div className='container'>
    <div className='row'>
        <div className='col-md-3 col-sm-6'>
             <img className='footer-logo' src={FooterLogo} alt='858' />
             <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
             <div className='footer-context'>
                   <div className='footer-icon'>
                   <i class="fa-solid fa-phone"></i>
                   </div>
                   <div className='footer-text'>
                    <h6>Contact Us</h6>
                    <h4>+01 123 456 7890</h4>
                   </div>

             </div>

        </div>
        <div className='col-md-3 col-sm-6'>
<h2>Quick Links</h2>
<ul>
    <li><a href='/' >About Us</a></li>
    <li><a href='/' >Services</a></li>
    <li><a href='/' >Booking</a></li>
    <li><a href='/' >Faq's</a></li>
    <li><a href='/' >Blogs</a></li>
    <li><a href='/' >Out Team</a></li>

</ul>
        </div>
        <div className='col-md-3 col-sm-6'>
<h2>Our Service</h2>
<ul>
    <li><a href='/'>Dental Care</a></li>
    <li><a href='/'>Cardiac Clinic</a></li>
    <li><a href='/'>Massege Therapy</a></li>
    <li><a href='/'>Cardiology</a></li>
    <li><a href='/'>Precise Diagnosis</a></li>
    <li><a href='/'>Abmbulance Services</a></li>
</ul>

        </div>
        <div className='col-md-3 col-sm-6'>
<h2>Subcribe</h2>
<form>
<input type='email' placeholder='Email Address' />
<button>Subscribe Now</button>
</form>
<ul className='social '>
    <li><a href='/'><img src={FaceBook} alt='892' /></a></li>
    <li><a href='/'><img src={Twiter} alt='892' /></a></li>
    <li><a href='/'><img src={Instegram} alt='892' /></a></li>
    <li><a href='/'><img src={Linked} alt='892' /></a></li>
</ul>
        </div>


    </div>
</div>


        
            
            <div className='footer-line'>

            </div>
            <hr></hr>
            <div className='footer-email'>
                <p>Copyright © 2024 Design & Developed by <span>Ibraheem Hany</span></p>
            </div>
      



  </footer>
  )
}
