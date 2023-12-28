import { StyleSheet } from 'react-native';

import { DEFAULT_FONT, H_ONE_FONT_SIZE } from '../GlobalStyle';

export const Title = StyleSheet.create({
	text: {
		alignSelf: 'center',
		fontFamily: DEFAULT_FONT,
		fontSize: H_ONE_FONT_SIZE,
		lineHeight: (H_ONE_FONT_SIZE / 2) * 3, //works a bit like padding, and prevents the text being cut off vertically
		padding: 0,
		color: 'black',
	},
	view: {},
	image: {
		fontSize: H_ONE_FONT_SIZE,
	},
});
