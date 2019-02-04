// next.config.js
// const withTypescript = require("@zeit/next-typescript");

// module.exports = withTypescript({
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

//     return config;
//   }
// });
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

// const { PHASE_PRODUCTION_SERVER } = require("next-server/constants");
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : !process.env.NOW_REGION
    ? require("next/constants")
    : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* production only config */
    };
  }
  const withTypescript = require("@zeit/next-typescript");
  return withTypescript({
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
  });
};

// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: "empty"
//     };

//     return config;
//   }
// };
