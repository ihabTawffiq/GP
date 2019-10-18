import axios from "axios";

export const LogIN = data => {
  return (dispatch, getState) => {
    // console.log(data);
    axios
      .post("https://lit-peak-11555.herokuapp.com/LOGIN", data)
      .then(res => {
        console.log(res);
        dispatch({ type: "SIGNIN_SUCCESS", res: res.data });
      })
      .catch(err => {
        console.log();
        dispatch({ type: "SIGNIN_FAILED", err: err.response.data });
      });
  };
};

export const LogOut = () => {
  return (dispatch, getState) => {
    // console.log(data);

    dispatch({ type: "SIGNOUT" });
  };
};

export default null;
