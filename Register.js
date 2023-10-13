// import {  useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./App.css";
//  export default function Register() {
  
//     const [employeename, setEmployeename] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const initialValues = { username:"",email:"",password:""};
//     const [formValues, setFormValues] = useState(initialValues);
//     const [errors, setErrors] = useState({});
    
//     const handleChange =(e) => {
//       console.log(e.target);
//       const{name,value} = e.target;
//       setFormValues({...formValues, name:value});
//       console.log(formValues);
//     };
    // const onSubmit = async (e) =>{
    //   e.preventDefault();
    //   const validationErrors = validateForm(formValues);
    //   try{
    //     const result = await axios.post("http://localhost:8080/Food/api/v1/employee/save",formValues)
    //     const datas = result.data.formValues;
    //     if(datas === null){
    //       alert("Registration Failed");
    //     }else{
    //       setFormValues(result.data.formValues);
    //       alert("Registration Successfully..");
    //     }
    //   }catch(err){
    //     alert (err);
    //   }
    // }
    // async function save(event) {
    //     event.preventDefault();
    //     try {
    //       await axios.post("http://localhost:8080/Food/api/v1/employee/save", {
    //       employeename: employeename,
    //       email: email,
    //       password: password,
    //       });
    //       alert("Employee Registation Successfully");
    //       navigate('/register');

    //     } catch (err) {
    //       alert(err);
    //     }
    //   }
  
    
  //   return (
    
  //   <div class="container mt-4" >
  //   <link
  //       rel="stylesheet"
  //       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  //       integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  //       crossorigin="anonymous"
  //       referrerpolicy="no-referrer"
  //     ></link>
  //  <form onSubmit={(e) => save()}>
  //           <h1>Register</h1>
    
    
  //       <div className="ui divider"></div>
  //           <div className="ui form">

  //       {/* <span><i className="fa fa-user"></i></span> */}
         
  //         <div className="field">
  //            <label>Username</label>
  //         <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
  //       //   value={employeename}
  //       value={employeename}
  //         onChange={(event) => {
  //           setEmployeename(event.target.value);
  //         }}
  //         />
  //           {errors.employeename && (
  //                   <span className="text-danger">{errors.employeename}</span>
  //                 )}
  //       </div>

  //       <div class="field">
  //         <label>Email</label>
  //         <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
  //       //   value={email}
  //       value={email}
  //         onChange={(event) => {
  //           setEmail(event.target.value);
  //         }}
          
  //         />
  //  {errors.email && (
  //                   <span className="text-danger">{errors.email}</span>
  //                 )}
  //       </div>

  //       <div class="field">
  //           <label>Password</label>
  //           <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
  //           // value={password}
  //           value={password}
  //           onChange={(event) => {
  //             setPassword(event.target.value);
  //           }}
            
  //           />
  //             {errors.password && (
  //                   <span className="text-danger">{errors.password}</span>
  //                 )}
  //         </div>

  //       <Link type="submit" class="btn btn-primary mt-4" onClick={save} to="/home">Save</Link>
  //      </div>
  //     </form>
  //   </div>
   
  //   );

  //   function validateForm(){
  //     let errors = {};
  //     let isValid = true;
  //     if(formValues.employeename===""){
  //       errors.employeename="User Name is required";
  //       console.log("User name is required")
  //     }
  //     if(formValues.email===""){
  //       errors.email="Emai is required";
  //       console.log("Email is required");
  //     }
  //     if(formValues.password===""){
  //       errors.password="Password is required";
  //     }
  //     return errors;
  //   }
  // }
  
  // export default Register;
  import {  useState } from "react";
  import axios from "axios";
import { Link } from "react-router-dom";
import "./CustomerLogin.css";
  
 export default  function Register() {
      const[employeeid,setEmployeeid] = useState("");
      const [employeename, setEmployeename] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
  
  
      async function save(event) {
          event.preventDefault();
          try {
            await axios.post("http://localhost:8080/Food/api/v1/employee/save", {
            employeeid:employeeid,
            employeename: employeename,
            email: email,
            password: password,
            });
            alert("Employee Registation Successfully");
  
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
  <h2 id="loginhead">Admin Register</h2>
      
      <form id="login">
          {/* <div class="form-group">
            <label>Employee name</label>
            <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
            
            value={employeename}
            onChange={(event) => {
              setEmployeename(event.target.value);
            }}
            />
  
          </div>
  
          <div class="form-group">
            <label>email</label>
            <input type="email"  class="form-control" id="email" placeholder="Enter Email"
            
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            
            />
   
          </div>
  
          <div class="form-group">
              <label>password</label>
              <input type="password"  class="form-control" id="password" placeholder="Enter password"
              
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              
              />
            </div>
  
          <button type="submit" class="btn btn-primary mt-4" onClick={save}>Save</button>
          */}
          <label for="id" className="loginlabel">Emloyee Id</label>
        
        <input type="number"   id="id" placeholder="Your Id"
        
        value={employeeid}
        onChange={(event) => {
          setEmployeeid(event.target.value);
        }}
         />
      
       <br/> <br/>
           <label for="name" className="loginlabel">User Name</label>
        
        <input type="text"   id="name" placeholder="Your Name"
        
        value={employeename}
        onChange={(event) => {
          setEmployeename(event.target.value);
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
    
    // export default Register;