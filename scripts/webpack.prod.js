const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const common = require("./webpack.common.js");
const { sassFalse } = require("sass");


module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            "...",
            // webpack打包时自动去除console.log
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [["autoprefixer"]],
                            },
                        },
                    },
                    "sass-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [["autoprefixer"]],
                      },
                    },
                  },
                  "less-loader",
                ],
                include: /node_modules/,
              }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/[hash:8].css",
        }),
    ],
});