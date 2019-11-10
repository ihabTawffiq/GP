import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogOut } from "../store/actions/authaction";
import './SignTeacher.css';


function ButtonAppBar(props) {

  return (
    <div >
      <div className="nav">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="#!" className="nav-link" onClick={() => {
                props.signOut();
              }}>
              LogOut
          </Link>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/addteacher" className="nav-link">Addteacher</Link>
          <Link to="/addstudentaffairs" className="nav-link">Addstd</Link>
          <Link to="/addcontrolemp" className="nav-link">Addcontrolemp</Link>
          <Link to="/addworkersaffair" className="nav-link">Addworkersaffair</Link>
          </div>
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
