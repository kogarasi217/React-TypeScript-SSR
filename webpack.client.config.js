const path = require('path');

module.exports = {
  entry: {
    counter: './src/views/components/Counter/index.tsx',
    sample: './src/views/components/Sample/index.tsx'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};
