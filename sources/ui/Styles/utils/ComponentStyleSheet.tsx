import {
	ImageStyle,
	StyleProp,
	StyleSheet,
	TextStyle,
	ViewStyle,
} from 'react-native';

import { StyleComposer } from './StyleComposer';

export function ComponentStyleSheet(
	view: StyleProp<ViewStyle>[] = [],
	text: StyleProp<TextStyle>[] = [],
	image: StyleProp<ImageStyle>[] = []
) {
	return StyleSheet.create({
		view: StyleSheet.flatten(StyleComposer(view)),
		text: StyleSheet.flatten(StyleComposer(text)),
		image: StyleSheet.flatten(StyleComposer(image)),
	});
}
