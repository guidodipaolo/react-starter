import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRavenMiddleware from "raven-for-redux";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import rootReducer from '../reducers';

const env = runtimeEnv(); // Access process.env vars
const nodeEnv = env.REACT_APP_ENV || process.env.NODE_ENV || 'development';
if ((nodeEnv === 'production' || nodeEnv === 'staging') && env.REACT_APP_SENTRY_DSN) {
  window.Raven.config(env.REACT_APP_SENTRY_DSN, {
    environment: env.REACT_APP_ENV,
    dataCallback: function(data) {
      // Sending just the last 20 actions. Default is 100, but limit is 100kb
      let breadcrumbs = data.breadcrumbs.values.slice(Math.max(data.breadcrumbs.values.length - 20, 0));
      data.breadcrumbs.values = breadcrumbs;
      return data;
    }
    // debug: true
  }).install();
}

const initialState = {};
const enhancers = [];
const middlewares = [
  thunkMiddleware
];

if (nodeEnv === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  const loggerMiddleware = createLogger({
    collapsed: true
  });
  middlewares.push(loggerMiddleware);  // _DEV_ only
}

if ((nodeEnv === 'production' || nodeEnv === 'staging') && env.REACT_APP_SENTRY_DSN) {
  const ravenMiddleware = createRavenMiddleware(window.Raven, {
    // To add the payload into the breadcrumbs
    // breadcrumbDataFromAction: action => ({
    //   payload: data.payload
    // }),
    // Just adding auth because limit is 100bk
    stateTransformer: state => state.auth
  })
  middlewares.push(ravenMiddleware);
}

const composedEnhancers = compose(
  applyMiddleware(
    ...middlewares
  ),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
