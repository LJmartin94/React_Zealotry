import { StyleSheet } from 'react-native';

import { DEFAULT_FONT, DEFAULT_PADDING } from '../GlobalStyle';
import { ViewTextImgStyle } from '../utils/VTI';

export const Body: ViewTextImgStyle = StyleSheet.create({
	view: {
		padding: DEFAULT_PADDING,
	},
	text: {
		alignSelf: 'flex-start',
		fontFamily: DEFAULT_FONT,
		fontSize: 18,
		lineHeight: 28, //works a bit like padding, and prevents the text being cut off vertically
		padding: DEFAULT_PADDING,
		color: 'black',
	},
	image: {},
});
