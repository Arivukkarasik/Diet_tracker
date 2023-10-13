import React from "react";
import "./CustomerHome.css";
import f1 from "./features/f1.png";
import f2 from "./features/f2.png";
import f7 from "./features/f7.png";
import f4 from "./features/f4.png";
import f5 from "./features/f5.png";
import f6 from "./features/f6.png";
import product1 from "./Images/product1.jpg";
import product2 from "./Images/product2.webp";
import product3 from "./Images/product3.jpg";
import product4 from "./Images/product4.jpg";
import product5 from "./Images/product5.jpg";
import product6 from "./Images/product6.jpg";
import product7 from "./Images/product7.webp";
import product8 from "./Images/product8.jpg";
import product9 from "./Images/product9.jpg";
import product10 from "./Images/product10.jpg";
import product11 from "./Images/product11.jpg";
import product12 from "./Images/product12.jpg";
import product13 from "./Images/product13.jpg";
import product14 from "./Images/product14.webp";
import product15 from "./Images/product15.jpg";
import product16 from "./Images/product16.webp";
import product17 from "./Images/product17.jpg";
import product18 from "./Images/product18.jpg";
import product19 from "./Images/product19.jpg";
import product20 from "./Images/product20.jpg";
import  product21 from "./Images/product21.jpg";

import { Link, useParams } from "react-router-dom";
import pro1 from "./arrivals/pro1.jpg";
import pro2 from "./arrivals/pro2.jpg";
import pro3 from "./arrivals/pro3.jpg";
import pro4 from "./arrivals/pro4.jpg";
import pro5 from "./arrivals/pro5.jpg";
import pro6 from "./arrivals/pro6.jpg";
import pro7 from "./arrivals/pro7.jpg";
import pro8 from "./arrivals/pro8.jpg";
import pro9 from "./arrivals/pro9.jpg";
import pro10 from "./arrivals/pro10.jpg";
import pro11 from "./arrivals/pro11.jpg";
import pro12 from "./arrivals/pro12.jpg";
import pro13 from "./arrivals/pro3.jpg";
import pro14 from "./arrivals/pro14.jpg";
import pro15 from "./arrivals/pro15.jpg";
import pro16 from "./arrivals/pro16.jpg";
import pro17 from "./arrivals/pro17.jpg";
import pro18 from "./arrivals/pro18.jpg";
import pro19 from "./arrivals/pro19.jpg";
import pro20 from "./arrivals/pro20.jpg";
import pro21 from "./arrivals/pro21.jpg";
import pro22 from "./arrivals/pro22.jpg";
import pro23 from "./arrivals/pro23.jpg";
import pro24 from "./arrivals/pro24.jpg";
import app  from "./button/app.jpg";
import pay from "./button/pay.png";
import play from "./button/play.jpg";
 
export default function CustomerHome(){
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
    <h5>welcome:{name}</h5>
        <div>
            <ul id="navbar">
                <li><a  className="active"><Link to={`/customerhome/${name}`}>Home</Link></a></li>
                <li><a ><Link to="/about">About</Link></a></li>
                <li><a><Link to="/contact">Contact</Link></a></li>
                <li><a ><Link to="/customerlogin">Logout</Link></a></li>
                <a id="close"><i className="fa-solid fa-close"></i></a>
               
             
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
  
 {/* <div id="logname">
 <h3>welcome:{name}</h3>
 </div> */}
   <section id="hero">
    
    
  
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button>Shop Now</button>
   </section>
    <section id="feature" className="section-p1">
    <div className="fe-box">
        <img src={f1} alt=""/>
        <h6>Free Shipping</h6>
    </div>
    <div className="fe-box">
        <img src={f2} alt=""/>
        <h6>Online Order</h6>
    </div>
    <div className="fe-box">
        <img src={f7} alt=""/>
        <h6>Save Money</h6>
    </div>
    <div className="fe-box">
        <img src={f4} alt=""/>
        <h6>Promotions</h6>
    </div>
    <div className="fe-box">
        <img src={f5} alt=""/>
        <h6>Happy Sell</h6>
    </div>
    <div className="fe-box">
        <img src={f6} alt=""/>
        <h6>Support</h6>
    </div>
    </section>
    <section  id="product1" class="section-p1">
        <h2>Healthy Products</h2>
        <p>Eat well, believe well, and look well!</p>
        <div className="pro-container">
            <div className="pro">
               <img src={product14} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product1} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            {/* <div className="pro">
               <img src={product3} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div> */}

            <div className="pro">
               <img src={product10} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>    
            <div className="pro">
               <img src={product6} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product4} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product8} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product12} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product9} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product16} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product15} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product7} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product2} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product5} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product3} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product18} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={product17} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={product13} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={product19} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={product20} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={product21} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </section>
    <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span> 70% Off</span> - All Foods & Nutritions</h2>
            <button className="normal">Explore More</button>
    </section>
    <section  id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>A Whole New Way to Take Your Vitamins</p>
        <div className="pro-container">
            <div className="pro">
               <img src={pro1} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro2} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            {/* <div className="pro">
               <img src={product3} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div> */}

            <div className="pro">
               <img src={pro3} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>    
            <div className="pro">
               <img src={pro4} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro5} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro6} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro7} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro8} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro9} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro10} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro11} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro12} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro13} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro14} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro15} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>

            <div className="pro">
               <img src={pro16} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro17} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro18} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro21} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro22} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro19} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro20} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro23} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div className="pro">
               <img src={pro24} alt=""/> 
               <div className="des">
                <span>weight gain</span>
                <h5>Sandwich With Extra Calories</h5>
                    <div className="star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h4>$78</h4>
               </div>
               <a href="#" className="cart"><i className="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </section>
   <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>The best healthy foods is on sale at cara</span>
            <button className="white">Learn More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>Now Streaming On!</h4>
                <h2>Watch More Live More</h2>
                <span>Get the packs you want, here</span>
            <Link className="watchnow" to="/home">
                Watch now
                </Link>
            </div>
   </section>

   <section id="banner3">
   <div className="banner-box">
               
        <h2>WEIGHT LOSS</h2>
                <h3>Burn than fat and watch your belly go flat.</h3>
            <Link className="lossweight" to="/home">
                Start Now
                </Link>
            </div>
            <div className="banner-box banner-box2">
               
        <h2>WEIGHT GAIN</h2>
                <h3>Don’t be a brat, burn that fat.</h3>
            <Link className="lossweight" to="/home">
                Start Now
                </Link>
            </div>
            <div className="banner-box  banner-box3">
               
        <h2>YOGA</h2>
                <h3>Burn than fat and watch your belly go flat.</h3>
            <Link className="lossweight" to="/home">
                Start Now
                </Link>
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
    );

    

}