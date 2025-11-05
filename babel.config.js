// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Se você usa react-native-reanimated (muito comum c/ navegação),
      // este plugin deve ser o ÚLTIMO da lista.
      'react-native-reanimated/plugin',
    ],
  };
};
