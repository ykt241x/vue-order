//@vue/cli 4.3.1
const path = require('path');
module.exports = {
    //基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    //输出文件路径
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    lintOnSave: true,
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
    },
    //生产环境是否生成sourcemap文件
    productionSourceMap: false,
    css: {
        //是否使用css分离插件
        extract: true,
        //开启CSS css source maps
        sourceMap: false,
        //
        requireModuleExtension: true,
        loaderOptions: {
            sass: {
                //data: `@import "@/styles/main.scss;"`
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v7 中，这个选项名是 "data"
                data: `@import "~@/styles/main.scss";`
            }
        },
        //启用css modules
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        // open: true,//编译完成是否开发网页
        // host: '0.0.0.0',
        // port: 8080,
        // // proxy: {
        // //     '/api': 'http://localhost:3000'
        // // },
        // https: false,
        // hot: true,
        // hotOnly: false,
        // overlay: {
        //     warnings: true,
        //     errors: true
        // },
        // before: app=> {
        // }
    },
    pluginOptions: {
        foo: {
            // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
        }
    }
}