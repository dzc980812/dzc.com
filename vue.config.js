const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制

module.exports = {
    //基本路径
    publicPath: '/', //vue-cli3.3+新版本使用
    //输出文件目录 
    // outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: 'static',
    //以多页模式构建应用程序。
    pages: undefined,
    //是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,
    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
    parallel: require('os').cpus().length > 1,
    //生产环境是否生成 sourceMap 文件，一般情况不建议打开
    productionSourceMap: false,
    // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
    devServer: {
        host: 'localhost',
        port: 8080, // 端口号
        open: true, //配置自动启动浏览器
        hotOnly: true, // 热更新
        proxy: { //配置自动启动浏览器
            "/api": {
                target: "http://127.0.0.1:3000/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/api": "/api"
                }
            },

        }
    },

    // 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
    pluginOptions: {
        'style-resources-loader': { //https://github.com/yenshih/style-resources-loader
            preProcessor: 'scss', //声明类型
            'patterns': [
                //path.resolve(__dirname, './src/assets/scss/_common.scss'), 
            ],
            //injector: 'append'
        }
    }
};