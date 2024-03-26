const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].bundle.min.js" : "[name].bundle.js",
      publicPath: "/",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      port: 3000,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "styles.min.css",
        }),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          customGroup: {
            test: /[\\/]node_modules[\\/]/,
            name: "customGroup",
            chunks: "all",
            priority: 10,
          },
        },
      },
    },
  };
};
