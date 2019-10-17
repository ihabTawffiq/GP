const initstate = {
  token: null
};

const authreducer = (state = initstate, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        token: action.res.token,
        signUp_err: null
      };
    case "SIGNUP_FAILED":
      return {
        ...state,
        signUp_err: "err"
      };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        token: action.data.token,
        signUp_err: null
      };
    case "SIGNIN_FAILED":
      return {
        ...state,
        signUp_err: "err"
      };
    case "SIGNOUT":
      return {
        ...state,
        token: null,
        signUp_err: null
      };
    default:
      return state;
  }
};

export default authreducer;
