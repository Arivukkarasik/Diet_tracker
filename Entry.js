import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import "./Entry.css";
 import Nutrition1 from "./assets/Nutrition1.webp";
 
//  const backgroundStyle = {
//   backgroundImage: 'url("/assets/Nutrition1.jpg")',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundColor: white,
//   width: '100vw',
//   height: '100vh',
// };
export default function Entry() {
  return (
    <div>
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></link>
  <div className='body'>
    
      
    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Diet Tracking Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
            <Link to="/register">Admin</Link>
            <Link to="/customerlogin">Customer</Link>
            
         
      </Container>
    </Navbar> */}
    {/* <header> */}
    
      {/* </header> */}
   
{/* <div className="homebgimg">
   <img className="homebgimage" src={Nutrition1}  alt=""></img> 
</div> */}
<header className="entryHeader">
<div className="navbarEntry">
  <Container>
      {/* <img class="logo" src="logo1.jpg" alt="logo"> */}
      <div className="logoEntry"><a href="#">Diet Tracking Application</a></div>
      <ul class="links">
        <li><a className="entryA"><Link to="/login">Admin Login</Link></a></li>
        <li><a className="entryA"><Link to="/customerlogin">Customer Login</Link></a></li>
      </ul>
      
      </Container> 
     </div>
      </header>
    </div>
<footer className="entryfooter">
  <div className="footer">
<div className="container">
  <div className="sec aboutus">
    <h2>About Us</h2>
    <p>India contributes a third of the global burden of undernutrition.
      Given India’s population size, investing in actions to reduce all forms of
      malnutrition is especially important, not just for India itself, but also to support
      the attainment of global targets.</p>
      <div className="socialIcons">
      <ul class="sci">
        <li><a href=""><i className="fa-brands fa-facebook" aria-hidden="true" id="font"></i></a></li>
        <li><a href=""><i className="fa-brands fa-twitter" aria-hidden="true" id="font"></i></a></li>
        <li><a href=""><i className="fa-brands fa-instagram" aria-hidden="true" id="font"></i></a></li>
        <li><a href=""><i className="fa-brands fa-youtube" aria-hidden="true" id="font"></i></a></li>
      </ul>
      </div>
  </div>
  <div className="sec quicklinks">
    <h2>Quick Links</h2>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Contact</a></li></ul>
  </div>
  <div className="sec quicklinks">
    <h2>Training</h2>
    <ul>
      <li><a href="#">Weight Loss</a></li>
      <li><a href="#">Weight Gain</a></li>
      <li><a href="#">Exercise</a></li>
      <li><a href="#">Diet Plan</a></li>
      <li><a href="#">Nutrition Plan</a></li>
      <li><a href="#">Daily Goals</a></li>
    </ul>
  </div>
  <div className="sec contact">
    <h2>Contact Us</h2>
    <ul className="info">
      <li>
        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
        <span> 18 Anna Nagar,<br/>
          Near Sozhinganallur,<br/>Chennai-60028. </span>
      </li>
      <li>
        <span><i class="fa fa-phone" aria-hidden="true"></i></span>
        <p><a href="tel:+044-224306">+ 044-224306</a><br/></p><br/>
        <p><a href="tel:+044-224308">+ 044-224308</a><br/></p>
      </li>
      <li>
        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <p><a href="mailto: nutritactics1806@gmail.com">nutritactics1806@gmail.com</a></p>
          {/* <li> */}
          </li>
    </ul>
  </div>
</div>
</div>
</footer>
<div class="copyrightText">
<p>Copyright @ 2023 Nutirion Tactics. All Rights Reserved.</p>
</div>
</div>

  );
}

