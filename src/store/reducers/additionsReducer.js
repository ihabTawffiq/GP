const initState = {
  data: null,
  add_err: null
};

const additionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_WORKERAFFIR_SUCCESS":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
export default additionsReducer;
