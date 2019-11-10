import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogOut } from "../store/actions/authaction";


function ButtonAppBar(props) {

  return (
    <div >
            <AppBar position="static">
              <Toolbar className="nav">
          <Link to="/login">Login</Link>
          <Link to="#!"  onClick={() => {
                props.signOut();
              }}>
              LogOut
          </Link>
          <Link to="/home">Home</Link>
          <Link to="/addteacher">Addteacher</Link>
          <Link to="/addstudentaffairs">Addstd</Link>
          <Link to="/addcontrolemp">Addcontrolemp</Link>
          <Link to="/addworkersaffair">Addworkersaffair</Link>
          </Toolbar>
          </AppBar>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(LogOut());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ButtonAppBar);
