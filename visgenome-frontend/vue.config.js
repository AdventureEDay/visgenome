const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  publicPath: "/", // 基本路径 根路径 应用需要部署在服务器根路径 如https://www.my-app.com/访问，而不能https://www.my-app.com/my-app/访问
  outputDir: "dist", // 输出文件目录
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)的（相对于outputDir的）目录
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  configureWebpack: config => {
    // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
      config.devtool = "cheap-module-eval-source-map";
      config.mode = "development";
    } else {
      // 生产环境配置
      config.mode = "production";
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src") //设置路径别名
          //...
        }
      }
    });
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置 配置高于chainWebpack中关于css loader的配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores 构建时开启多进程处理babel编译
  parallel: require("os").cpus().length > 1,

  // webpack-dev-server 相关配置 开发环境下的配置，部署之后应该就与这里无关了
  devServer: {
    open: process.platform === "darwin",
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/file": {
        target: "http://127.0.0.1:3000", //设置你调用的接口域名和端口号
        changeOrigin: true,
        pathRewrite: {
          "^/file": "/file"
        }
      }
    }, // 设置代理
    // eslint-disable-next-line no-unused-vars
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
