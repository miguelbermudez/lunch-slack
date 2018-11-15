const path = require("path");
const root = path.resolve();

module.exports = {
  target: "node",
  entry: path.resolve(__dirname, "./src/entry.js"),
  output: {
    filename: "nom.js",
    path: path.resolve(__dirname, "./dist"),
  },
};
