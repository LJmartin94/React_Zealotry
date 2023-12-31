import { StyleSheet } from 'react-native';

import { DEFAULT_FONT } from '../GlobalStyle';
import { ViewTextImgStyle } from '../utils/VTI';

export const Subtitle: ViewTextImgStyle = StyleSheet.create({
	view: {},
	text: {
		alignSelf: 'center',
		fontFamily: DEFAULT_FONT,
		fontSize: 21,
		lineHeight: 30, //works a bit like padding, and prevents the text being cut off vertically
		padding: 0,
		color: 'black',
		textShadowColor: '#00000000',
	},
	image: {},
});
