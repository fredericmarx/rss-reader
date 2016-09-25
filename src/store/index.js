import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

/*
  Our "Routes" component controls what we
  render and where, so this file doesn't
  need to care too much about any component
  but Routes, which is quite nice.
*/
import Routes from '../components/Routes';

const store = configureStore();

const Store = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default Store;
