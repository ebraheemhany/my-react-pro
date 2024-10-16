import React from 'react'
import './Error.css';
import Banner from '../Banner/Banner';
export default function Error() {
  return (
   <>
     <Banner title="Page Not Found" smtitle=" Not Found" />
<div className='error'>
    <div className='err-content'>
      <div className='err-titlt'>
        4
        <span></span>
        4
        </div>
        <h3>The Page you were looking for, couldn't be found.</h3>  
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div className='err-ptn'>
            <button><a href='/' >Back</a></button>
            <button><a href='/'>Back to Home</a></button>
        </div>
    </div>
</div>

   </>
  )
}
