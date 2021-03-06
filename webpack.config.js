const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		bundle: ["./client/main.js"],
	},
	resolve: {
		alias: {
			svelte: path.resolve("node_modules", "svelte"),
		},
		extensions: [".mjs", ".js", ".svelte"],
		mainFields: ["svelte", "browser", "module", "main"],
	},
	output: {
		path: __dirname + "/public",
		filename: "[name].js",
		chunkFilename: "[name].[id].js",
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: "svelte-loader",
					options: {
						emitCss: true,
						hotReload: true,
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
				],
			},
		],
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CopyWebpackPlugin([
			{
				context: "client/",
				from: "assets",
				to: "tutorial",
    		toType: "dir"
			},
		]),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: "assets/*",
		// 			to: "public/",
		// 			context: "app/",
		// 			toType: "dir",
		// 		},
		// 		{
		// 			from: "assets/*",
		// 			to: "public/",
		// 			context: "app/",
		// 			toType: "dir",
		// 		},
		// 	],
		// }),
	],
	devtool: prod ? false : "source-map",
};
