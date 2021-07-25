import axios from "axios";
import { ActionType } from "../Constants";
import { baseUrl, PATH } from "../Constants"; //baseurl and api importing from constants
// get data from api
export const getData = () => async (dispatch, getState) => {
  try {
    const stock = await axios(`${baseUrl}${PATH.stocks}`, {
      method: "GET",
    });
    if (stock.status === 200) {
      // if api request is successfull then dispatch data through actions
      dispatch({
        type: ActionType.STOCKS_DATA_SUCCESSFULL,
        payload: stock.data.data,
      });
    } else {
      // failed dispatch
      dispatch({ type: ActionType.STOCKS_DATA_FAILED, payload: [] });
    }
  } catch (err) {
    console.log(err);
    // failed dispatch
    dispatch({ type: ActionType.STOCKS_DATA_FAILED, payload: [] });
  }
};
