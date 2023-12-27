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

export const PRIMARY_COLOUR = ThemeColourElement.primaryColour;
export const PRIMARY_VARIANT = ThemeColourElement.primaryVariant;
export const SECONDARY_COLOUR = ThemeColourElement.secondaryColour;
export const SECONDARY_VARIANT = ThemeColourElement.secondaryVariant;
export const BACKGROUND_COLOUR = ThemeColourElement.backgroundColour;
export const SURFACE_COLOUR = ThemeColourElement.surfaceColour;
export const ERROR_COLOUR = ThemeColourElement.errorColour;

export function CreateThemedView(
	themeStyle: ColourSchemeTemplate,
	flavour: ThemeColourElement,
	isInLightmode: boolean | undefined
) {
	if (isInLightmode === undefined) isInLightmode = themeStyle.lightDefault;
	let onColour: ColorValue;
	let fillColour: ColorValue;

	switch (flavour) {
		case PRIMARY_COLOUR: {
			onColour = isInLightmode
				? themeStyle.onPrimaryColourLight
				: themeStyle.onPrimaryColourDark;
			fillColour = isInLightmode
				? themeStyle.primaryColourLight
				: themeStyle.primaryColourDark;
			break;
		}
		case PRIMARY_VARIANT: {
			onColour = isInLightmode
				? themeStyle.onPrimaryVariantLight
				: themeStyle.onPrimaryVariantDark;
			fillColour = isInLightmode
				? themeStyle.primaryVariantLight
				: themeStyle.primaryVariantDark;
			break;
		}
		case SECONDARY_COLOUR: {
			onColour = isInLightmode
				? themeStyle.onSecondaryColourLight
				: themeStyle.onSecondaryColourDark;
			fillColour = isInLightmode
				? themeStyle.secondaryColourLight
				: themeStyle.secondaryColourDark;
			break;
		}
		case SECONDARY_VARIANT: {
			onColour = isInLightmode
				? themeStyle.onSecondaryVariantLight
				: themeStyle.onSecondaryVariantDark;
			fillColour = isInLightmode
				? themeStyle.secondaryVariantLight
				: themeStyle.secondaryVariantDark;
			break;
		}
		case BACKGROUND_COLOUR: {
			onColour = isInLightmode
				? themeStyle.onBackgroundColourLight
				: themeStyle.onBackgroundColourDark;
			fillColour = isInLightmode
				? themeStyle.backgroundColourLight
				: themeStyle.backgroundColourDark;
			break;
		}
		case SURFACE_COLOUR: {
			onColour = isInLightmode
				? themeStyle.onSurfaceColourLight
				: themeStyle.onSurfaceColourDark;
			fillColour = isInLightmode
				? themeStyle.surfaceColourLight
				: themeStyle.surfaceColourDark;
			break;
		}
		case ERROR_COLOUR: {
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
		view: {
			color: onColour,
			backgroundColor: fillColour,
			borderColor: fillColour,
		},
		image: {
			color: onColour,
			backgroundColor: fillColour,
			borderColor: fillColour,
		},
		text: {
			color: onColour,
		},
	});
}
