//Inspired by Material Design colour theory: https://m2.material.io/design/color/the-color-system.html

import { ColorValue } from 'react-native';

export interface ColourSchemeTemplate {
	//Lightmode
	//	Fill Colours
	primaryColourLight: ColorValue;
	primaryVariantLight: ColorValue;
	secondaryColourLight: ColorValue;
	secondaryVariantLight: ColorValue;
	backgroundColourLight: ColorValue;
	surfaceColourLight: ColorValue;
	errorColourLight: ColorValue;
	//	Text & Icon colours to display 'on' or over Fill colours
	onPrimaryColourLight: ColorValue;
	onPrimaryVariantLight: ColorValue;
	onSecondaryColourLight: ColorValue;
	onSecondaryVariantLight: ColorValue;
	onBackgroundColourLight: ColorValue;
	onSurfaceColourLight: ColorValue;
	onErrorColourLight: ColorValue;

	//Darkmode
	//	Fill Colours
	primaryColourDark: ColorValue;
	primaryVariantDark: ColorValue;
	secondaryColourDark: ColorValue;
	secondaryVariantDark: ColorValue;
	backgroundColourDark: ColorValue;
	surfaceColourDark: ColorValue;
	errorColourDark: ColorValue;
	//	Text & Icon colours to display 'on' or over Fill colours
	onPrimaryColourDark: ColorValue;
	onPrimaryVariantDark: ColorValue;
	onSecondaryColourDark: ColorValue;
	onSecondaryVariantDark: ColorValue;
	onBackgroundColourDark: ColorValue;
	onSurfaceColourDark: ColorValue;
	onErrorColourDark: ColorValue;

	lightDefault: boolean;
}
