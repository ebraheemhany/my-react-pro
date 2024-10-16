import React from 'react'
import './Booking.css';
import Banner from '../Banner/Banner';
export default function Booking() {
  return (
    <>
   
    <Banner title="Booking" smtitle="Booking" />
    <div className='booking'>
   <div className="from">
            <h1>Book Appointment</h1>
       

<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Seleety Department:</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Seleety Doctor:</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>


         

           <input type="name" placeholder="Your name" />
           <input type="number" placeholder="phone number" />
          <input type="number" placeholder="mm/dd/yy" />
               <button >Appointment Now</button>
          
        </div>
    </div>
    </>
  )
}
