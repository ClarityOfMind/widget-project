const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


var clientConfig = (function webpackConfig(){

  var config = Object.assign({});

  config.mode = 'development';

  config.entry = './src/js/index.js';
  // config.entry = ['./src/js/index.js', './src/sass/style.scss']

  config.output = {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dist/dev')
  };

  config.module = {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
          }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
        			options: { 
                minimize: false,
                url: false,
                sourceMap: true
              }
          },
          {
            loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
          }
        ]
      }

    ]
  };

  config.devtool = 'source-map';

  config.resolve = {};

  config.plugins = [];

  // config.plugins.push(
  //   new HtmlWebpackPlugin({
  //     h1: '«Development mode»',
	//     template: 'src/template/index.html'
  //   })
  // );

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/img',
        to: 'assets/img/[name].[ext]',
      }
    ])
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/fonts',
        to: 'assets/fonts/[name].[ext]',
      }
    ])
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/js',
        to: 'assets/js/[name].[ext]',
      }
    ])
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      {
        from: 'assets/html',
        to: '[name].[ext]',
      }
    ])
  );

  return config;

});

module.exports = clientConfig;