import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from './reportWebVitals';
import Login from "./Sample/Login";
import Home from "./Sample/Home";

// import { StrictMode } from "react";
 import {Register} from "./Register";
import FrontPage from './foods/FrontPage';
//import Home from './pages/Home';

// import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);



// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <Login />
//   </StrictMode>,
//   rootElement
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// document.getElementById('root')
// );

// const root =ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/> 
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
