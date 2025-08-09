const path = require('path');
const { use } = require("react");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    home: './source/client/home_page/src/.index.tsx',
    about: './source/client/about_page/src/.index.tsx',
    catalog: './source/client/catalog_page/src/.index.tsx',
    reviews: './source/client/reviews_page/src/.index.tsx',
    register: './source/client/register_page/src/.index.tsx',
    auth: './source/client/auth_page/src/.index.tsx',
    account: './source/client/account_page/src/.index.tsx',
    admin: './source/client/admin_page/src/.index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '..', '..', 'public', 'public'),
    filename: '[name].js', // home.js, about.js
  },
  module: {
    rules: [   //загрузчик для tsx
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,             // Правило для css
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: (pathData) => {
            // Путь к файлу, например: /project/src/assets/fonts/myfont.woff2
            const filepath = pathData.filename;
            //const path = require('path')

            // Относительный путь от папки src/assets, чтобы убрать src/
            const relativePath = path.relative(
              path.resolve(__dirname, 'assets'),
              //pathData.filename
              filepath
            );

            // Вернем assets + относительный путь внутри assets
            return `assets/${relativePath}`;
          },
        }
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/img'),
          to: 'assets/img', // скопирует в public/assets/img
        },
        {
          from: path.resolve(__dirname, 'assets/fonts'),
          to: 'assets/fonts', // скопирует в public/assets/fonts
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'source'),
    }
  }
};