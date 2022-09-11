const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const path = require("path");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const CopyWebpackPlugin = require("copy-webpack-plugin");

const devConfig = {
  mode: "development",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // Images:
        {
          from: `${PATHS.src}/${PATHS.assets}img`,
          to: `${PATHS.assets}img`,
        },
        // Fonts:
        {
          from: `${PATHS.src}/${PATHS.assets}fonts`,
          to: `${PATHS.assets}fonts`,
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
