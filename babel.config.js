module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.png'],
          alias: {
            '#components': './components',
            '#constants': './helpers/constants',
            '#contexts': './contexts',
            '#helpers': './helpers',
            '#hooks': './hooks',
            '#images': './assets/images',
            '#navigation': './navigation',
            '#screens': './screens',
            '#services': './services/index',
            '#store': './store/index',
            '#types': './types.ts',
          },
        },
      ],
    ],
  }
}
