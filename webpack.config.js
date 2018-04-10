const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const isProd = process.env.NODE_ENV === 'production';
const config  = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'src/index.ejs',
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};

if (isProd) {
  config.plugins.push(new BundleAnalyzerPlugin({
    generateStatsFile: true,
  }));
}

module.exports = config;
