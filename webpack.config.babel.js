import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import packageJSON from "./package.json";

const development = process.env.NODE_ENV !== 'production'

const config = {
	entry: "./src/Index.bs.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name]-[hash].js"
	},
	mode: development ? 'development' : 'production',

	plugins: [
		new HtmlWebpackPlugin({
			title: packageJSON.name
				.split("-")
				.map((name) => name.charAt(0).toUpperCase() + name.slice(1))
				.join(" "),
			version: packageJSON.version,
			template: "src/index.ejs"
		})
	],

	devServer: development && {
		historyApiFallback: true,
		port: 1337,
		overlay: true,
	},

	stats: {
		assets: true,
		children: false,
		chunks: false,
		hash: false,
		modules: false,
		publicPath: true,
		timings: false,
		version: false,
		warnings: true
	}
};

export default config;
