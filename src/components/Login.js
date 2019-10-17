import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  btn: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    position: "absolute",
    left: "43%",
    bottom: "42%"
  },
  txt: {
    width: "35%",
    position: "absolute",
    left: "30%"
  },
  txt2: {
    width: "35%",
    position: "absolute",
    left: "30%",
    top: "30%"
  },
  cont: {
    border: "2px solid black"
  }
});

export default function Login() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        className={classes.txt2}
        placeholder="Enter Your Email"
        label="Email"
        margin="normal"
        type="email"
      />

      <TextField
        className={classes.txt}
        placeholder="Enter Your Password"
        label="Password"
        margin="normal"
        type="password"
      />

      <Button className={classes.btn} color="primary" variant="contained">
        Continue
      </Button>
    </React.Fragment>
  );
}
