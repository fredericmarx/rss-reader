/*
  The reducer are where we calculate how the state
  should change, based on the action type. So when
  we "request" the user, we dispatch the
  GET_USER_REQUEST action, over here in our reducer
  we set the isFetching state property to true.
*/

import { APP } from './actions';

const initialState = {
  isFetching: false,
  user: {
    name: 'Bob Bobby',
    emailAddress: 'bob.bobby@example.com',
    id: '1'
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP.GET_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case APP.GET_USER_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      });
    default:
      return state;
  }
};

export default appReducer;
