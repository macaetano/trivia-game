module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            "@components": './src/components',
            "@utils": './src/utils',
            "@screens": './src/screens',
            "@store": './src/store',
            "@navigation": './src/navigation'
          },
        },
      ],
    ],
  };
};
