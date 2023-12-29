import { StyleSheet } from 'react-native';

import { DEFAULT_PADDING } from '../GlobalStyle';
import { ViewTextImgStyle } from '../utils/VTI';

export const PushLeft: ViewTextImgStyle = StyleSheet.create({
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
