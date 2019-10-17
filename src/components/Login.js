import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { LogIN } from "../store/actions/authaction";
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
  handleclick = () => {
this.props.Login(this.state)
    // console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          margin="normal"
          type="email"
          id="email"
          onChange={this.handleChange}
        />

        <TextField
          placeholder="Enter Your Password"
          label="Password"
          margin="normal"
          type="password"
          id="password"
          onChange={this.handleChange}
        />

        <Button onClick={this.handleclick} color="primary" variant="contained">
          Continue
        </Button>
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
