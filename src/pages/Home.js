import React from 'react';
import './home.css';
import headerimg from '../Component/clink/headerimg.png';
import Squre from '../Component/clink/squre.png';
import tragle from '../Component/clink/trangle.png';
import Plus from '../Component/clink/plus.png';
import cercle from '../Component/clink/cercle.png';
import Opinion from '../Component/opinion/Opinion' ;
import Swim from '../Component/clink/swim.png';
import About from '../Component/about/About';
import Slide from '../Component/slide/Slide';
import Content from '../Component/content/Content';
import SlideCard from '../Component/slide-card/SlideCard';

export default function Home() {
  return (
 <>
    <header>
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 col-lg-7 '>
                    <h1>We Provide All Health Care Solution </h1>
                   <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button><a href='/'>Read More</a></button>                 
                      <div className='header-box-1'>
                        <img src={tragle} alt='tragle' />
                      </div>
                      <div className='header-box-4'>
                         <img src={cercle} alt='cercle' />
                      </div>
                </div>
                <div className='col-lg-5 col-md-5'>
            
                    <img src={headerimg} alt='headerimg'/>
                   
                      <div className='header-box-2'>
                        <img src={Squre} alt='squre' />
                      
                      </div>
                      <div className='header-box-3'>
                      <img  src={Plus} alt='plus icon' />
                      </div>

                </div>
               
                <div className='bottom'>
                <img src={Swim} alt='photo' /> 
                </div>
            </div>

        </div>
 

    </header>
      <About />
      <Slide />
      <Content />
     {/* <Opinion /> */}
<SlideCard />

 </>
  )
}
