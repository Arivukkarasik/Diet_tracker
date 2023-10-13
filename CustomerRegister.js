// import {  useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default  function CustomerRegister() {
  
//     const [employeename, setEmployeename] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


//     async function save(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8080/Food/api/v1/customer/save", {
//           employeename: employeename,
//           email: email,
//           password: password,
//           });
//           alert("Customer Registation Successfully");

//         } catch (err) {
//           alert(err);
//         }
//       }
  
    
    // <div className="cover">
    // <div class="container mt-4" >
    // <div class="card">
    //         <h1>Customer Register</h1>
    
    // <form>
    //     <div class="form-group">
    //       <label>Employee name</label>
    //       <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
    //       value={employeename}
    //       onChange={(event) => {
    //         setEmployeename(event.target.value);
    //       }}
    //       />

    //     </div>

    //     <div class="form-group">
    //       <label>email</label>
    //       <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
    //       value={email}
    //       onChange={(event) => {
    //         setEmail(event.target.value);
    //       }}
          
    //       />
 
    //     </div>

    //     <div class="form-group">
    //         <label>password</label>
    //         <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
    //         value={password}
    //         onChange={(event) => {
    //           setPassword(event.target.value);
    //         }}
            
    //         />
    //       </div>

    //     <button type="submit" class="btn btn-primary mt-4" onClick={save}>Save</button>
       
    //   </form>
    // </div>
    // </div>
    //  </div>
    import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerRegister.css";

