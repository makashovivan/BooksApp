const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  return {
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 4200,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    entry: './src/index.tsx',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'build'),
    },
    optimization: optimizations,
  };
};
