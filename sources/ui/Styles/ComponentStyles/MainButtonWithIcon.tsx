import { Fill } from '../Size/Fill';
import { Subtitle } from '../Text/Subtitle';
import { SlightTransparency } from '../Transparency/SlightTransparency';
import { ComponentStyleSheet } from '../utils/ComponentStyleSheet';
import { ViewTextImgStyle } from '../utils/VTI';

//ICON TYPE CURRENTLY UNKNOWN
export const MainButtonWithIcon = (
	themedView: ViewTextImgStyle,
	_icon: unknown
): ViewTextImgStyle => {
	return ComponentStyleSheet(
		[themedView.view, Fill.view, SlightTransparency.view],
		[themedView.text, Subtitle.text],
		[themedView.image]
	);
};
