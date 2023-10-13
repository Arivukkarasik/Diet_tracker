import React, {useState} from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
 import Home from './pages/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

 import FrontPage from './foods/FrontPage';
 import FindByName from './foods/FindByName';
 import Dashboard from './Dashboard';
  import Login1 from './Login1';

import Register from "./Register";
import AddFood1 from './foods/AddFood1';
 import Login from "./Login";
import CustomerLogin from "./CustomerLogin";
import CustomerRegister from "./CustomerRegister";

import Entry from "./Entry";
import CustomerHome from "./CustomerHome";
import Shop1 from "./Shop1";
import Sproduct1 from "./Sproduct1";
import Update from "./foods/Update";

import FindBySize from "./FindBySize";
import FindAllOrderByName from "./foods/FindAllOrderByName";
import About from "./About";
import Contact from "./Contact";

function App() {
  
  return (
    <div className="App">
      
      <Router>
     {/* <Navbar/> */}
 <Routes>
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
    <Route  path="/frontpage" element={<FrontPage/>} />
   
    <Route path="/frontpage"frontpage element={<FrontPage/>} />
    <Route path="/findbyname" element={<FindByName/>}/>
   
  <Route path="/login" element={<Login/>}/>
    
  <Route exact path="/customerlogin" element={<CustomerLogin/>}/>
 
    <Route path="/register" element={<Register/>}/>
    <Route path="/login1" element= { <Login1/>} />
      <Route path="/addfood1" element={<AddFood1/>} /> 
       <Route exact path="/customerlogin" element={<CustomerLogin/>} />
       <Route path="/customerregister" element={<CustomerRegister/>} />
      <Route path="/entry" element={<Entry/>} />
       <Route path="/customerhome" element={<CustomerHome/>} /> 
      
      <Route path="/sproduct1" element={<Sproduct1/>}/>
     
       <Route path="/update" element={<Update/>}/>
      
      <Route path="/" element={<Login/>}/>
     
      <Route path="/customerhome/:name" element={<CustomerHome/>}/>
      <Route path="/dashboard/:name" element={<Dashboard/>}/> 
      <Route path="/findbysize" element={<FindBySize/>}/>
      <Route path="/findallorderbyname" element={<FindAllOrderByName/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </div>
  );
}

 export default App;
