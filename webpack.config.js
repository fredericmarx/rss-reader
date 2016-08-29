/*
  This file is where we configure webpack, the all
  powerful module bundler.
*/

/*
  We would like to be able to figure out where we are
  within the filesystem.
*/
const path = require('path');

/*
  We'd like to extend webpack with a new plugin
*/
const webpack = require('webpack');

/*
  This plugin allows us to do some environment switching
  magic inside our HTML.
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
  Let's require the app.config.js file. An enhancement
  would be to separate appConfig into dev and production,
  removing the logic from the app.config file.
*/
const appConfig = require('./app.config');

/*
  We will need to change behaviour a few times based on
  this switch, let's declare it up here once instead of
  multiple times.
*/
const isProd = process.env.NODE_ENV === 'production';

/*
  When we run webpack, it looks for a config file which
  export things, so let's give it stuff to do.
*/
module.exports = {

  /*
    This defines our app's "entry" point, that is, the
    main bit of code that should pull everything else
    in, in this case it's our src/index.js file
  */
  entry: path.resolve(__dirname, 'src/index.js'),

  /*
    This defined our apps "output" point, which is
    relevant when we run our main "build" task, and
    can basically be seen as:

      path: location webpack puts the file
      filename: name webpack gives the file
      libraryTarget: 'umd' if you want modern browser
                     compatiblity
  */
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: appConfig.bundlePath,
    libraryTarget: 'umd'
  },

  /*
    In development mode, add source maps.
  */
  devtool: isProd ? null : 'source-map',

  /*
    This is the primary bit of magic in webpack.

    The loaders array allows us to define tests and
    loaders for files that pass those (usually regular
    expression based) tests.
  */
  module: {
    loaders: [
      {
        /*
          Here we say, anything that doesn't come out of
          the node_modules folder, put it through the
          babel-loader (our transpiler) first. This allows
          us to make sure that we can write ES2015(+)
          compatible code, and still transpile down to
          ES5.
        */
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      {
        /*
          Here we say, anything that looks like it might be
          an image of some kind, load it using the
          url-loader, which allows us to import images into
          our JavaScript.
        */
        test: /\.(svg|png|jpg|gif)$/,
        loader: 'url'
      }
    ]
  },
  
  plugins: [
    /*
      Here is where we set up our injection into the index.html file,
      and where our template strings will be replaced with the
      appropriate contents of appConfig.
    */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      window: {
        env: appConfig
      }
    }),
    /*
      Here is where we set up another injection, this time it's setting
      the global variable NODE_ENV with 'production' or 'development' which
      allows us to change how our app is configured at build time.
    */
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProd ? JSON.stringify('production') : JSON.stringify('development')
      }
    })
  ]
};
