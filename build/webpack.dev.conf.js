let webpack = require("webpack"),
  config = require("./webpack.base.conf"),
  commonPath = require("./path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  BrowserSyncPlugin = require("browser-sync-webpack-plugin"),
  SOURCE_MAP = true; // 大多数情况下用不到
  // SOURCE_MAP = false;

config.output.filename = "[name].js";
config.output.chunkFilename = "[id].js";

config.devtool = SOURCE_MAP ? "eval-source-map" : false;

// add hot-reload related code to entry chunk
config.entry.app = [
  "eventsource-polyfill",
  "webpack-hot-middleware/client?reload=true",
  "webpack/hot/only-dev-server",
  config.entry.app
];

config.output.publicPath = "/";

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.loaders.push({
  test: /\.css$/,
  loader: "style!css!postcss"
}, {
  test: /\.scss$/,
  loader: "style!css!postcss!sass?sourceMap"
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin({filename: "[name].css", allChunks: false}),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: commonPath.indexHTML,
    chunksSortMode: "none"
  }),
  new BrowserSyncPlugin({
    host: "127.0.0.1",
    port: 9091,
    proxy: "http://127.0.0.1:9000/",
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
);

module.exports = config;
