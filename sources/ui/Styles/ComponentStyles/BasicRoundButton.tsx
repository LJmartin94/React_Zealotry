import { StyleSheet } from 'react-native';

import { ViewTextImgStyle } from '../utils/VTI';

export const BasicRoundButton: ViewTextImgStyle = StyleSheet.create({
	view: {
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	text: {
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	image: {
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 50,
	},
});
