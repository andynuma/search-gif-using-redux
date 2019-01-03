import React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

import { Provider } from "react-redux";

import App from "./App";

import getUrls from "./actions/getUrls";

// import giphyAPI from "./APIs/giphyAPI";

// giphyAPI("cat").then(res => {
//   console.log(res);
// });

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));
// store.dispatch(getUrls("cat"));

// console.log(store.getState());

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
