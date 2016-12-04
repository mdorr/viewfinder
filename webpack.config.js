module.exports = {
  context: __dirname,
  entry: "./frontend/viewfinder.jsx",
  output: {
    path: "./app/assets/javascripts/",
    filename: "bundle.js"
  },
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
