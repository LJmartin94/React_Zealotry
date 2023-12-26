import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type StyleType = (ViewStyle | TextStyle | ImageStyle);

export function StyleComposer<T extends StyleType> (stylesArray: StyleProp<T>[]) : StyleProp<T> {
	let compositeStyle = stylesArray[0];
	while (stylesArray.length > 1)
	{
		stylesArray.shift();
		compositeStyle = StyleSheet.compose(compositeStyle, stylesArray[0]);
	}
	return compositeStyle;
}