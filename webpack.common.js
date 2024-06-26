const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    // Chunk
    // 
    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // Section
    new HtmlWebpackPlugin({
      template: './src/pdd.html',
      filename: './pdd.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/structure.html',
      filename: './structure.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/education.html',
      filename: './education.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: './about.html',
    }),
    // Article
    new HtmlWebpackPlugin({
      template: './src/articles/article3.html',
      filename: './article3.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/article7.html',
      filename: './article7.html',
    }),
    // PDD
    new HtmlWebpackPlugin({
      template: './src/rules/rules7.html',
      filename: './rules7.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/rules/rules5.html',
      filename: './rules5.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/rules/rules10.html',
      filename: './rules10.html',
    }),
    // Tests
    new HtmlWebpackPlugin({
      template: './src/tests/test1.html',
      filename: './test1.html',
    }),
    
    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/menubar.html'),
        location: 'menubar',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footer',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}