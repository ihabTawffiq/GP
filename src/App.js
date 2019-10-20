import React, { Component } from "react";
import "./App.css";
import "./login.css";
import "./Bottom.css";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import Home from "./components/Home";
import Manger from "./components/Manger";
import Student from "./components/Student";
import Divs from "./components/Divs.js";
import Nav from "./components/Nav.js";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Addteacher from "./components/Addteacher";
import Addstdaffairs from "./components/Addstdaffair";
import Addcontrolemp from "./components/Addcontrolemp";
import Addworkersaffair from "./components/Addworkersaffair";
import ComponentGuard from "./guards/componentsGuard";
import jwt from "jsonwebtoken";
const Decode = token => {
  try {
    const decode = jwt.verify(token, "Battotf2u0c1k2");
    return decode;
  } catch (error) {
    console.log(error);
  }
};
class App extends Component {
  state = {};

  render() {
    const decode = this.props.token ? Decode(this.props.token) : null;
    console.log(decode);

    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Switch>
            {
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////
              /////////////////////////////////
              ///////////////////////
              /// focus with me please bitchs  ===> this is the fucken componets guard ... you need to
              // pass 5 props for it  (1)exact this is optional
              // (2) path requird
              // (3) the motheFuchen component that u need to fucken render
              // (4) the fuckken rules for rundering it
              // (5) the redirect path if  the rule droped
              // some example down there bitchs
              // {decode} is the decoding of the token that arrived after logged in suuccessfully
              // console it to see its contants
              // every componnet will be written as the following fuckers
              ///////////////////////
              /////////////////////////////////
              //////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////
              ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            }
            <ComponentGuard
              exact
              path="/home"
              component={Home}
              authRules={true}
            />
            <ComponentGuard
              exact
              path="/login"
              component={Login}
              authRules={!decode}
              redirectPath={"/home"}
            />
            <ComponentGuard
              exact
              path="/addteacher"
              component={Addteacher}
              authRules={
                decode && (decode.rule.workersA || decode.rule.manager)
              }
              redirectPath={"/home"}
            />
            <ComponentGuard
              exact
              path="/addstudentaffairs"
              component={Addstdaffairs}
              authRules={
                decode && (decode.rule.workersA || decode.rule.manager)
              }
              redirectPath={"/home"}
            />
            <ComponentGuard
              exact
              path="/addworkersaffair"
              component={Addworkersaffair}
              authRules={decode && decode.rule.manager}
              redirectPath={"/home"}
            />
            <ComponentGuard
              exact
              path="/addcontrolemp"
              component={Addcontrolemp}
              authRules={
                decode && (decode.rule.workersA || decode.rule.manager)
              }
              redirectPath={"/home"}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};
export default connect(mapStateToProps)(App);
