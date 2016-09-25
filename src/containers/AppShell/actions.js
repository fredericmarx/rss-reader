/*
  App Action Types.

  These are often held in a different file,
  but I feel like that's a scaling problem
  that we don't have right now, so it's a
  lot easier to keep the actionTypes next
  to the actions and the action creators.
*/

export const APP = {
  GET_USER_REQUEST: 'GET_USER_REQUEST',
  GET_USER_RECEIVE: 'GET_USER_RECEIVE'
};

/*
  App Actions.

  An action is a function that tells the app
  that we're doing something somewhere. Actions
  can optionally take some data in, and pass
  that through to the reducer, where we can
  decide how we want to change the state.
*/

const requestUser = ({ userId }) => (
  {
    type: APP.GET_USER_REQUEST,
    userId
  }
);

const receiveUser = ({ user }) => (
  {
    type: APP.GET_USER_RECEIVE,
    user
  }
);

/*
  App Action Creators.

  These are the things we export to other files,
  to use as we see fit. These can have
  "side-effects" which is a functional programming
  term which means the function can have different
  results and change external state (like make a
  network request, most often in our app), and
  they dispatch a set of actions based on the data
  that they receive.
*/

export const getUser = (userId) => (
  (dispatch) => {
    dispatch(requestUser({ userId }));

    const user = {
      name: 'Test Example',
      emailAddress: 'test@example.com',
      id: userId
    };

    setTimeout(() => (dispatch(receiveUser({ user }))), 2000);
  }
);
