const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const basePath = path.join(__dirname, 'app');
const distPath = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: './app/vendor.js',
    app: './app/index.jsx'
  },
  output: {
    path: distPath,
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new UglifyJSPlugin({
      exclude: /node_modules/,
      include: basePath
    }),
    new HtmlWebpackPlugin({
      title: 'Default Template',
      template: './app/index.ejs',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(`${basePath}`),
      path.resolve('node_modules/')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: basePath
      },
      {
        test: /\.global\.scss$/,
        exclude: /node_modules/,
        include: basePath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: [basePath]
            }
          }]
        })
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\.global\.scss$/],
        include: basePath,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'postcss-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: [basePath]
            }
          }]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: basePath,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: basePath,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
