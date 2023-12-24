module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '#Features': './sources/features',
		  '#UI': './sources/ui',
		  '#Assets': './assets',
        },
      },
    ],
  ],
};
