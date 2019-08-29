const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dayjs-twitter.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'dayjsTwitter'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config