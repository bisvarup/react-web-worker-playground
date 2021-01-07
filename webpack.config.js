const path = require("path");

module.exports = {
  entry: path.join(__dirname, "index.js"),
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 9000,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        use: [
          {
            loader: "worker-loader",
          },
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
