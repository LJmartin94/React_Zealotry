import { StyleSheet } from 'react-native';

import { Fill } from '../Size/Fill';
import { Subtitle } from '../Text/Subtitle';
import { VariableOpacity } from '../Transparency/VariableOpacity';
import { StyleComposer } from '../utils/StyleComposer';
import { ViewTextImgStyle } from '../utils/VTI';

//ICON TYPE CURRENTLY UNKNOWN
export const MainButtonWithIcon = (
	themedView: ViewTextImgStyle,
	_icon: unknown
): ViewTextImgStyle => {
	const viewStyle = StyleComposer([
		themedView.view,
		Fill.view,
		VariableOpacity(0.9).view,
	]);
	const textStyle = StyleComposer([themedView.text, Subtitle.text]);
	const imageStyle = StyleComposer([themedView.image]);

	const style = StyleSheet.create({
		view: StyleSheet.flatten(viewStyle),
		text: StyleSheet.flatten(textStyle),
		image: StyleSheet.flatten(imageStyle),
	});

	return style;
};
