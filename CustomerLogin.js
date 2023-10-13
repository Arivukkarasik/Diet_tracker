import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./CustomerLogin.css";

export default function CustomerLogin() {
   const[name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/Food/api/v1/customer/login", {
            name: name,
            email: email,
            password: password,
            
            }).then((res) => 
            {
             console.log(res.data);
           
             if (res.data.message === "Email not exits") 
             {
              console.log("email not exists");
               alert("Email not exits");
             } 
            //  else if(res.data.message === " Email is required")
            //  {
            //   errors.email = " Email is required";
            //   console.log("email required");
            //   alert("Email is required");
            //   //error.email="Email is required";
            //  }
             else if(res.data.message === "Login Success")
             { 
                alert("Login Success..");
                navigate(`/customerhome/${name}`);
             } 
             else if(res.data.message === "password Not Match"){
              alert("Password does not exists");
             }
              else 
             { 
                alert(" Email and Password not match");
                console.log("password else");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }
       //const userName = "Arivu";
    return (
      <div>
         

       
        {/* <body>
            <div className="mainlogin">
              <div className="customerlogin">
            <div class="row">
                <h2>Customer Login</h2>
             <hr/> 
    </div>
              
             <div class="row">
             <div class="col-sm-6">
 
            <form>
            <div class="form-group">
          <label>Name</label>
          <input type="text"  class="form-control" id="name" placeholder="Your Name"
          
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          
          />
         
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Your email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
         
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Your password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>

                  <div>
                    <Link className="text-center" to="/customerRegister">Already have an account? Register Now</Link>
                  </div>
              </form>

            </div>
            </div>
            </div>
            </div>
</body>  */}
<section id="header">
  <a><div className="cusHomeLogo">Diet Tracker</div></a>
  <div>
    <ul id="navbar">
      
      <li><a className="active"><Link to="/customerlogin">Customer Login</Link></a></li>
       <li><a><Link to="/login">Admin Login</Link></a></li>
    </ul>
  </div>
</section>
<body>

            <div className="mainform">
              <div className="customerlogin">
              <h2 id="loginhead"> Customer Login</h2>
                 

             <form id="login">
          
          <label for="name" className="loginlabel">User Name</label>
        
          <input type="text"   id="name" placeholder="Your Name"
          
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
           />
        
         <br/> <br/>
       
     
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
        
                  <button type="submit" id="submit" class="btn btn-primary" onClick={login} >Login</button>

                  <div className="gotoreg">
                    <Link className="text-center" id="goregister" to="/customerRegister">Don’t have an account? <span>Register Now</span></Link>
                  </div>
              </form>

            </div>
            </div>
           
</body> 
          </div>
         );
}