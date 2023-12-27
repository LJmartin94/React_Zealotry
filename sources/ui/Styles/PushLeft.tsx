import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from './AppStyle';

export const PushLeft = StyleSheet.create({
	text: {
		alignSelf: 'flex-start',
		paddingLeft: DEFAULT_PADDING,
	},
	image: {
		alignSelf: 'flex-start',
	},
	view: {
		alignSelf: 'flex-start',
	},
});
