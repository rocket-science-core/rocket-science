const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("../package.json").dependencies;
const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "StorybookDashboard",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./NewComponentTemplate":
          "./src/components/templates/NewComponentTemplate",
        "./SomeExample": "./src/components/SomeExample",
      },
      //   shared: {
      //     ...deps,
      //     react: {
      //       singleton: true,
      //       requiredVersion: deps.react,
      //     },
      //     "react-dom": {
      //       singleton: true,
      //       requiredVersion: deps["react-dom"],
      //     },
      //   },
    })
  );

  // Return the altered config
  return config;
};
