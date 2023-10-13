import React from "react";
import "./About.css";
import app  from "./button/app.jpg";
import pay from "./button/pay.png";
import play from "./button/play.jpg";
import a6 from "./banner/a6.jpg";
import { Link, useParams } from "react-router-dom";
export default function About(){
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
    {/* <h5>welcome:{name}</h5> */}
        <div>
            <ul id="navbar">
                <li><a><Link to={`/customerhome/${name}`}>Home</Link></a></li>
                {/* <li><a  href="shop1.js"><Link to="/shop1">Shop</Link></a></li>
                <li><a href="blog.js">Blog</a></li> */}
                <li><a  className="active"><Link to="/about">About</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
                <li><a ><Link to="/customerlogin">Logout</Link></a></li>
                
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
   <section id="banner" className="readmore">
        <h3>#KnowUs</h3>
        <h2>About more details visit our site!</h2>
            
    </section>

    <section id="about-head" className="section-p1">
                <img src={a6} alt=""/>
                <div>
                    <h2>Who We Are?</h2>
                    <p>Now, you are showing a amazing nutrition app.
                        It helps to weight gain,weight gain and in many ways to help 
                        people live healthy and nutrition. Its also maintains 
                        a ideal weight for ever particular people who download the app.
                    </p>
                    <br/><br/>
                    <marquee bgcolor="#ccc" loop="-1"
                    scrollamount="5" width="100%">Create stunning changes
                    with us much or as little control as you little
                    thanks to a choice of Basic and 
                    Creative modes.</marquee>
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