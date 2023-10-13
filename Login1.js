import React, { Component } from "react";
// import "./Log.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username:"",
      password: "",
      error:"",
      loggedIn: false,
      // error: {
        emailError: "",
        usernameError:"",
        passwordError: "",
        onError:""
      // },
    };
    
  }
  // const navigate = useNavigate();
  onChangeName = (e) => {
    this.setState({
      email: e.target.value,
      emailError: "",
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
      passwordError: "",
    });
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "", // Clear any previous error message
    });
  };
  login= async(e)=>{
      e.preventDefault();
      const { email, password } = this.state;
    //  let navigate = useNavigate();
      try{ 
          await axios.post("http://localhost:8080/Food/api/v1/employee/login",
          {email,password
      }).then((res) => 
        {
         console.log(res.data.message);
         const user=res.data.message==="Email not exits";
         const pass=res.data.message === "Login Success";
         //Test
         //alert("VALIDATION MESSAGE");
         if (res.data.message === "Email not exits") 
         {
         
          //  alert("Invalid login");
           this.setState({emailError:"Email is required"}); 
           this.setState({passwordError:"Password is reuired"});
          //  if(this.state.password.length>6){
          //   alert ("password must be be 6 character");
          //   this.setState({passwordError:"Password must be 6 letters"})
          // }
         } 
         else if(res.data.message === "Login Success")
         { 
          this.setState({ loggedIn: true });
          this.props.onLogin(true);
          alert("login succesfull");
          console.log("login succesfull");
            //  navigate('/register');
         } 
       
          else 
         {
            if(!this.state.email){
          this.setState({usernameError:"enter name"});
        }
        if(!this.state.password){
          this.setState({passwordError:"Enter a password"})
        }
            
            if(!this.state.error){
              // this.setState({error:""})
            
            this.setState({onError:"Incorrect Email and Password not match"});
            alert("Please, Regiter new Account");
            }
          }
          // alert("Incorrect Email and Password not match");
          // alert("Please, Regiter new Account");
          // navigate("/registration");
      }
);
    }

     catch (err) {
      if(!this.state.email){
        this.setState({emailError:"Enter Email"});
      }
      // else if(this.state.email.length<6){
      //   this.setState({eMailError:"password must 6 letters"})
      // }
      if(!this.state.password){
        this.setState({passwordError:"Enter a password"})
      }else if(this.state.password.length>6){
        this.setState({passwordError:"Password must be 6 letters"})
      }
      if(!this.state.error){
        this.setState({error:""})
      }
      // alert(err);
      console.log(err)
      // alert("Login is Failure")
    }
  
  }
  // handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { username, password } = this.state;
  //   if (username === "karthi" && password === "") {
  //     // Successful login, no need to handle errors here
  //     this.setState({ loggedIn: true });
  //     this.props.onLogin(true);
  //     alert("login succesfull");
  //     console.log("login succesfull");
  //     // this.props.onLogin();
  //   }else{
  //     if(!this.state.username){
  //       this.setState({usernameError:"Enter user name"});
  //     }
  //     if(!this.state.password){
  //       this.setState({passwordError:"Enter a password"})
  //     }
  //   }
  // };
  render() {
    // const { error } = this.state;
    
    return (
      <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="row">
          <div
            className=" offset-md-8 bg-light border rounder p-4 mt-5 shadow"
            style={{ width: "400px" }}
          >
            {" "}
            <form onSubmit={this.login}>
              {/* <div className="col-md-6 offset-md-3 bg-warning border rounder p-4 mt-4 shadow"></div> */}
              {/* <!-- Email input --> */}
              <div className="">
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "cursive",
                    fontSize: "60px",
                  }}
                >
                  LogIn
                </h2>
                <hr />
                {/* </div> */}
                {this.state.loggedIn ? (
                  <p>You are logged in!</p>
                ) : (
                  <div className="mb-3" style={{}}>
                    <div className="inputGroupContainer mb-3">
                      <label className="form-label" for="form2Example1">
                        Email address
                      </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="fa fa-user-circle-o"></i>
                        </span>
                        <input
                          type="text"
                          id="password"
                          placeholder="UserName"
                          name="username"
                          value={this.state.email}
                          // onChange={this.handleInputChange}
                        onChange={this.onChangeName}
                          className="form-control"
                        />
                        {/* {!this.state.username && (
                          <span className="text-danger">{this.state.usernameError}</span>
                        )} */}
                        {/* <span className="text-danger">
                          {!this.state.username? this.state.usernameError:""}
                        </span> */}
                      </div>
                      {!this.state.email && (
                          <span className="text-danger">{this.state.emailError}</span>
                        )}
                    </div>
                    {/* <!-- Password input --> */}
                    <div className="inputGroupContainer mb-3">
                      <label className="form-label" for="form2Example2">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-user-circle-o"></i>
                        </span>
                        <input
                          type={"password"}
                          id="form2Example2"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          // onChange={this.handleInputChange}
                          onChange={this.onChangePassword}
                          className="form-control"
                        />{" "}
                        {/* {error.password && (
                          <span className="error">{error.password}</span>
                        )} */}
                        {/* <p className="text-danger">
                          {!this.state.password? this.state.passwordError:""}
                        </p> */}
                      </div>
                      {!this.state.password && (
                          <span className="text-danger">{this.state.passwordError}</span>
                        )}
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form2Example34"
                            checked
                          />
                          <label class="form-check-label" for="form2Example34">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div class="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {!this.state.error && (
                          <span className="text-danger">{this.state.onError}</span>
                        )}
                    <hr />
                    {/* <!-- Submit button --> */}
                    
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        fontFamily: "cursive",
                        fontSize: "20px",
                      }}
                      className="btn btn-primary btn-block mb-4"
                    >
                      Log in
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                      <p>
                        Not a member? <Link to="/registration">Register</Link>
                      </p>
                      {/* <p>or sign up with:</p>
              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-secondary btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>*/}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
        </div>
      </div>
    );
  }
}
