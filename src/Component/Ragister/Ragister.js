import React from 'react'
import './Ragister.css';
import LogoImg from '../clink/logo-1.png';
import { Link } from 'react-router-dom';
export default function Ragister() {
  return (
 <>
 <div className='ragister'>
    <div className='ragister-content'>
    <img src={LogoImg} alt='5454' />
     <input type='text' placeholder=' name' />
     <input type='email' placeholder='email' />
     <input type='text' placeholder='userName' />
    <input type='password' placeholder='password' />
    <button className='loogn'><Link to={'/'}>Register Now</Link></button>
 
    <p>Already have an account?</p>
<button className='rages'><Link to={'/Logn'} href='/'>Login</Link> </button>
    </div>
</div>
 </>
  )
}
