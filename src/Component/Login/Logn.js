import React from 'react'
import './Logn.css';
import LogoImg from '../clink/logo-1.png';
import { Link } from 'react-router-dom';
export default function Logn() {
  return (
  <>
<div id='Logn' className='logn'>
    <div className='logn-content'>
    <img src={LogoImg} alt='5454' />
     <input type='text' placeholder='Your name' />
    <input type='password' placeholder='password' />
    <button className='loogn'><Link to={'/'}>Login</Link></button>
    <h5>Forget Password</h5>
    <p>Dont have any account?</p>
<button className='rages'><Link to={'/Ragister'}>Register</Link> </button>
    </div>
</div>

  </>
  )
}
