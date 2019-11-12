const merge = require('webpack-merge')

module.exports = {
  plugins: ['scss'],
  modify: (config, { target, dev }, webpack) => {
    // do something to config

    return merge(config, {
      module: {
        rules: [
          {
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            options: {
              extract: false,
              runtimeCompat: true,
              esModule: false
            }
          }
        ]
      }
    });
  }
};