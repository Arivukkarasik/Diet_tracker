import React from "react";
import "./CustomerHome.css";
import { Link } from "react-router-dom";
import app  from "./button/app.jpg";
import pay from "./button/pay.png";
import play from "./button/play.jpg";
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
export default function Sproduct1(){
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

        const handleSubmit = (e) =>{
           var MainImg = document.getElementById("MainImg");
           var smallimg = document.getElementsByClassName("small-img");
            
           smallimg[0].onClick = function(){
            MainImg.src = smallimg[0].src;
           }
           smallimg[1].onClick = function(){
            MainImg.src = smallimg[1].src;
           }
           smallimg[2].onClick = function(){
            MainImg.src = smallimg[2].src;
           }
           smallimg[3].onClick = function(){
            MainImg.src = smallimg[3].src;
           }

        }
    return(
    <div>
    <head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    
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
        <li><a  href="customerhome.js">Home</a></li>
        <li><a className="active" href="shop.js"><Link to="/shop1">Shop</Link></a></li>
        <li><a href="blog.js">Blog</a></li>
        <li><a href="about.js">About</a></li>
        <li><a href="contact.js">Contact</a></li>
        <li><a href=""><Link to="/customerlogin">Logout</Link></a></li>
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

<section id="prodetails" className="section-p1">
<button onSubmit={handleSubmit}> 
    <div className="single-pro-image">
    {/* <button  onClick={(e) => handleSubmit()}>         */}
   
        <img src={pro1} width="100%" id="MainImg" alt=""/>
        <div className="small-img-group">
        <div className="small-img-col">
            <img src={pro1} width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={pro2} width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={pro3} width="100%" className="small-img" alt=""/>
        </div>
        <div className="small-img-col">
            <img src={pro4} width="100%" className="small-img" alt=""/>
        </div>
        </div>
        {/* </button> */}
        
    </div>
    </button>
    <div>
    
</div>
<div className="single-pro-details">
    <h6>Home/Foods</h6>
    <h4>Nutritient Foods For You</h4>
    <h2>$139.00</h2>
    <select>
        <option>Select Size</option>
        <option>Gram</option>
        <option>Kilo Gram</option>
        <option>Litre</option>
        <option>Milli Litre</option>
        <option>Cup</option>
    </select>
    <input type="number"
    //  value="1"
     placeholder="Quantity"/>
    <button className="normal">Add To Cart</button>
    <h4>Food Details</h4>
    <span>The effective management of food intake
         and nutrition are both key to good
          health. Understanding good nutrition and paying 
          attention to what you eat can help 
        you maintain or improve your health.</span>
</div>

</section>
<section  id="product1" class="section-p1">
        <h2>Delicious Foods</h2>
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