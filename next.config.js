// next.config.js

const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

const { PHASE_PRODUCTION_SERVER } = require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      target: "serverless",
      env: {
        GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
        CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
        CLOUDINARY_UPLOAD_URL: process.env.CLOUDINARY_UPLOAD_URL
      }
    };
  }
  const withTypescript = require("@zeit/next-typescript");

  return withTypescript({
    target: "serverless",
    env: {
      GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
      CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
      CLOUDINARY_UPLOAD_URL: process.env.CLOUDINARY_UPLOAD_URL
    },
    webpack(config, options) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      return config;
    }
  });
};
