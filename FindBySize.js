import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
//import { PageItem, Pagination } from "react-bootstrap";
import "./Dashboard.css";
import app from "./button/app.jpg";
import pay from "./button/pay.png";
import play from "./button/play.jpg"
import { NavDropdown } from "react-bootstrap";


export default function FindBySize(){

 const [foodItemDetails, setFoods] = useState([]);
  const[value, setValue]=useState("");
  const [errors, setErrors] = useState({});
  useEffect(() => {
    loadFoods();
  }, []);

  const deleteFood = async (id) => {
    await axios.delete(`http://localhost:8080/Food/food/${id}`)
    loadFoods()
  }
  const loadFoods = async () =>
  {
    return await axios
     .get( "http://localhost:8080/Food/fetchAllFoods")
    
    .then((response) => 
    setFoods(response.data.foodDtoList)
      
    )
    .catch((err) => console.log(err));
  };
  const handleReset = () => {
    loadFoods();
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    // return await axios.get(`http://localhost:8080/Food/fetchById/${id}`)
    return await axios
    .get(`http://localhost:8080/Food/findFoodByIdGreater?foodId=${value}`)
    
    // .get(`http://localhost:8080/Food/fetchById/${id}`)
    .then((response) =>{
      //  setFoods(response.foodItemDetails);
      //setFoods(response.data.foodDtoList);
      // setFoods(validateId(foodItemDetails));
      console.log(response.data.foodList);
       setValue("");
       const record = response.data.foodItemDetails;
      
        setErrors("")
        setFoods(response.data.foodList);
       
      })
    .catch((err) => console.log(err));
  };
  const menuSearch = (e) => {
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
    const {name} = useParams();
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
          <section id="adminheader">
  <a><div className="cusHomeLogo">Diet Tracker</div></a>
  {/* <h5>welcome:{name}</h5> */}
  <div>
    <ul id="navbar">                    
                        
      
    <li><a className="active"><Link to={`/dashboard/${name}`}>Home</Link></a></li>
      <li><a><Link to="/addfood1">Add</Link></a></li>
      <li><a><Link to="/update">Edit</Link></a></li>
     
      <NavDropdown title="Search" id="basic-nav-dropdown" className="dropdowncolor">
              <NavDropdown.Item id="listitem"><Link to="/findbyname">Find By Name</Link></NavDropdown.Item>
              <NavDropdown.Item id="listitem" ><Link to="/findbysize">
              Find By Greater Id
              </Link>
                </NavDropdown.Item>
              <NavDropdown.Item id="listitem"><Link to="/findallorderbyname">
              Find Desc Order
              </Link></NavDropdown.Item>
            
            </NavDropdown>
       <li><a><Link to="/login">Logout</Link></a></li>
    </ul>
  </div>
</section>
<div id="mobile">
        
            <button id="barbtn" onClick={menuSearch}>
            {/* <i id="bar" className="fa-solid fa-bars"></i> */}
            <i id="bar" className="fas fa-outdent"></i>
            </button>
           
        </div>
        <section>
          <form style={{
            margin: "auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center",
          }}
          className="d-flex input-group w-auto"
          onSubmit={handleSearch}>
            <input
            type="number"
            className="form-control"
            placeholder="Search Id..."
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            />
            {errors.foodId && (
            <span className="text-danger">{errors.foodId}</span>
        )}
            <button type="submit" className ="btn btn-dark">Search</button>

            <button  className="btn btn-info mx-2" onClick={() => handleReset()}>Reset</button>
          </form>
          <div className="container">
            <div className='py-4'>
            <h3 className="text-center">Find By Greater Id</h3>
            <table className="table border shadow">
      <thead >
        
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Food Name</th>
          <th scope="col">Serving Size</th>
          <th scope="col">Calories</th>
          <th scope="col">Carbs</th>
          <th scope="col">Proteins</th>
          <th scope="col">Fats</th>
          <th scope="col">Action</th>
        </tr>
       
      </thead>
     {foodItemDetails === null ? (
      // alert("Id is Not Found"),
      <tbody className="align-center mb-0">
      <tr>
        
        <td colSpan={8} className="text-center mb-0">
          No Data Found
        </td>
      </tr>
      </tbody>
     ):(

 foodItemDetails.map((foodInfo,index) => (
      <tbody key={index}> 
      {/* <tbody> */}

        {/* {
           foodItemDetails.map((foodInfo,index)=>(  */}

                <tr>
          <th scope="row" key={index}>{foodInfo.foodId}</th>
          {/* <th scope="row">{index+1} </th> */}
          {/* <th >{foodInfo.foodId}</th> */}
          <td id="textdetails">{foodInfo.name}</td>
          <td id="textdetails">{foodInfo.size}</td>
          <td id="textdetails">{foodInfo.calories}</td>
          <td id="textdetails">{foodInfo.carbs}</td>
        <td id="textdetails">{foodInfo.proteins}</td>
        <td id="textdetails">{foodInfo.fat}</td> 
          {/* <Link className="btn btn-outline-primary mx-2"
          // to={`/editfood/${foodInfo.id}`}>Edit</Link>
          to={`/editfood/${foodInfo.foodId}`}
          >Edit</Link> */}
          <button className=" bg-danger mx-2" id="danger" 
          onClick={()=>deleteFood(foodInfo.foodId)}>
          Delete</button>
        {/* </td> */}
        </tr>
           {/* ))} */}
           
           </tbody>   
 ))

          )}  

     

    </table>

          </div>
          </div>
          </section>
          </body>

          <footer className="section-p1">
            <body>
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
            </body>
            </footer>
        </div>
    )
}