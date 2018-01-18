
var htmlWebpackPlugin = require('html-webpack-plugin');

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
			test: /\.(jpg|png|svg|gif|ttf)$/,
			loader: "url-loader?limit=20000"
		},{
			test: /\.js$/,
			loader: "babel-loader",
			exclude:/node_modules/,
            options:{ 
                presets:['es2015', "react", "env"], 
                plugins:['transform-runtime']
            }
		},{
			test: /\.vue$/,
			loader: "vue-loader"
		}]
	},
	devServer: {
	    contentBase: "./public",
	    historyApiFallback: true,
	    inline: true
	} ,
	plugins: [
		new htmlWebpackPlugin({
			template: __dirname + "/src/index.html"
		})

	]
}