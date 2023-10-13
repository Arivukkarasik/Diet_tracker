import React from "react";
import "./Contact.css";
import app  from "./button/app.jpg";
import pay from "./button/pay.png";
import play from "./button/play.jpg";
import a6 from "./banner/a6.jpg";
import people4 from "./Images/people4.jpg";
import people5 from "./Images/people5.jpg";
import people6 from "./Images/people6.jpg";

import { Link, useParams } from "react-router-dom";
export default function Contact(){
    const handleSearch = (e) => {
        const bar = document.getElementById('bar');
        const close=document.getElementById('close');
        const nav=document.getElementById('navbar');
       
      if(bar){
        bar.addEventListener('click', ()=>{
            nav.classList.add('active');
        }
        )
      }
      if(close){
        close.addEventListener('click', ()=>{
            nav.classList.remove('active');
        })
        }
        };
       // console.log(props.userName)
       const {name} = useParams();
    return(
        <div>
            <head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
            {/* <Link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.
            css" integrity="sha384-AYmEC3Yw5cVB3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
    crossorigin="anonymous"/>*/}
            <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></link> 
            </head>
               <body>
   
   <section id="header">
    <a><div className="cusHomeLogo">Diet Tracker</div></a>
   
        <div>
            <ul id="navbar">
                <li><a><Link to={`/customerhome/${name}`}>Home</Link></a></li>
                {/* <li><a  href="shop1.js"><Link to="/shop1">Shop</Link></a></li>
                <li><a href="blog.js">Blog</a></li> */}
                <li><a>< Link to="/about">About</Link></a></li>
                <li><a  className="active" ><Link to="/contact">Contact</Link></a></li>
                <li><a ><Link to="/customerlogin">Logout</Link></a></li>
                <li id="lg-bag"><a href="cart.js"><i class="fa-solid fa-shopping-bag"></i></a></li>
              <a href="#" id="close"><i className="fa-solid fa-close"></i></a>
            </ul>
        </div>
        
        <div id="mobile">
         <a href="cart.js"><i class="fa-solid fa-shopping-bag"></i></a>
            <button id="barbtn" onClick={handleSearch}>
            {/* <i id="bar" className="fa-solid fa-bars"></i> */}
            <i id="bar" className="fas fa-outdent"></i>
            </button>
           
        </div>
        
   </section>
   <section id="page-header" className="contact-header">
        <h2>#let's_talk</h2>
        
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
            
    </section>

<section id="contact-details" className="section-p1">
    <div className="details">
        <span>GET IN TOUCH</span>
        <h2>Visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
        <div>
            <li>
                <i className="fal fa-map"></i>
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
                <i className="far fa-envelope"></i>
                <p>diettracker3902@gmail.com</p>
            </li>
            <li>
                <i className="fa-solid fa-phone-alt"></i>
                <p>diettracker3902@gmail.com</p>
            </li>
            <li>
                <i className="far fa-clock"></i>
                <p>Monday to Saturday: 9.00am to 16.pm</p>
            </li>
        </div>
    </div>
    <div className="map">
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.344968543446!2d80.22476820000001!3d12.
    896908800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x3a525b79de7f381b%3A0xffbb2dd48afe3f1b!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695956863407!5m2!1sen!2sin"
     width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    <iframe className="chennaimap"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.
    20901174999996!3d13.047525450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1695957204517!5m2!1sen!2sin" 
     allowfullscreen="" loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>
<section id="form-details">
    <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10"
        placeholder="Your Feedback"></textarea>
        <button className="normal">Submit</button>
    </form>
    <div className="people">
        <div>
    <img src={people4} alt=""/>
    <p><span>John Doe</span>Senior Marketing Manager <br/> Phone: + 000 123
    000 77 88<br/>Email: john1@gmail.com</p>

    </div>
    <div>
    <img src={people5} alt=""/>
    <p><span>Georgie Henley</span>Assistant Marketing Manager <br/> Phone: + 000 123
    000 87 89<br/>Email: joni3@gmail.com</p>

    </div>
    <div>
    <img src={people6} alt=""/>
    <p><span>Emma Watson</span> Marketing Manager <br/> Phone: + 000 123
    000 55 74<br/>Email: emma8@gmail.com</p>

    </div>
    </div>
</section>
    <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates our latest shop and <span>special offers.</span></p>
                </div>
                <div className="newsform">
                    <input type="text" placeholder="Your email address"/>
                        <button className="normal">Sign Up</button>
                </div>
            </section>
    <footer className="section-p1">
                <div className="cushomefooter">
            <div className="Col">
                <h3 className="logocushome">Diet Tracker</h3>
                <h4>Contact</h4>
                <p><strong>Address: </strong> 562 Wellington Road, Street 32, San Franciso</p>
                <p><strong>Phone: </strong> +01 222 365 /(+91) 01 2345 6789</p>
                <p><strong>Hours: </strong>10:00 - 18:00, Mon - Sat</p>
            
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f "></i>
                    <i className="fab fa-twitter "></i>
                    <i className="fab fa-instagram "></i>
                    <i className="fab fa-pinterest-p "></i>
                    <i className="fab fa-youtube"></i>
                </div>
                </div>
            </div>

            <div class="Col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact us</a>
            </div>
            <div class="Col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
            </div>
            <div className="Col" id="install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
            <div className="Row">
                <img src={app} alt=""/>
                <img src={play} alt=""/>
            </div>
            <p>Secured Payment Gateways </p>
            <img src={pay} alt=""/>
            </div>
            <div className="copyright">
            <p>@ 2023, Diet Tracker Application - Nutritient Platform</p>
            </div>
            </div>
            </footer>
    </body>
    </div>
    )
    }