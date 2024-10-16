

import React from 'react';
import './SlideCard.css';
import { useState } from 'react';
import Data from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// استيراد الوحدات مباشرة
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function SlideCard() {
  const [state, setState] = useState(Data);


  return (
    <div className='slide-card'>
      <div className='container'>
<h5>Latest News</h5>
<h2>Our Latest News</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]} // إضافة الوحدات هنا
          spaceBetween={50}
          slidesPerView={3}
    
          loop={true}

          breakpoints= {{
           
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
           
            
            840: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {state.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="content">
                <img className='main' src={slide.Image} alt={slide.title} />
<div className='title'>
  <div  className='img_name'>
    <img className='imgTow' src={slide.image2} alt='...' />
    <h3>{slide.title}</h3>
  </div>
  <div className='right-sec' >
    <i class="fa-regular fa-calendar-days"></i><span>21 July 2024</span>

  </div>
</div>
<p>{slide.description}</p>

<button>Read More <span><i class="fa-solid fa-chevron-right"></i></span></button>

                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


