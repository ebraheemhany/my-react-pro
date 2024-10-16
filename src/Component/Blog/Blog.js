import React from "react";
import "./Blog.css";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Data from "../data";
import { useState } from "react";
export default function Blog() {
    const [card , setCard] = useState(Data)
    console.log(card)
  return (
    <>
 
      <Banner title="Blog Grid 3" smtitle="Blog Grid 3" />
      <div className="Blog-cards">
{card.map((ele) => (
 <Link to={"/"} className="Blog-card">
 <img
  src={ele.Image}
   alt=".."
   className="main"
 />
<div className="title">
 <div className="img_name">
<img className="img-person" src={ele.image2} alt="..." />
<h5>{ele.title}</h5>

 </div>
<div className="clender">
<i class="fa-regular fa-calendar-days"></i>
  <h6>21 july 2024</h6>
</div>

</div>

<p>{ele.description}</p>
<button >Red More <span><i class="fa-solid fa-chevron-right"></i></span></button>
</Link>

))}


       
      </div>
    </>
  );
}
