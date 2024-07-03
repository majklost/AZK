const path = require("path");

module.exports = {
  entry: "./original/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "src", "dist"),
  },
  module: {
    rules: [],
  },
};
