const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            // { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader' ]
//
//             // use: ['style-loader', 'css-loader'],
//
// }
            // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            // loader: "css-loader",


            // options: {
            //     modules: {
            //         compileType: "module",
            //         mode: "local",
            //         auto: true,
            //         exportGlobals: true,
            //         localIdentName: "[path][name]__[local]--[hash:base64:5]",
            //         localIdentContext: path.resolve(__dirname, "src"),
            //         localIdentHashPrefix: "my-custom-hash",
            //         namedExport: true,
            //         exportLocalsConvention: "camelCaseOnly",
            //         exportOnlyLocals: false,
            //     },
            // }
            // },



            {
                test: /\.css$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    // "style-loader",
                    {
                        loader: "css-loader",
                        options: {importLoaders: 1},
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },


                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'dist/asset/fonts',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist', // instead of publicPath: '/build/'
        filename: '[name].js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname),
        port: 8080,
        writeToDisk: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/asset',
                    to: 'asset'
                }
            ],
        }),
    ],
    // plugins: [
    //     new ExtractTextPlugin("styles.css"),
    // ]

    // devServer: {
    //     contentBase: path.join(__dirname),
    //     publicPath: '/dist/',
    //     port: 5000,
    //     progress: true,
    //     disableHostCheck: true,
    //     historyApiFallback: true
    // }
};