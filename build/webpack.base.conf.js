let path = require("path"),
  webpack = require("webpack"),
  NyanProgressPlugin = require("nyan-progress-webpack-plugin"),
  commonPath = require("./path");

let rootPath = path.resolve(__dirname, ".."), // 项目根目录
  src = path.join(rootPath, "src"), // 开发源码目录
  env = process.env.NODE_ENV.trim(); // 当前环境

module.exports = {
  entry: {
    app: path.join(src, "app.js"),

    // ================================
    // 框架 / 类库 分离打包
    // ================================
    vendor: [
      "history",
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "rxjs",
      "redux-observable"
    ]
  },
  output: {
    path: path.join(commonPath.dist, "static"),
    publicPath: "/static/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.join(src, "assets"),
      COMPONENT: path.join(src, "components"),
      ACTION: path.join(src, "redux/actions"),
      REDUCER: path.join(src, "redux/reducers"),
      STORE: path.join(src, "redux/store"),
      ROUTE: path.join(src, "routes"),
      SERVICE: path.join(src, "services"),
      UTIL: path.join(src, "utils"),
      HOC: path.join(src, "utils/HoC"),
      MIXIN: path.join(src, "utils/mixins"),
      VIEW: path.join(src, "views")
    }
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: (function () {
        let _loaders = ["babel", "eslint"];

        // 开发环境下引入 React Hot Loader
        if (env === "development") {
          _loaders.unshift("react-hot");
        }
        return _loaders;
      })(),
      include: src,
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: "html"
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: "url",
      query: {
        limit: 10240, // 10KB 以下使用 base64
        name: "img/[name]-[hash:6].[ext]"
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: "url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]"
    }]
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    new webpack.DefinePlugin({
      "process.env": { // 这是给 React / Redux 打包用的
        NODE_ENV: JSON.stringify("production")
      },
      // ================================
      // 配置开发全局常量
      // ================================
      __DEV__: env === "development",
      __PROD__: env === "production",
      __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
      __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
    })
  ]
};
