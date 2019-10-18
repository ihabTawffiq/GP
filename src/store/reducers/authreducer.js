const initstate = {
  token: null,
  signUp_err: null
};

const authreducer = (state = initstate, action) => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        token: action.res.token,
        signUp_err: null
      };
    case "SIGNIN_FAILED":
      return {
        ...state,
        signUp_err: action.err
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
