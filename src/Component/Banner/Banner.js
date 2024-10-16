import React from 'react'
import './Banner.css';
import { Link } from 'react-router-dom';
import BottomImg from '../clink/swim.png';

export default function Banner(props) {
  return (
   <section>
    <div className='banner'>
<div className='container'>
    <div className='row'>
        <div className='col-lg-12 col-md-12'>
            <h2>{props.title}</h2>
            <li>
                <Link to={'/'} >
                <i class="fa-solid fa-house"></i> Home
                
                </Link>
                / {props.smtitle}
            </li>

            <div className='bottom-img'>
                     <img src={BottomImg} alt='....' />
            </div>
        </div>
    </div>

</div>



    </div>

   </section>
  )
}
