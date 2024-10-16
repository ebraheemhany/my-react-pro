import React from 'react';
import './navbar.css';
import Logo from '../clink/logo-1.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  container-fluid ">
  <div className="container">
    <a className="navbar-brand" href='/'>
    <img src={Logo} alt='logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
           {/* start dropdowen => 1 */}
          
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={'/About_Us'} className="dropdown-item" >About Us</Link></li>
            <li><Link to={'/OurTeam'} className="dropdown-item" href="/">Our Team</Link></li>
            <li><Link to={'/Fqs'} className="dropdown-item" href="/">FAQ's</Link></li>
            <li><Link to={'/Booking'} className="dropdown-item" href="/">Booking</Link></li>
            <li><Link to={'/Error'} className="dropdown-item" href="/">Error 404</Link></li>
            <li><Link to={'/Logn'} className="dropdown-item" href="/">Login/Register</Link></li>
          </ul>
        </li>
          {/* start dropdowen => 2 */}
          
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Service
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={'/ServesBage'} className="dropdown-item" href="/">Service</Link></li>
            <li><Link to={'/Details'} className="dropdown-item" href="/">Service Detail</Link></li>
            
          </ul>
        </li>
            {/* start dropdowen => 3 */}
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bolg
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={'/Blog'} className='dropdown-item' href='/'>Blog</Link> </li>
            <li><Link to={'/BlogDetails'} className="dropdown-item" href="/">Blog Details</Link></li>
          </ul>
        </li>  
  {/* end dropdowen */}

        <li className="nav-item">
          <Link to={'/Contact_Us'} className="nav-link" href="/">Contact Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">(+01) 999 888 777</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/">
          <button>Contact Us <span> <i className="fa-solid fa-angles-right"></i> </span></button>  
       
          </a>
          
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
}
