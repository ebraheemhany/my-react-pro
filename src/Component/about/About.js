import React from 'react';
import './About.css';
import aboutOne from '../clink/about-1.jpg';
import aboutTow from '../clink/about-2.jpg';
import aboutThree from '../clink/about-3.jpg';



export default function About() {
  return (
   <div className='about'>
<div className='conta'>
      <div className='about-conte-left'>
   <div className='all'>
     <img className='one' src={aboutOne} alt='145' />
      <img className='tow' src={aboutTow} alt='poi' />
      <img className='three' src={aboutThree} alt='897' />
      <div className='num'>
        20
          <span>Year Experience</span>

      </div>
   </div>





      </div>
        <div className='about-conte-right'>
          <div className='text'>
          <h4>About Us</h4>
           <h2>The Great Place Of Medical Hospital Center</h2>
            <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
               <div className='icon_text'>
                    <div className='a'>
                    <div className='icon
                    '><i class="fa-solid fa-truck-medical"></i></div>
                      <div><p>Emergency Help</p></div>
                    </div>

                   <div className='b'>
                  <div className='icon'> <i class="fa-solid fa-bed-pulse"></i></div>
                   <div><p>Qualified Doctors</p></div>
                   </div>
                   <div className='c'>
                   <div className='icon'><i class="fa-brands fa-drupal"></i></div>
                  <div> <p>Best Professionals</p></div>
                   </div>
                   <div className='d'>
                   <div className='icon'><i class="fa-solid fa-syringe"></i></div>
                   '
                 <div>  <p>Medical Treatment</p></div>
                   </div>
          </div>
          <button>Read More</button>

               </div>

        </div>

</div>


   </div>
  )
}
