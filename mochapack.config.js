/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          optimizeSSR: false
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: '$white: #fff; $black: #000; $metadata-app-color: #8723ff;'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'inline-cheap-source-map',
  target: 'node', // webpack should compile node compatible code
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname)
    }
  },
  plugins: [new VueLoaderPlugin()]
};
