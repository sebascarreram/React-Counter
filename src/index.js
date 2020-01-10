import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
////////////////////////////////
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
////////////////////////////////
import CounterReducer from "./store/reducers/counter";
import ResultReducer from "./store/reducers/result";

// Reducer

const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
