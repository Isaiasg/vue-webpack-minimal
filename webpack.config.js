const path = require('path');
var vue = require('vue');

module.exports = {
  context: path.resolve(__dirname, "src"),
  module:{
    loaders: [
      { 
        test: /\.html$/,
        loader: 'file-loader',
        options:
        {
          name: '[name].[ext]'
        }
      }
    ]},
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
};