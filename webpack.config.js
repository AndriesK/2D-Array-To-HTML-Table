const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
          test: /\.[s?]css$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  }
};