import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from '../GlobalStyle';
import { ViewTextImgStyle } from '../utils/VTI';

export const PushRight: ViewTextImgStyle = StyleSheet.create({
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
