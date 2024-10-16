import React from 'react'
import './AboutUS.css';
import Banner from '../Banner/Banner';
import About from '../about/About';
import SlideCard from '../slide-card/SlideCard';

export default function AboutUs() {
  return (
<>
<Banner smtitle="About Us" title="About Us" />
<About />
<div className='About-content'>
<div className='container'>
  <div className='caards'>
         
        <div className='caard'>
               <h1>120</h1>
               <h3>Years With You</h3>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
          </div>    
        <div className='caard'>
               <h1>400</h1>
               <h3>Awards</h3>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
          </div>    
        <div className='caard'>
               <h1>250</h1>
               <h3>Doctors</h3>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
          </div> 
       
        <div className='caard'>
            
              <h1>800</h1>
               <h3>Satisfied Client</h3>
                <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
              </div>
          </div>    
  </div>
</div>

<div className='sec-Ourdoc'>
  <div className='container'>
    <h5>Our Doctor</h5>
    <h3>Meet Best Doctors</h3>
  <div className='caards2'>
    <div className='caard2'>
   <img src='https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg' alt='...' />
  <h2>Dr. David Benjamin</h2>
  <h6>Cardiologist</h6>
  <div className='icon'>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin"></i>
  </div>
    </div>

    <div className='caard2'>
   <img src='https://13sick.com.au/wp-content/uploads/2023/11/Step4.webp' alt='...' />
  <h2>Dr. David Benjamin</h2>
  <h6>Cardiologist</h6>
  <div className='icon'>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin"></i>
  </div>
    </div>

    <div className='caard2'>
   <img src='https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg' alt='...' />
  <h2>Dr. David Benjamin</h2>
  <h6>Cardiologist</h6>
  <div className='icon'>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin"></i>
  </div>
    </div>

  </div>

  </div>
</div>
<SlideCard />
</>
  )
}
