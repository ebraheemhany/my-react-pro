 import React from 'react'
import './BlogDetails.css'
import Banner from '../Banner/Banner'
import img from '../clink/about-2.jpg';

export default function BlogDetails() {
  return (
  <>
  <Banner title="Blog Details" smtitle="Blog Details" />
   <div className='Blog-details'>
    <div className='conta-blog'>

        <div className='left-blog'>
          <div className='content'>
            <img className='main-img' src='https://www.shutterstock.com/image-photo/dentistry-dentist-clinic-appointment-happy-600nw-2502156811.jpg' alt="...." />
          
              <div className='person-deta'>
                <div className='person'>
                  <img src={img} alt='...' />
                  <h5>Sonar Moyna</h5>
              </div>
               <div className='deta'>
               <i class="fa-regular fa-calendar-days"></i><span>19 July 2024</span>

               </div>
              </div>
              <h2>Precious Tips To Help You Get Better.</h2>
             <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>

             <div className='alert-blog'>
             <i class="fa-solid fa-quote-left"></i>
            <p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p>

             </div>
             
         <p className='xxx'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   
            <div className='img-blog'>
            <img src='https://cdn.punchng.com/wp-content/uploads/2022/01/21130029/Ceramic-Veneers1.jpg' alt='...' />
             <img src='https://www.childrenshospitals.org/-/media/images/global/rectangle/pediatric_landscape_report0624.jpg' alt='...' />
            </div>
           
               <p className='one'>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
                <p className='tow'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <div className='line-blog'></div>
              <div className='blog-shar'>
               <div className='cont'>
                 <h3>Tags :</h3>
                 <ul>
                    <li><a href='#'>Health</a></li>
                    <li><a href='#'>Growth</a></li>
                    <li><a href='#'>Life</a></li>

                 </ul>
               </div>

                <div className='icon' >
                   <h3>Share :</h3>
                    <ul>
                      <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                    </ul>

                </div>
 

              </div>
              <div className='line-blog'></div>

             <div className='coment'>
               <div className='img'>
                <img src={img} alt='..' />
               </div>
               <div className='coment-content'>
                <h3>Sonar Z. Moyna</h3>
                 <p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                 <ul>
                      <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                    </ul>
               </div>
             </div>
   
                  
                    <h2 className='comment'>8 Comments</h2>
                   
               <div className='comment-blog'>
                  <div className='title'>
                       <img src='https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg' alt='...' />
                       <div className='name'>
                              <h3>George</h3>
                              <p>MAY 09, 2021 AT 10:45 AM</p>

                       </div>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                   <button>REPLY</button>

               </div>

               <div className='comment-blog tow'>
                  <div className='title'>
                       <img src={img} alt='...' />
                       <div className='name'>
                              <h3>Falikaz</h3>
                              <p>MAY 09, 2021 AT 10:45 AM</p>

                       </div>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                   <button>REPLY</button>

               </div>

               <div className='comment-blog'>
                  <div className='title'>
                       <img src='https://www.aucmed.edu/sites/g/files/krcnkv361/files/styles/atge_3_2_crop_md/public/2021-11/large-Smile-Guy-web.jpg?h=6b55786a&itok=Wy7cQpYS' alt='...' />
                       <div className='name'>
                              <h3>Michel</h3>
                              <p>MAY 09, 2021 AT 10:45 AM</p>

                       </div>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                   <button>REPLY</button>

               </div>

               <div className='comment-blog'>
                  <div className='title'>
                       <img src='https://as2.ftcdn.net/v2/jpg/02/86/16/19/1000_F_286161980_4gTamoNPUZEgsnpLXw7KdMrpx8Ifh5wb.jpg' alt='...' />
                       <div className='name'>
                              <h3>Sonar</h3>
                              <p>MAY 09, 2021 AT 10:45 AM</p>

                       </div>
                  </div>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                  </p>
                   <button>REPLY</button>

               </div>


             <div className='add-comment'>
              <h3>Leave a Reply</h3>
              <input type='text' placeholder='author' />
              <input type='Email' placeholder='Email' />
              <textarea type="text" placeholder='Comment' />
              <button >submit</button>
              </div> 



          </div>







        </div>
        <div className='right-blog'>
<div className='ser-blog'>
  <div className='search'>
    <input type='search' placeholder='Enter Your Keywords' />
    <span><i class="fa-solid fa-magnifying-glass"></i></span>
  </div>

<div className='posts'>
<div className='post'>
<img src='https://media.istockphoto.com/id/1468678624/photo/nurse-hospital-employee-and-portrait-of-black-man-in-a-healthcare-wellness-and-clinic-feeling.jpg?s=612x612&w=0&k=20&c=AGQPyeEitUPVm3ud_h5_yVX4NKY9mVyXbFf50ZIEtQI=' alt='...' />
<div className='conte'>
<h4>Precious Tips To Help You Get Better.</h4>
<div>
  <span><i class="fa-regular fa-calendar-days"></i></span>

  21 July 2021
  </div>
</div>


</div>
<div className='line'></div>

<div className='post'>
<img src='https://img.freepik.com/premium-photo/doctor-wearing-face-mask-hospital_23-2148728324.jpg' alt='...' />
<div className='conte'>
<h4>
Ten Doubts You Should Clarify About..</h4>
<div>
  <span><i class="fa-regular fa-calendar-days"></i></span>

  21 July 2021
  </div>
</div>


</div>

<div className='line'></div>

<div className='post'>
<img src='https://media.istockphoto.com/id/1785918657/photo/portrait-of-doctor-with-smile-confidence-and-hospital-employee-with-care-support-and-trust.webp?b=1&s=612x612&w=0&k=20&c=KrXvS2nOXr3GBYHnA4B8vmIDL24CKEWgvh9l6i9nIpY=' alt='...' />
<div className='conte'>
<h4>
The 10 Steps Needed For Putting.</h4>
<div>
  <span><i class="fa-regular fa-calendar-days"></i></span>

  21 July 2021
  </div>
</div>


</div>

</div>

<div className='galery'>
<h2>Our Gallery</h2>

<div className='glary-img'>
  <img src='https://howarthplasticsurgery.com/wp-content/uploads/2023/08/2023_05_13SamandAshley4079.jpg' alt='...'/>
  <img src='https://www.shutterstock.com/image-photo/diverse-surgeons-wearing-surgical-gowns-260nw-2390616651.jpg' alt='...'/>
  <img src='https://aica.com/wp-content/uploads/2020/12/Is-There-A-Difference-Between-An-Orthopedic-Doctor-and-An-Orthopedic-Surgeon.jpg' alt='...'/>
  <img src='https://t3.ftcdn.net/jpg/06/96/38/42/360_F_696384254_JQQUUE3eomVprVaA3soh4w5FkgbAC3GF.jpg' alt='...'/>
  <img src='https://i0.wp.com/therealnews.com/wp-content/uploads/2024/04/GettyImages-1789164655-scaled.jpg?fit=2000%2C1333&ssl=1' alt='...'/>
  <img src='https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/1015934048GeneralSurgeon.jpg=ws1280x960' alt='...'/>
</div>

</div>


</div>
        </div>
      </div>
    </div>
 
  
  </>
  )
}
