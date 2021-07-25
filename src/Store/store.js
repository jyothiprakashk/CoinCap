import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../Reducers/reducer";
import promise from "./promise";
import array from "./array";
export const storeObj = {};

// api data is stored by using redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["stocks"],
};

export default function setup() {
  // logger for development purpose
  const logger = createLogger();

  let middleWareArray = [thunk, promise, array];
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    middleWareArray.push(logger);
  }
  const middleware = [applyMiddleware(...middleWareArray)];
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // middleware.push(
    //   applyMiddleware(require("redux-immutable-state-invariant").default()),
    // );
  }
  // combinereducer takes a hash of reducers and returns reducer
  const reducer = combineReducers({ reducers });
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(persistedReducer, {}, compose(...middleware));
  if (global.isDebuggingInChrome) {
    window.store = store;
  }
  const persistor = persistStore(store, null, () => {});
  storeObj.store = store;
  return { persistor, store };
}
