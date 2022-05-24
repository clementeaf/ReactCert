import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from './reducers';
import App from './routes/App';
import "core-js/stable";
import "regenerator-runtime/runtime";

const initialState = {
  favoriteCoins: [],
  sectionActive: 'Coins',
};

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState, 
  applyMiddleware(...middlewares)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
