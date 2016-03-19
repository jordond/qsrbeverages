var path = require('path');
var webpack = require('webpack');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

var projectRoot = path.resolve(__dirname);
var assetPath = path.resolve('./public');
var htmlIndex = path.resolve('./src/client/index.html');
var entryJS = path.resolve('./src/client/index.js');

var isProduction = process.env.NODE_ENV === 'production';

var productionPlugins = [
    new CleanPlugin([path.join(assetPath, 'dist'), path.join(assetPath, 'index.html')], { root: projectRoot, verbose: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
];

var developmentPlugins = [
    new BrowserSyncPlugin({
      proxy: 'http://localhost:' + process.env.PORT,
      open: false
    })
];

var commonPlugins = [
    new HtmlWebpackPlugin({
      template: htmlIndex,
      inject: 'body'
    }),

    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'dist/vendor-[hash:6].js',
      minChunks: Infinity
    }),
]

module.exports = {
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  context: __dirname,
  entry: {
    vendor: ['angular', 'angular-ui-router'],
    app: entryJS
  },
  output: {
    path: assetPath,
    filename: 'dist/[name]-[hash:6].js',
    chunkFilename: 'dist/[name]-[chunkhash:6].js'
  },
  module: {
    loaders: [{
      test: /\.tpl.html$/,
      loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src/client')) + '/!html-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "ng-annotate!babel"
    }, {
      test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/],
      loader: 'file?name=dist/fonts/[name].[ext]'
    }, {
      test: /\.png$/,
      loader: 'url-loader?name=dist/images/[hash:6]-[name].png&limit=100000&mimetype=image/png'
    }, {
      test: /\.jpg$/,
      loader: 'file-loader?name=dist/images/[name].[ext]'
    }]
  },
  progress: true,
  plugins: isProduction ? commonPlugins.concat(productionPlugins) : commonPlugins.concat(developmentPlugins),
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.json', '.css', '.scss']
  }
};