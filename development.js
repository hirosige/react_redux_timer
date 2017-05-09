import path from 'path'

const src = path.resolve(__dirname, 'js');
const dist = path.resolve(__dirname, 'dist');

export default {
    entry: src + '/main.jsx',
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015","react"]
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js']
    },
};