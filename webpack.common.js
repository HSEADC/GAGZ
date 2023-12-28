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
      template: './src/articles/auto/belts.html',
      filename: './articles/auto/belts.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/bicycle/bicyclearticle.html',
      filename: './articles/bicycle/bicyclearticle.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/pedestrian/sidewalk.html',
      filename: './articles/pedestrian/sidewalk.html',
    }),
    //PDD
    new HtmlWebpackPlugin({
      template: './src/pdd/autopdd.html',
      filename: './pdd/autopdd.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pdd/pedestrianpdd.html',
      filename: './pdd/pedestrianpdd.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pdd/otherpdd.html',
      filename: './pdd/otherpdd.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pdd/autopdd/stop.html',
      filename: './pdd/autopdd/stop.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pdd/pedestrianpdd/rulesforped.html',
      filename: './pdd/pedestrianpdd/rulesforped.html',
    }),
    //Education
    new HtmlWebpackPlugin({
      template: './src/education/flipcards.html',
      filename: './education/flipcards.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/education/tests.html',
      filename: './education/tests.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/education/tickets.html',
      filename: './education/tickets.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/education/videolessons.html',
      filename: './education/videolessons.html',
    }),
     //Articles
     new HtmlWebpackPlugin({
      template: './src/articles/auto.html',
      filename: './articles/auto.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/pedestrian.html',
      filename: './articles/pedestrian.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/bicycle.html',
      filename: './articles/bicycle.html',
    }),
    
    
    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}