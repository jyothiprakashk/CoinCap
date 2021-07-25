import { ActionType } from "../Constants";
// initialstate
const initialState = {
  loader: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // if type is stocks successfull then update state based on previous state, action and returns new application state
    case ActionType.STOCKS_DATA_SUCCESSFULL:
      return { ...state, stocks: action.payload };
    case ActionType.STOCKS_DATA_FAILED:
      return { ...state, stocks: action.payload };
    default:
      return state;
  }
};

export default reducer;
