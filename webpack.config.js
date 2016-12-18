module.exports = {
    resolve: {
        extensions: ['', '.js']
    },
    context: __dirname,
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.js']
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    }
}