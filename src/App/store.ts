import { Reducer } from "react";
import { Action, compose, createStore } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

class DefaultState {
  private count: number;
  constructor() {
    this.count = 0;
  }
}

const reducer: Reducer<unknown, Action<any>> = function (state, action) {
  if (state === undefined) {
    return new DefaultState();
  }
  return state;
};

export default createStore(reducer, composeEnhancers());
