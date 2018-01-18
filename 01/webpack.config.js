
module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "build.js"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader!autoprefixer-loader"
		},{
			test: /\.less$/,
			loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
		},{
			test: /\.(jpg|png|svg|gif)$/,
			loader: "url-loader?limit=20000"
		}]
	}
}