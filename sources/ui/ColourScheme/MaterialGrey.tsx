import type { ColourSchemeTemplate } from './ColourSchemeTemplate';

// export class MaterialGrey implements ColourTemplate {
// 	primaryPalette: PrimaryPalette = { palette: [
// 		'#ecebea',
// 		'#cfcecc',
// 		'#afadaa',
// 		'#8e8c87',
// 		'#76736e',
// 		'#5e5a54',
// 		'#56524d',
// 		'#4c4843',
// 		'#423f3a',
// 		'#312e29',]};
// 	primaryColour = hue['#500'];
// 	primaryVariant = hue['#300'];

// 	secondaryPalette: SecondaryPalette = { palette: [
// 		'#fac886',
// 		'#f7b255',
// 		'#ff9d1a',
// 		'#ff9201',]};
// 	secondaryColour = hue.A700;
// 	secondaryVariant = hue.A400;

// 	backgroundColour = this.primaryPalette.palette[hue['#50']];
// 	surfaceColour = this.primaryPalette.palette[hue['#50']];
// 	errorColour = this.secondaryPalette.palette[hue.A100];
// 	onPrimary = 'white';
// 	onSecondary = 'white';
// 	onBackground = 'black';
// 	onSurface = 'black';
// 	onError = 'black';
// }

export class MaterialGrey implements ColourSchemeTemplate {
	primaryColourLight = '#5e5a54';
	primaryVariantLight = '#afadaa';
	secondaryColourLight = '#ff9201';
	secondaryVariantLight = '#ff9d1a';
	backgroundColourLight = '#ecebea';
	surfaceColourLight = '#ecebea';
	errorColourLight = '#ff1201';
	onPrimaryColourLight = '#fafafa';
	onPrimaryVariantLight = '#262626';
	onSecondaryColourLight = '#fafafa';
	onSecondaryVariantLight = '#fafafa';
	onBackgroundColourLight = '#262626';
	onSurfaceColourLight = '#262626';
	onErrorColourLight = '#fafafa';
	lightDefault = true;

	//TODO: Make Dark theme
	primaryColourDark = '#5e5a54';
	primaryVariantDark = '#afadaa';
	secondaryColourDark = '#ff9201';
	secondaryVariantDark = '#ff9d1a';
	backgroundColourDark = '#ecebea';
	surfaceColourDark = '#ecebea';
	errorColourDark = '#ff1201';
	onPrimaryColourDark = '#fafafa';
	onPrimaryVariantDark = '#fafafa';
	onSecondaryColourDark = '#fafafa';
	onSecondaryVariantDark = '#fafafa';
	onBackgroundColourDark = '#262626';
	onSurfaceColourDark = '#262626';
	onErrorColourDark = '#fafafa';
}
