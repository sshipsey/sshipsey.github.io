const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/index.html'),
          to: path.resolve(__dirname, 'docs/index.html'),
        },
        {
          from: path.resolve(__dirname, 'src/groceries.html'),
          to: path.resolve(__dirname, 'docs/groceries.html'),
        },
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'docs/img'),
        },
      ],
    }),
  ],
};
