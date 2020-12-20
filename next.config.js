/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
// const withPlugins = require('next-compose-plugins');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/antd-custom.less"), "utf8")
);

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess({
    lessLoaderOptions: {
      // less-loader 6.0
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      // less-loader 5.0
      // javascriptEnabled: true,
      // modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader",
        });
      }
      return config;
    },
  }),
});