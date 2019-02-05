// next.config.js
// const withTypescript = require("@zeit/next-typescript");
// const webpack = require("webpack");
// const { parsed: localEnv } = require("dotenv").config();

// module.exports = withTypescript({
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
//     return config;
//   }
// });

const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

const { PHASE_PRODUCTION_SERVER } = require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  console.log("PHASE_PRODUCTION_SERVER: ", PHASE_PRODUCTION_SERVER);
  console.log("phase: ", phase);
  if (phase === PHASE_PRODUCTION_SERVER) {
    return { target: "serverless" };
  }
  const withTypescript = require("@zeit/next-typescript");
  return withTypescript({
    target: "serverless",
    webpack(config, options) {
      // Do not run type checking twice:
      if (options.isServer)
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
  });
};
