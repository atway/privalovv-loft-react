import { createStore, compose, applyMiddleware } from "redux";
import { taxiUserMiddleware } from "./user/middlewares";
import rootReducer from "./user";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(taxiUserMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  return store;
};

export default createAppStore;
