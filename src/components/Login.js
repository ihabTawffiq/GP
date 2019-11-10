import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { LogIN } from "../store/actions/authaction";
import './login.css'
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleclick = (e) => {
    e.preventDefault();
    this.props.Login(this.state);

    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="form-container" >
            <form>
                <h2 className='addTeacherh2'>Login</h2>
                <div className="inputIT" >
                  <input type="email"   onChange={this.handleChange} id="email" placeholder="enter email" />
                </div>
                <div className="inputIT" >
                  <input type="password"  onChange={this.handleChange} id="password" placeholder="password"/>
                </div>
                <div className='inputIT'> 
              <input type="submit"  onClick={this.handleclick}  variant="contained" value="Continue"/>
            </div>
            </form>
        </div >
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Login: data => {
      dispatch(LogIN(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
