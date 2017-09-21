import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client',
        './client/index.js'
    ],
    output: {
        filename:'bundle.js',
        publicPath: '/',
        path: '/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()

    ],

    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                include: path.join(__dirname,'client'),
                loaders: ['react-hot-loader','babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js','*']
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
}