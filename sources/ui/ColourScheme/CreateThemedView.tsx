import { ColorValue, StyleSheet } from 'react-native';

import { ColourSchemeTemplate } from './ColourSchemeTemplate';

export const enum ThemeColourElement {
	primaryColour = 'primaryColour',
	primaryVariant = 'primaryVariant',
	secondaryColour = 'secondaryColour',
	secondaryVariant = 'secondaryVariant',
	backgroundColour = 'backgroundColour',
	surfaceColour = 'surfaceColour',
	errorColour = 'errorColour',
}

export function CreateThemedView(
	themeStyle: ColourSchemeTemplate,
	flavour: ThemeColourElement,
	isInLightmode: boolean | undefined
) {
	if (isInLightmode === undefined) isInLightmode = themeStyle.lightDefault;
	let onColour: ColorValue;
	let fillColour: ColorValue;

	switch (flavour) {
		case ThemeColourElement.primaryColour: {
			onColour = isInLightmode
				? themeStyle.onPrimaryColourLight
				: themeStyle.onPrimaryColourDark;
			fillColour = isInLightmode
				? themeStyle.primaryColourLight
				: themeStyle.primaryColourDark;
			break;
		}
		case ThemeColourElement.primaryVariant: {
			onColour = isInLightmode
				? themeStyle.onPrimaryVariantLight
				: themeStyle.onPrimaryVariantDark;
			fillColour = isInLightmode
				? themeStyle.primaryVariantLight
				: themeStyle.primaryVariantDark;
			break;
		}
		case ThemeColourElement.secondaryColour: {
			onColour = isInLightmode
				? themeStyle.onSecondaryColourLight
				: themeStyle.onSecondaryColourDark;
			fillColour = isInLightmode
				? themeStyle.secondaryColourLight
				: themeStyle.secondaryColourDark;
			break;
		}
		case ThemeColourElement.secondaryVariant: {
			onColour = isInLightmode
				? themeStyle.onSecondaryVariantLight
				: themeStyle.onSecondaryVariantDark;
			fillColour = isInLightmode
				? themeStyle.secondaryVariantLight
				: themeStyle.secondaryVariantDark;
			break;
		}
		case ThemeColourElement.backgroundColour: {
			onColour = isInLightmode
				? themeStyle.onBackgroundColourLight
				: themeStyle.onBackgroundColourDark;
			fillColour = isInLightmode
				? themeStyle.backgroundColourLight
				: themeStyle.backgroundColourDark;
			break;
		}
		case ThemeColourElement.surfaceColour: {
			onColour = isInLightmode
				? themeStyle.onSurfaceColourLight
				: themeStyle.onSurfaceColourDark;
			fillColour = isInLightmode
				? themeStyle.surfaceColourLight
				: themeStyle.surfaceColourDark;
			break;
		}
		case ThemeColourElement.errorColour: {
			onColour = isInLightmode
				? themeStyle.onErrorColourLight
				: themeStyle.onErrorColourDark;
			fillColour = isInLightmode
				? themeStyle.errorColourLight
				: themeStyle.errorColourDark;
			break;
		}
		default: {
			onColour = isInLightmode
				? themeStyle.onPrimaryColourLight
				: themeStyle.onPrimaryColourDark;
			fillColour = isInLightmode
				? themeStyle.primaryColourLight
				: themeStyle.primaryColourDark;
			break;
		}
	}
	return StyleSheet.create({
		viewStyle: {
			color: onColour,
			backgroundColor: fillColour,
		},
		imageStyle: {
			color: onColour,
			backgroundColor: fillColour,
		},
		textStyle: {
			color: onColour,
			backgroundColor: fillColour,
		},
	});
}
