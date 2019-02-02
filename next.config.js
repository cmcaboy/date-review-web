// next.config.js
const withTypescript = require("@zeit/next-typescript");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withTypescript({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
});

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty"
//     };

//     return config;
//   }
// };
