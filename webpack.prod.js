const path = require("path");
const webpack = require("webpack");
const { timeStamp } = require("console");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        enforce: "pre",
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: "/.(png|jpe?g|gif)$/i",
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: "/.json5$/i",
        loader: "json5-loader",
        type: "javascript/auto",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
