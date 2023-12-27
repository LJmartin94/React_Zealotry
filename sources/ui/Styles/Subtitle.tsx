import { StyleSheet } from 'react-native';

import { DEFAULT_FONT } from './AppStyle';

export const Subtitle = StyleSheet.create({
	text: {
		alignSelf: 'center',
		fontFamily: DEFAULT_FONT,
		fontSize: 21,
		lineHeight: 30, //works a bit like padding, and prevents the text being cut off vertically
		padding: 0,
		color: 'black',
	},
});
