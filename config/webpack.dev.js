const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const devConfig = {
  mode: "development",
};

module.exports = merge(commonConfig, devConfig);
