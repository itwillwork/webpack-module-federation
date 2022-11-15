const {
  dependencies
} = require("./package.json");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      new ModuleFederationPlugin({
        name: 'widget_a',
        filename: 'widget-a-build.js',
        exposes: {
          "./Widget": './src/Widget.jsx'
        },
        shared: {
          // ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
    ],
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }, {
        test: /\.module.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader", {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      port: 3000,
    }
  };
}