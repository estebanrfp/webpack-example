module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    publicPath: '/dist/'
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
