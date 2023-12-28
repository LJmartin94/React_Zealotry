import { StyleSheet } from 'react-native';

import { DEFAULT_FONT } from '../GlobalStyle';

export const Title = StyleSheet.create({
	text: {
		alignSelf: 'center',
		fontFamily: DEFAULT_FONT,
		fontSize: 42,
		lineHeight: 60, //works a bit like padding, and prevents the text being cut off vertically
		padding: 0,
		color: 'black',
	},
	view: {},
	image: {
		fontSize: 42,
	},
});
