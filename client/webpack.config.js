const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: ' index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // loader options seemed to do the trick here it obviously needed the css loader and style loader
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 10 * 1024,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              esModule: false,
              limit: 10 * 1024,
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
              noquotes: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
