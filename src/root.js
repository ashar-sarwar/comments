import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
//import reduxPromise from "redux-promise";
import async from './middlewares/async'
import reducers from "./reducers";
import stateValidator from "./middlewares/stateValidator";

export default props => {

  const store = createStore(reducers, props.initialState,applyMiddleware(async,stateValidator));
  return <Provider store={store}>{props.children}</Provider>;
};
 