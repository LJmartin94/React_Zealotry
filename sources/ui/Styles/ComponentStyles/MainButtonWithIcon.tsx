import { StyleSheet } from 'react-native';

import { ViewTextImgStyle } from '../utils/VTI';

//ICON TYPE CURRENTLY UNKNOWN
export const MainButtonWithIcon = (
	themedView: ViewTextImgStyle,
	icon: unknown
): ViewTextImgStyle => {
	const style = StyleSheet.create({
		view: { ...themedView.view },
		text: { ...themedView.text },
		image: { ...themedView.image },
	});

	return style;
};
