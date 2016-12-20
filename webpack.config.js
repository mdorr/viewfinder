const webpack = require('webpack');
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  context: __dirname,
  entry: "./frontend/viewfinder.jsx",
  output: {
    path: "./app/assets/javascripts/",
    filename: "bundle.js"
  },

  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {except: ['$', 'exports', 'require', 'app']},
      compress: {warnings: false},
      sourceMap: false
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
