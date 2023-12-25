module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./'],
				alias: {
					'#features': './sources/features',
					'#ui': './sources/ui',
					'#assets': './assets',
				},
			},
		],
	],
};
