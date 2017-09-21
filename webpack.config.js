var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
	    'webpack/hot/only-dev-server',
		 path.join( __dirname, '/src/main.js')
	],
	output: {
		path: path.join( __dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['','.js','.jsx']
	},
	plugins: [
		new ExtractTextWebpackPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			"process.env": { 
				NODE_ENV: JSON.stringify("development") 
			}
		}),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/, // .js .jsx
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				loader: ExtractTextWebpackPlugin.extract("style-loader", "css-loader")
			},
		    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"],
				include: path.join( __dirname, 'src'),
			}
		],
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	}
}