import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import Reactotron from "../ReactotronConfig";

const logger = createLogger({ collapsed: true });
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger, sagaMiddleware), Reactotron.createEnhancer())
);

export class StoreService {
  static _store;
  static setStore(store) {
    this._store = store;
  }
  static connectStore(Component) {
    return (props) => (
      <Provider store={this._store}>
        {" "}
        <Component {...props} />{" "}
      </Provider>
    );
  }
  static connect(mapStateToProps, mapDispatchToProps, mergeProps = undefined) {
    return (Component) =>
      this.connectStore(
        connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
      );
  }
}
sagaMiddleware.run(rootSaga);
StoreService.setStore(store);
