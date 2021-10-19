const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require('./package.json').dependencies

// alias: {
//   '@src': path.resolve(__dirname, '../src'),
// },
// // @ts-ignore
// entry: './src/index.ts',
module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.md'],
  },

  output: {
    publicPath: 'http://localhost:3001/',
    hashFunction: 'xxhash64',
  },

  devServer: {
    port: 3001,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'RocketScience',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './NewComponentTemplate': './src/components/NewComponentTemplate',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
}
