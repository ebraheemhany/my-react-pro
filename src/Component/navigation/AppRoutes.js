import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../about/About';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Slide from '../slide/Slide';
import Navbar from '../nav/Navbar';
import Home from '../../pages/Home';
import ContactUs from '../Contact_Us/Contact_Us';
import AboutUs from '../AboutUs/AboutUs';
import OurTeam from '../Our-Team/OurTeam';
import Fqs from '../Fqs/Fqs';
import Booking from '../Booking/Booking';
import Error from '../Error/Error';
import Logn  from '../Login/Logn';
import Ragister from '../Ragister/Ragister';
import ServesBage from '../ServesBage/ServesBage';
import Details from '../Details/Details';
import Blog from '../Blog/Blog';
import BlogDetails from '../BlogDetals/BlogDetails';
export default function AppRoutes() {
  return (
    <>
   
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact_Us' element={<ContactUs />} />
        <Route path='/About_Us' element={<AboutUs />} />
        <Route path='/OurTeam' element={<OurTeam />} />
        <Route path='/Fqs' element={<Fqs/>} />
        <Route path='/Booking' element={<Booking />} />
        <Route path='/Error' element={<Error />} />
        <Route path='/Logn' element={<Logn />} />
        <Route path='/Ragister' element={<Ragister />} />
        <Route path='/ServesBage' element={<ServesBage />} />
        <Route path='/Details' element={<Details />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/BlogDetails' element={<BlogDetails />} />
    </Routes>
    <Footer />
  




    </>
  )
}
