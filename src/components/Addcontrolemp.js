import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import red from "@material-ui/core/colors/red";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { addControlEmp } from "../store/actions/additionsActions";
import { connect } from "react-redux";
import { fromUnixTime } from "date-fns/esm";
class Addcontrolemp extends Component {
  state = {
    first_name: "",
    last_name: "",
    gender: "",
    birthdate: null,
    identity: "",
    address: "",
    phonenumber: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChangeDate = e => {
    console.log(e);

    this.setState({
      birthdate: e === "Invalid Date" ? null : e
    });
  };

  handleChange2 = e => {
    console.log(e.target);

    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addCEmp(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <TextField
            placeholder="Enter Your Firstname"
            label="Firstname"
            margin="normal"
            id="first_name"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            placeholder="Enter Your Lastname"
            label="Lastname"
            margin="normal"
            id="last_name"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            placeholder="Identity"
            label="Identity"
            margin="normal"
            type="number"
            id="identity"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            placeholder="Phone Number"
            label="Phone Number"
            margin="normal"
            type="number"
            id="phonenumber"
            onChange={this.handleChange}
          />
          <br />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="dd/MM/yyyy"
              placeholder="dd/MM/yyyy"
              onChange={this.handleChangeDate}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
          <br />
          <TextField placeholder="Address" label="Address" type="address" />
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              onChange={this.handleChange2}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button color="primary" variant="contained" onClick={this.handleClick}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCEmp: data => {
      dispatch(addControlEmp(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Addcontrolemp);
