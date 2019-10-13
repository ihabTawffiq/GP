import React from 'react';
import './App.css';
import './login.css';
import Login from './components/Login';
import Signup from "./components/Signup.js";
import Home from './components/Home';
import Manger from './components/Manger';
import Student from './components/Student';

import Nav from "./components/Nav.js"

import { BrowserRouter,Route } from "react-router-dom";


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

  </BrowserRouter>
  </div>
  );
}

export default App;
