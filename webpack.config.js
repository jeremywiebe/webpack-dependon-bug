const path = require("path");

module.exports = {
  stats: "normal",
  devtool: "source-map",
  entry: {
    shared: "./src/shared.js",
    index1: { import: "./src/index.1.js", dependOn: "shared" },
    // index2: { import: "./src/index.2.js", dependOn: "shared" },
  },
  output: {
    path: path.join(__dirname, "build"),
    clean: true, // Clean the output directory before emit.
  },
  module: {
    rules: [{ test: /\.jsx?$/, use: "babel-loader" }],
  },
};
