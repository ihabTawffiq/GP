import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import './SignTeacher.css';

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { addWorkersA } from "../store/actions/additionsActions";
import { connect } from "react-redux";
class Addworkersaffair extends Component {
  state = {
    first_name: "",
    last_name: "",
    gender: "",
    birthdate: null,
    identity: "",
    address: "",
    phonenumber: "",
    date:new Date('2014-08-18T21:11:54')

  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleChange2 = e => {
    console.log(e.target);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeDate = e => {
    console.log(e);

    this.setState({
      birthdate: e === "Invalid Date" ? null : e
    });
  };
  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addWA(this.state);
  };
  render() {
    return (
      <div className="form-container" >
      <form>
        <h2 className='addTeacherh2'>Add Worker</h2>
        <div className="inputIT" >
          <input type="text" name="firstname" onChange={this.handleChange} id="first_name" placeholder="Firstname"/>
        </div>
        <div className="inputIT" >
          <input type="text" name="lastname"  id="last_name" onChange={this.handleChange} placeholder="Lastname" />
        </div>
        <div className="inputIT" >
           <input type="number" name="identity" id="identity" onChange={this.handleChange} placeholder="Identity"/>
        </div>
        <div className="inputIT" >             
           <input type="number" name="phonenumber" id="phonenumber" onChange={this.handleChange} placeholder="Phonenumber"/>
         </div> 
         <div className="inputIT" >              
             <input type="text" name="address" placeholder="Address" onChange={this.handleChange} />
         </div>                 
        <div className="inputIT" >
        <select id="gender" onChange={this.handleChange2}>
          <option value="">--select--</option>
          <option value="male" >Male</option>
          <option value="female">Female</option>
        </select>
        </div>

    
      {/* <div className="inputIT" >             */}
      <MuiPickersUtilsProvider className="data" utils={DateFnsUtils}>
          <Grid container justify="space-around" className="data">
          <KeyboardDatePicker
            placeholder="DD/MM/YYYY"
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            value={this.state.birthdate}
            onChange={this.handleChangeDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      {/* </div> */}
    <div className='inputIT'> 
      <input type="submit" onClick={this.handleClick} name="sumbit" value="Submit"/>
    </div>
  </form>
</div>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addWA: data => {
      dispatch(addWorkersA(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Addworkersaffair);
