const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'v1.0.4'),
    filename: 'bundle-v1.0.4.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components')
    }
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modues/
      },
      {
        test: /\.s?css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'main-v1.0.4.css'
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
}