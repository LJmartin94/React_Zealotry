import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from '../GlobalStyle';

export const PushLeft = StyleSheet.create({
	view: {
		alignSelf: 'flex-start',
	},
	text: {
		alignSelf: 'flex-start',
		paddingLeft: DEFAULT_PADDING,
	},
	image: {
		alignSelf: 'flex-start',
	},
});
