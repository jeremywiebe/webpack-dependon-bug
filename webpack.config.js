const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: {
    // WORKS!
    index: "./src/index.js",

    // BROKEN!
    // shared: "./src/shared.js",
    // index: { import: "./src/index.js", dependOn: "shared" },
  },
  output: {
    path: path.join(__dirname, "build"),
    clean: true, // Clean the output directory before emit.
  },
};
