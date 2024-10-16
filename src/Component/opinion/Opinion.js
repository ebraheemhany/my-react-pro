import React from "react";
import "./opinion.css";
import imgOne from "../clink/opinon-img.jpg";
import imgTow from "../clink/ooo.jfif";
import imgThree from "../clink/rrrr.jfif";
import imgFour from "../clink/uuu.jfif";
import imgFive from "../clink/hhhhhh.jfif";
import mainImg from "../clink/main.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// استيراد الوحدات مباشرة
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
export default function Opinion() {
  return (
    <div className="opinion">
      <div className="container">
        <div className="row">
          <h5>Testimonial</h5>
          <h6>
            Testimonial See What Are The Patients <br></br> Saying About us
          </h6>
          <div className="col-md-6 col-ms-6">
            <div className="left-section">
              <img className="main-img" src={mainImg} alt="586" />
              <ul>
                <li>
                  <a href="/">
                    <img src={imgOne} alt="..." />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={imgTow} alt="..." />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={imgThree} alt="..." />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={imgFour} alt="..." />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={imgFive} alt="..." />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src={imgFive} alt="..." />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-ms-6">
            <div className="right-section">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]} // إضافة الوحدات هنا
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }} 
                
              >
                <SwiperSlide>
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting
                    </p>
                    <h2>Jou Doin</h2>
                    <h4>PATIENT</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting
                    </p>
                    <h2>Jou Doin</h2>
                    <h4>PATIENT</h4>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting
                    </p>
                    <h2>Jou Doin</h2>
                    <h4>PATIENT</h4>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
