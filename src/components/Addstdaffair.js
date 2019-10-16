
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
    btn: {
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      position: "absolute",
      left: "40%",
      bottom: '15%'
    },
    txt:{
        width: 190,
        position: "absolute",
        left: "39%",
        top : "65%"
    },
   
    formControl:{
        position: "absolute",
        top:"8%",
        left :'55%',
        backgroundColor: "primary"
        
    },
    formControl2:{
        position: "absolute",
        top:"48%",
        left :'55%',
        backgroundColor: "primary"
        
    },
    cont:{
        position : "absolute",
        left : "35%"
        
    }

  });
  
  
export default function Addstdaffairs () {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const [state, setState] = React.useState({
        one: true,
        two: false,
        three: false,
      });
  const handleChange = event => {
    setValue(event.target.value);
  };
  // const handleChange2 = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

  const { one, two, three } = state;

    return (
        
        <React.Fragment>
            <div className={classes.cont}>
            <TextField
              placeholder="Enter Your Firstname"
              label="Firstname"
              margin="normal"
              
            />
            <br />
            <TextField
             
              placeholder="Enter Your Lastname"
              label="Lastname"
              margin="normal"
            />
            <br />
              <TextField
             
             placeholder="Identity"
             label="Identity"
             margin="normal"
             type="number"
           />
            <br />
            <TextField
          
              placeholder="Enter Your Password"
              label="Password"
              margin="normal"
            type="password"
            />
            <br/>
            
        
            <TextField
            placeholder="Birthday"
            margin="normal"
            type="date"
          />
             <TextField
            placeholder="Phonenumber"
            label="Phonenumber"
            type="number"
          />
             <TextField
            placeholder="Address"
            label="Address"
            type="address"
          />
           <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel  value="female" control={<Radio color = "primary"/>} label="Female" />
          <FormControlLabel value="male" control={<Radio color = "primary"/>} label="Male" />
        
        </RadioGroup>
      </FormControl>

            
           </div>
           <Button className={classes.btn}
              color="primary"
              variant="contained"
            >Continue</Button>
        </React.Fragment>
    );
  }


