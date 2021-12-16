const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { federatedServerPort } = require("./rs.config");
const deps = require("./package.json").dependencies;

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".json", ".md"],
  },

  output: {
    publicPath: `http://localhost:${federatedServerPort}/`,
  },

  devServer: {
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "RocketScience",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./NewComponentTemplate":
          "./src/components/templates/NewComponentTemplate",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
