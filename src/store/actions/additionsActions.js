import jwt from "jsonwebtoken";
import axios from "axios";
const Decode = token => {
  try {
    const decode = jwt.verify(token, "Battotf2u0c1k2");
    return decode;
  } catch (error) {
    console.log(error);
  }
};
export const addWorkersA = data => {
  return (dispatch, getState) => {
    const state = getState();
    const rule = Decode(state.auth.token);
    const body = {
      auther: {
        employee_type: Object.getOwnPropertyNames(rule.rule)[0]
      },
      data: data
    };
    console.log(body);
    axios
      .post("https://lit-peak-11555.herokuapp.com/addWorkersAffair", body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};
export const addControlEmp = data => {
  return (dispatch, getState) => {
    const state = getState();
    const rule = Decode(state.auth.token);
    const body = {
      auther: {
        employee_type: Object.getOwnPropertyNames(rule.rule)[0]
      },
      data: data
    };
    console.log(body);
    axios
      .post("https://lit-peak-11555.herokuapp.com/addControlEmployee", body)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export default null;
