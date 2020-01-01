import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./../reducers";
import rootSaga from "./../sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const history = createBrowserHistory();
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
export { history };
