import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import Cable from 'actioncable'
import { BrowserRouter } from 'react-router-dom'
// import { loadState, saveState } from './localStorage'
// import throttle from 'lodash/throttle'
//
// const persistedState = loadState();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

// store.subscribe(throttle(() => {
//   saveState({
//     currentUser: store.getState().users.currentUser
//   })
// }, 1000));

console.log(store)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
