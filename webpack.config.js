const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './js/app.js'
  },
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, './dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 순서 중요!
          //'style-loader',
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : 'volassom',
      hash : true,
      filename : 'index.html',
      chunks: ['main'],
      template: './index.html'
  }),
    new CopyPlugin({
      patterns: [
        { from: 'static' },
        // { from: 'src' }
      ]
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}