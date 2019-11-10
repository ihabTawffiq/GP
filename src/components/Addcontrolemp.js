
import React, {Component}from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './SignTeacher.css';
import { addControlEmp } from "../store/actions/additionsActions";
import { connect } from "react-redux";
import { fromUnixTime } from "date-fns/esm";



class Addcontrolemp extends Component {

 
  //  handleDateChange = date => {
  //   this.setState({
  //     birthdate:date
  //   })
  // };

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

  handleChangeDate = e => {
    console.log(e);

    this.setState({
      birthdate: e === "Invalid Date" ? null : e
    });
  };

  
  handleClick = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.addCEmp(this.state);
  };
  
  render() {
    return (
      <div className="form-container" >
              <form>
                <h2 className='addTeacherh2'>Add Teacher</h2>
                <div className="inputIT" >
                  <input type="text" name="firstname" id="first_name" onChange={this.handleChange} placeholder="Firstname"/>
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
                     <input type="text" name="address" placeholder="Address" />
                 </div>                 
                <div className="inputIT" >
                <select id="gender" onChange={this.handleChange}>
                  <option value="">--select--</option>
                  <option value="male" >Male</option>
                  <option value="female">Female</option>
                </select>
                </div>

            
            {/* <div className="inputIT" >             */}
            <MuiPickersUtilsProvider className="data" utils={DateFnsUtils}>
          <Grid container justify="space-around" className="data">
          <KeyboardDatePicker
           placeholder= 'dd/mm/yyyy'
            margin="normal"
            id="date-picker-dialog"
            format="dd/MM/yyyy"
            value = {this.state.birthdate}
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
    addCEmp: data => {
      dispatch(addControlEmp(data));
    }
  };
};
export default connect(
  
  null,
  mapDispatchToProps
)(Addcontrolemp);

