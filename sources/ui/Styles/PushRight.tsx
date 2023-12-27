import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from './AppStyle';

export const PushRight = StyleSheet.create({
	text: {
		alignSelf: 'flex-end',
		paddingRight: DEFAULT_PADDING,
	},
	image: {
		alignSelf: 'flex-end',
	},
	view: {
		alignSelf: 'flex-end',
	},
});
