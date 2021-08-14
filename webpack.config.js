const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: "./src/bookmark/index.js",
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        publicPath: '/dist/js/',
        filename: 'bh-render.js',
        library: 'bh-render',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    // devtool: "source-map",
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: {
                compress: {
                    // 删除所有的 `console` 语句
                    drop_console: true,
                },
                output: {
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false,
                },
            }
        })
    ],
    // optimization: {
    //     minimizer: []
    // }
}
