import React from 'react';
import './App.css';
import './login.css';
import './Bottom.css'
import Login from './components/Login';
import Signup from "./components/Signup.js";
import Home from './components/Home';
import Manger from './components/Manger';
import Student from './components/Student';
import Divs from "./components/Divs.js"
import Nav from "./components/Nav.js"

import { BrowserRouter,Route } from "react-router-dom";
import Addteacher from './components/Addteacher';
import Addstdaffairs from './components/Addstdaffair';
import Addcontrolemp from './components/Addcontrolemp';
import Addworkersaffair from './components/Addworkersaffair';


function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Nav />
    <Route exact path="/home" component={Home} />
    <Route  path="/login" component={Login} />
    <Route  path="/signup" component={Signup} />
    <Route  path="/manger" component={Manger} />
    <Route  path="/student" component={Student} />
    <Route  path="/addteacher" component={Addteacher} />
    <Route  path="/addstudentaffairs" component={Addstdaffairs} />
    <Route  path="/addcontrolemp" component={Addcontrolemp} />
    <Route  path="/addworkersaffair" component={Addworkersaffair} />


  </BrowserRouter>
  </div>
  );
}

export default App;
