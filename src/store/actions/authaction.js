import axios from "axios";

export const LogIN = data => {
  return (getstate, dispatch) => {
    // console.log(data);
    axios
      .post("https://lit-peak-11555.herokuapp.com/LOGIN", data)
      .then(res => {
        console.log(res);
        dispatch({ type: "SIGNIN_SUCCESS", res: res.data });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_FAILED" });
      });
  };
};

export default null;
