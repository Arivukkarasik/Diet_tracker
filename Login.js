// import React,{useState} from 'react'
// import './login.css'


//  const Login = () => {
//   const[action,setAction] = useState("Login");
//   return (
//     <div className='container'>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//       <div className="header">
//        <div className="text">{action}</div>
//        <div className="underline"></div> 

//       </div>
//    <div className="inputs">

  
//     {action==="Login"?<div></div>:<div className="input">
//      <i class="fa fa-user"></i>
     
//      <input type="text" placeholder="Name"/>
//     </div>}

//       {/* <i class="fa fa-user"></i>
     
//     <input type="text" placeholder="Name"/>
//    </div> */}
//    <div className="input">
  
//     <i class="fa fa-envelope"></i> 
    
//     <input type="email" placeholder="Email"/>
//    </div>
//    <div className="input">
   
//     <i class='fa fa-lock'></i> 

//     <input type="password" placeholder="Password"/>
//    </div>
//    </div>
//    {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password? <span>Click Here!</span></div>}
//    {/* <div className="forgot-password">Forget Password? <span>Click Here!</span></div> */}
//    <div className="submit-container">
//     <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//     <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//    </div>
//       </div>
      
//   );
// }
// export default Login;
// import {  useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from "axios";


// // function Login() {
// //    const [fetch]
// export default class Login extends Component{

   
//     constructor(props) {
//         super(props);
//         this.state = {
//           email: "",
//           username:"",
//           password: "",
//           error:"",
//           loggedIn: false,
//           // error: {
//             emailError: "",
//             userNameError:"",
//             passwordError: "",
//             onError:""
//           // },
//         };
        
//       }
//       onChangeName = (e) => {
//         this.setState({
//           email: e.target.value,
//           emailError: "",
//         });
//       };
//       onChangePassword = (e) => {
//         this.setState({
//           password: e.target.value,
//           passwordError: "",
//         });
//       };
//       handleInputChange = (e) => {
//         this.setState({
//           [e.target.name]: e.target.value,
//           error: "", // Clear any previous error message
//         });
//       };
//     login = async (e) =>{
//         e.preventDefault();
//         const{email,password} = this.state
//         try {
//           await axios.post("http://localhost:8080/Food/api/v1/employee/login", 
//           {
//             email,
//              password,
//             }).then((res) => 
//             {
//              console.log(res.data);
             
//              if (res.data.message === "Email not exits") 
//              {
//             //    alert("Email not exits");
//             //    setErrors("Email isrequired")
//             this.setState({emailError: "Enter email"});
//             this.setState({passwordError:"Enter password"});
//              } 
//              else if(res.data.message === "Login Success")
//              { 
//                this.setState({loggedIn:true});
//                this.props.onLogin(true);
//                alert("Login Successfull");
//                console.log("login successfull") 
//                 navigate('/register');
//              } 
//               else 
//              { 
//                 alert("Incorrect Email and Password not match"); 
//                 if(email===""){
//                     alert("Email is required");
//                 //    setErrors.email="Email is required"; 
//                 setEmail("Email is required");
//                 }
//              }
//           }
//         // , fail => {
//         //    console.error(fail); // Error! }
//   );
//         }

 
//          catch (err) {
//         //   alert(err);
//           if(email===""){
//             // alert("Email is required");
//            setErrors("Email is required"); 
//         // setEmail("Email is required");
//         }
//         }
      
//       }

 //   return (
        
//             <div className="container">
//             <form>
//             <div class="row">
//                 <h2>Login</h2>
//              <hr/>
//              </div>

//              <div class="row">
//              <div class="col-sm-6">
 
//             <form>
//         <div class="form-group">
//           <label>Email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Name"
          
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
          
//           />
//           hello
//      {/* {email && (
//                     <span className="text-danger">{setErrors(email)}</span>
//                   )} */}
//                    {/* {errors.email && (
//                     <span className="text-danger">{errors.email}</span>
//                   )} */}
//         </div>

//         <div class="form-group">
//             <label>Password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter Fee"
            
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
            
//             />
//           </div>
//                   <button type="submit" class="btn btn-primary" onClick={login} to="/register">Login</button>
//               </form>

//             </div>
//             <div>
//                 <Link to="/register">Already have an account? Register Now</Link>
//             </div>
//             </div>
//             </form> 
//             </div>
            
     
//     );
//   }
  
import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./CustomerLogin.css";


export default function Login() {
  const[name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/Food/api/v1/employee/login", {
            name: name, 
          email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.message === "Login Success")
             { 
                alert("Login success..")
                navigate(`/dashboard/${name}`);
             } 
             else if(res.data.message === "password Not Match"){
              alert("Password does not exists");
             }
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

    return (
//        <div>
//         <section id="header">
//   <a><div className="cusHomeLogo">Diet Tracker</div></a>
//   <div>
//     <ul id="navbar">
//       <li><a className="active" >Admin Login</a></li>
//       <li><a>Customer Login</a></li>
//     </ul>
//   </div>
// </section>
// <body>
//             <div class="mainform">
//             <div class="customerlogin">
//                 <h2 id="loginhead"> Admin Login</h2>
           
            
 
//             <form id="login">
//             <label for="name" className="loginlabel">User Name</label>
//         <br/>
//           <input type="text"   id="name" placeholder="Your Name"
          
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//            />
        
//          <br/> <br/>
//           <label for="email" id="email" className="loginlabel">Email</label>
//           <br/>
//           <input type="email"  id="email" placeholder="Your Name"
          
//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
          
//           />
//  <br/> <br/>
        
//             <label for="password" className="loginlabel">password</label>
//             <br/>
//             <input type="password"  class="form-control" id="password" placeholder="Your Password"
            
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
            
//             />
//           <br/><br/>
//                   <button type="submit" id="submit class="btn btn-primary" onClick={login} >Login</button>
//                   <div className="gotoreg">
//                     <Link className="text-center" id="goregister" to="/customerRegister">Already have an account? Register Now</Link>
//                   </div>
                 
//               </form>

//             </div>
//             </div>
           
// </body>
//      </div>

     <div>
       <section id="header">
  <a><div className="cusHomeLogo">Diet Tracker</div></a>
   <div>
     <ul id="navbar">
       <li><a><Link to="/customerlogin">Customer Login</Link></a></li>
       <li><a className="active"><Link to="/login">Admin Login</Link></a></li>
    </ul>
  </div>
 </section>
 <body>
  <div className="mainform">
    <div className="customerlogin">
    <h2 id="loginhead"> Admin Login</h2>
    <form id="login">
    <label for="name" className="loginlabel">User Name</label>
       
          <input type="text"   id="name" placeholder="Your Name"
          
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
           />
        
         <br/> <br/>
       
     
          <label for="email" className="loginlabel">Email</label>
          
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
        
                  <button type="submit" id="submit" class="btn btn-primary" onClick={login} >Login</button>

                  <div className="gotoreg">
                    <Link className="text-center" id="goregister" to="/register">Don’t have an account ? <span>Register Now</span></Link>
                  </div>
    </form>
    </div>
  </div>
 </body>
     </div>
    );
  }
  
//   export default Login;