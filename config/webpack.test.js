/**
 * webpack.test
 */

var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                use: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: 'raw'
            },
            /*
             * SCSS compile
             *
             * */
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                use: 'raw!postcss!sass'
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'sass'),
                use: 'null'
            }
        ]
    }
}
