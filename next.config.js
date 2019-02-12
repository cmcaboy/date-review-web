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
  // console.log("PHASE_PRODUCTION_SERVER: ", PHASE_PRODUCTION_SERVER);
  // console.log("phase: ", phase);
  console.log("process.env in next.config.js: ", process.env);
  console.log("localEnv in next.config.js", localEnv);
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {};
  }
  const withTypescript = require("@zeit/next-typescript");

  return withTypescript({
    webpack(config, options) {
      // Do not run type checking twice:
      // console.log("options: ", options);
      // console.log("config: ", config);
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
  });
};
