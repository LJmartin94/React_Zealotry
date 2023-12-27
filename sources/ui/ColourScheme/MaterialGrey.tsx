import type { ColourSchemeTemplate } from './ColourSchemeTemplate';

//	Original palette:
// 	'#ecebea',
//	'#cfcecc',
//	'#afadaa',
//	'#8e8c87',
//	'#76736e',
//	'#5e5a54',
//	'#56524d',
//	'#4c4843',
//	'#423f3a',
//	'#312e29'
// 	Accent:
//	'#fac886',
//	'#f7b255',
//	'#ff9d1a',
//	'#ff9201',

export class MaterialGrey implements ColourSchemeTemplate {
	primaryColourLight = '#afadaa';
	primaryVariantLight = '#cfcecc';
	secondaryColourLight = '#ff9201';
	secondaryVariantLight = '#ff9d1a';
	backgroundColourLight = '#ecebea';
	surfaceColourLight = '#ecebea';
	errorColourLight = '#ff1201';
	onPrimaryColourLight = '#262626';
	onPrimaryVariantLight = '#262626';
	onSecondaryColourLight = '#fafafa';
	onSecondaryVariantLight = '#fafafa';
	onBackgroundColourLight = '#262626';
	onSurfaceColourLight = '#262626';
	onErrorColourLight = '#fafafa';
	lightDefault = true;

	//TODO: Make Dark theme
	primaryColourDark = '#423f3a';
	primaryVariantDark = '#56524d';
	secondaryColourDark = '#ff9201';
	secondaryVariantDark = '#ff9d1a';
	backgroundColourDark = '#76736e';
	surfaceColourDark = '#76736e';
	errorColourDark = '#ff1201';
	onPrimaryColourDark = '#fafafa';
	onPrimaryVariantDark = '#fafafa';
	onSecondaryColourDark = '#fafafa';
	onSecondaryVariantDark = '#fafafa';
	onBackgroundColourDark = '#fafafa';
	onSurfaceColourDark = '#fafafa';
	onErrorColourDark = '#fafafa';
}
