
import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import './SignTeacher.css';

  
export default function Addstdaffairs () {
    const [value, setValue] = React.useState('female');
    const [state, setState] = React.useState({
        one: true,
        two: false,
        three: false,
      });
      const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

      const handleDateChange = date => {
            setSelectedDate(date);
          };
  const handleChange = event => {
    setValue(event.target.value);
  };
  // const handleChange2 = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

  const { one, two, three } = state;

    return (
      <React.Fragment>
      <div className="form-container" >
         <form>
           <h2 className='addTeacherh2'>Add Student</h2>
           <div className="inputIT" >
             <input type="text" name="firstname" placeholder="Firstname"  />
           </div>
           <div className="inputIT" >
             <input type="text" name="lastname" placeholder="Lastname" />
           </div>
           <div className="inputIT" >
           <select>
             <option>Male</option>
             <option>Female</option>
           </select>
           </div>

      
      <div className="inputIT" >
         <input type="text" name="identity" placeholder="Identity"/>
      </div>
      <div className="inputIT" >
       </div>
      <div className="inputIT" >              
         <input type="text" name="address" placeholder="Address" />
      </div>
       <div className="inputIT" >             
         <input type="number" name="phonenumber" placeholder="Phonenumber"/>
       </div> 
       {/* <div className="inputIT" >             */}
       <MuiPickersUtilsProvider className="data" utils={DateFnsUtils}>
     <Grid container justify="space-around" className="data">
     <KeyboardDatePicker
     
       margin="normal"
       id="date-picker-dialog"
       format="MM/dd/yyyy"
       value={selectedDate}
       onChange={handleDateChange}
       KeyboardButtonProps={{
         'aria-label': 'change date',
       }}
     />
   </Grid>
 </MuiPickersUtilsProvider>
 {/* </div> */}
       <div className='inputIT'> 
         <input type="submit" name="sumbit" value="Submit"/>
       </div>
     </form>
</div>        </React.Fragment>
    );
  }


