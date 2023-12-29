import {
	ImageStyle,
	StyleProp,
	StyleSheet,
	TextStyle,
	ViewStyle,
} from 'react-native';

import { StyleComposer } from './StyleComposer';
import { ViewTextImgStyle } from './VTI';

export const ComponentStyleSheet = (
	view: StyleProp<ViewStyle>[] = [],
	text: StyleProp<TextStyle>[] = [],
	image: StyleProp<ImageStyle>[] = []
): ViewTextImgStyle => {
	return StyleSheet.create({
		view: StyleSheet.flatten(StyleComposer(view)),
		text: StyleSheet.flatten(StyleComposer(text)),
		image: StyleSheet.flatten(StyleComposer(image)),
	});
};
