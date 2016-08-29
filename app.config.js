/*
  This file is where we set global app config
  settings and so on. Most of the time we
  shouldn't need to edit it.
*/

module.exports = {
  /*
    The bundlePath is used by webpack to decide
    what to call our outputted JavaScript file.
  */
  bundlePath:
    process.env.NODE_ENV === 'production' ?
      '[hash].js' : '/[name]-[hash].js',
  /*
    We don't use the apiEndpoint anywhere yet,
    but this will allow us to run a local instance
    of the backend in development, and a remote
    instance in production, without changing any
    other code.
  */
  apiEndpoint:
    process.env.NODE_ENV === 'production' ?
      'http://localhost:3000' : 'http://localhost:3000'
};