export default  function CustomerRegister() {
  
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [stateName, setStateName] = useState("");
    const [countryName, setCountryName] = useState("");
    const [pincode, setPincode] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();



    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/Food/api/v1/customer/save", {
          customerName: customerName,
          phoneNumber: phoneNumber,
          stateName:stateName,
          countryName:countryName,
          pincode:pincode,
          gender:gender,
          email: email,
          password: password,
          
          });
          alert("Customer Registation Successfully");
          navigate('/customerlogin');

        } catch (err) {
          alert(err);
        }
      }
    return (
      <div>
<section id="header">
<a><div className="cusHomeLogo">Diet Tracker</div></a>

</section>
<body>

<div className="mainform">
<div className="customerlogin">
<h2 id="loginhead">Customer Register</h2>

<form id="login">

           <label for="customerName" className="loginlabel">User Name</label>
        
        <input type="text"   id="customerName" placeholder="Your name"
        
        value={customerName}
        onChange={(event) => {
          setCustomerName(event.target.value);
        }}
         />
      
       <br/> <br/>
       <label for="phoneNumber" className="loginlabel">Phone Number</label>
        
        <input type="text"   id="phoneNumber" placeholder="Your phone number"
        
        value={phoneNumber}
        onChange={(event) => {
          setPhoneNumber(event.target.value);
        }}
         />
      
       <br/> <br/>

       <label for="stateName" className="loginlabel"> City Name</label>
        
        {/* <input type="text"   id="stateName" placeholder="Your state name"
        
        value={stateName}
        onChange={(event) => {
          setStateName(event.target.value);
        }}
         /> */}
       
         <select name="state" id="stateName">
                   <option value="thanjavur">Thanjavur</option>
                 <option value="Madurai">Madurai</option>
                  <option value="Erode">Erode</option>
                   <option value="Tirunelveli">Thirunelveli</option>
                   <option value="Cuddalore">Cuddalore</option>
                  <option value="Tiruchirapalli">Thirachirapalli</option>
                   <option value="Coimbatore">Coimbatore</option>
                   <option value="Salem">Salem</option>
                   <option value="Vellore">Vellore</option>
                  <option value="Karur">Karur</option>
                  <option value="Nagapattinam">Nagapattinam</option>
                  <option value="Krishnagiri">Krishnagiri</option>
                  <option value="Tiruvannamalai">Tiruvannamalai</option>
                   <option value="Dharmapuri">Dharmapuri</option>
                   <option value="Namakkal">Namakkal</option>
                  <option value="Ramanathapuram">Ramanathapuram</option>
                   <option value="Virudhunagar">Virudhunagar</option>
                   <option value="Theni">Theni</option>
                  <option value="Perambalur">Perambalur</option>
                  <option value="Ariyalur">Ariyalur</option>
                   <option value="Thoothukudi">Thoothukudi</option>
                  <option value="Dindigul">Dindigul</option>
                <option value="Pudukottai">Pudukottai</option>
                   <option value="Tiruppur">Tiruppur</option>
                  <option value="Villupuram">Villupuram</option>
                   <option value="Kallakurichi">Kallakurichi</option>
               </select>
             
       <br/> <br/>
      
       <label id="countryName" className="loginlabel">Country Name</label>
        
        <input type="text"  id="countryName" placeholder="Your country name"
        
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
        
        />
       <br/> <br/>
      
       <label id="pincode" className="pincode">Pincode</label>
        
        <input type="text"  id="pincode" placeholder="Your pincode"
        
        value={pincode}
        onChange={(event) => {
          setPincode(event.target.value);
        }}
        
        />
       <br/> <br/>
       {/* <label>Gender</label>
       <br/>
        &nbsp;&nbsp;&nbsp;
      <input type="radio" name="gender" id="female"/>
      &nbsp;
      <span id="female">Female</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" name="gender" id="male"/>
      &nbsp;
      <span id="male">Male</span>
     <br/> <br/> */}
     <label id="email" className="loginlabel">Email</label>
        <input type="email"  id="email" placeholder="Your email"
        
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        
        />
       
     
     <br/> <br/>
       
        
    
          <label for="password" className="loginlabel">password</label>
         
          <input type="password"  id="password" placeholder="Your password"
          
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          
          />

      <br/><br/>
      
                <button type="submit" id="submit" class="btn btn-primary" onClick={save}>Save</button>

                <div className="gotoreg">
                  <Link className="text-center" id="goregister" to="/login">Already have an account ? <span> Login Now</span></Link>
                </div>
                
        </form>
      </div>
      </div>
      </body>
       </div>

);
  }
   {/* //     <div className="cover">
// <div className="rowreg">
//   <div className="col-75">
//     <div className="customerreg">
//     <div className="container register">
//     <link 
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
//         integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
//         crossorigin="anonymous"
//         referrerpolicy="no-referrer"
//       ></link>
//       <form >

//         <div className="row">
//           <div className="col-50">
//             <h3>Customer Details</h3>
//             <label for="fullname"><i className="fa fa-user"></i> Full Name</label>
//             <input type="text"
            
//             id="customerNname" 
//             name="name" 
//             placeholder="Enter name"
//             className="form-control" 
//             value={customerName}
//             onChange={(event) => {
//               setCustomerName(event.target.value);
//             }}
//             />

//             <label for="photo"><i className="fa fa-image"></i> Upload Image</label>
//             <input type="file" id="myFile" name="filename"/><br/><br/>
           
//             <label for="phoneNumber"><i className="fa fa-phone"></i> Phone Number</label>
//             <input type="text" id="phonenumber" 
//             name="phonenumber"
//             placeholder="Enter phone number"
//             className="form-control" 
//             value={phoneNumber}
//             onChange={(event) => {
//               setPhoneNumber(event.target.value);
//             }}/><br/>

//             <label for="country"><i className="fa fa-institution"></i> Country</label>
//             <input type="text" id="countryName" name="CountryName" 
//             placeholder="Enter Country"
//             className="form-control" 
//             value={countryName}
//             onChange={(event) => {
//               setCountryName(event.target.value);
//             }}/>

//             <div className="row">
//               <div className="col-50">
//                 <label for="state"><i className="fa fa-map-marker"></i>  Select State</label>
//                 <select name="state">
//                   <option value="thanjavur">Thanjavur</option>
//                   <option value="Madurai">Madurai</option>
//                   <option value="Erode">Erode</option>
//                   <option value="Tirunelveli">Thirunelveli</option>
//                   <option value="Cuddalore">Cuddalore</option>
//                   <option value="Tiruchirapalli">Thirachirapalli</option>
//                   <option value="Coimbatore">Coimbatore</option>
//                   <option value="Salem">Salem</option>
//                   <option value="Vellore">Vellore</option>
//                   <option value="Karur">Karur</option>
//                   <option value="Nagapattinam">Nagapattinam</option>
//                   <option value="Krishnagiri">Krishnagiri</option>
//                   <option value="Tiruvannamalai">Tiruvannamalai</option>
//                   <option value="Dharmapuri">Dharmapuri</option>
//                   <option value="Namakkal">Namakkal</option>
//                   <option value="Ramanathapuram">Ramanathapuram</option>
//                   <option value="Virudhunagar">Virudhunagar</option>
//                   <option value="Theni">Theni</option>
//                   <option value="Perambalur">Perambalur</option>
//                   <option value="Ariyalur">Ariyalur</option>
//                   <option value="Thoothukudi">Thoothukudi</option>
//                   <option value="Dindigul">Dindigul</option>
//                   <option value="Pudukottai">Pudukottai</option>
//                   <option value="Tiruppur">Tiruppur</option>
//                   <option value="Villupuram">Villupuram</option>
//                   <option value="Kallakurichi">Kallakurichi</option>
//               </select>
//               </div>
//               <div className="col-50">
//                 <label for="pincode"><i className="fa fa-car"></i> Pincode</label>
//                 <input type="text" id="pincode" name="pincode" 
//                 placeholder="Enter pincode"
//                 className="form-control" 
//             value={pincode}
//             onChange={(event) => {
//               setPincode(event.target.value);
//             }}/>
//               </div>
//             </div>
//           </div>
//           <div class="col-50">
//             <h3>Personal Details</h3>

//              <label for="pnum"><i class="fa fa-mobile"></i> Phone Number</label>
//             <input type="number" id="pnum" name="phonenumber" placeholder="+91"> 
//             <label for="gender"><i className="fa fa-user-circle-o"></i> Gender</label>
//             <input type="radio"  id="gender" value="male" name="gender"className="mx-2"/>Male
//             <input type="radio" id="gender" value="female" name="gender" className="mx-2"/>Female
            
//             <label for="email"><i className="fa fa-envelope"></i> Email</label>
//             <input type="text" id="email" name="email"
//              placeholder="Enter email"
//              className="form-control" 
//             value={email}
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}/>

//              <label for="password"><i className="fa fa-key"></i> Password</label>
//             <input type="text" id="password" name="password" 
//             placeholder="Enter password"
//             className="form-control" 
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}/>

//             <label for="aadhar"><i className=" fa fa-list-alt"></i> Aadhar card</label>
//               <input type="number" id="aadhar" name="aadhar" 
//               placeholder="0000 1111 2222"
//               className="form-control" 
//             value={aadharCard}
//             onChange={(event) => {
//               setAadharCard(event.target.value);
//             }}/>
//             <div class="row">
//                 <div class="col-50">
//               <label for="dob"><i className="fa fa-calendar"></i> Date Of Birth</label>
//               <input type="date" id="dob" name="dob"
//                placeholder="dd/mm/yyyy"
//                className="form-control" 
//             value={dob}
//             onChange={(event) => {
//               setDob(event.target.value);
//             }}/>

//               <label for="age"><i className="fa fa-user"></i> Age</label>
//               <input type="number" id="age" name="age" 
//               placeholder="Enter age"
//               className="form-control" 
//             value={age}
//             onChange={(event) => {
//               setAge(event.target.value);
//             }}/>
//                  </div>
//                  </div>
//         </div>
//         <label>
//           <input type="checkbox"  className="checkbox" name="checkbox"/> Information is correct go to submit details
//         </label>

//         <div className="btn-center">
//         <button type="submit" className="btn btn-success shadow" onClick={save}>Register</button>
//       <button className="btn btn-danger shadow mx-2">Cancel</button>
//           </div>
          
//     </div>
//     </form>
//   </div>
// </div>
// </div>
// </div>
// </div>*/}

  