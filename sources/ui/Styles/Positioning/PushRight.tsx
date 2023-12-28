import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from '../GlobalStyle';

export const PushRight = StyleSheet.create({
	view: {
		alignSelf: 'flex-end',
	},
	text: {
		alignSelf: 'flex-end',
		paddingRight: DEFAULT_PADDING,
	},
	image: {
		alignSelf: 'flex-end',
	},
});
