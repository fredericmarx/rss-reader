import { combineReducers } from 'redux';

import appReducer from '../containers/AppShell/reducer';

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
