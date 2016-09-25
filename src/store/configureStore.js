import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
