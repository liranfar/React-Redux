import path from 'path';

export default {
    entry: './client/index.js',
    output: {
        filename:'bundle.js'
    },

    module: {
        loaders : [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                include: path.join(__dirname,'client'),
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js','*']
    }
}