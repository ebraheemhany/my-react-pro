import React from 'react'
import './Slide.css';
export default function Slide() {
  return (
    <div className='slide'>
        <div className='content'>
            <h3>Working Process</h3>
            <h2>How we works?</h2>
            <div className='All_slide'>
                <div className='slide_item'>
                    <h1>01</h1>
                      <h4>Make Appointmnet</h4>
                       <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                       <button>View More <span><i class="fa-solid fa-angle-right"></i></span></button>
                </div>

                <div className='slide_item active'>
                    <h1>02</h1>
                      <h4>Take Treatment</h4>
                       <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                       <button>View More <span><i class="fa-solid fa-angle-right"></i></span></button>
                </div>

                <div className='slide_item'>
                    <h1>03</h1>
                      <h4>Registration</h4>
                       <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                       <button>View More <span><i class="fa-solid fa-angle-right"></i></span></button>
                </div>
            </div>

        </div>
    </div>
  )
}
