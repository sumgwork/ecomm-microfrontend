const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    // to import scripts into html automatically
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
