import { Fill } from '../Size/Fill';
import { Subtitle } from '../Text/Subtitle';
import { VariableOpacity } from '../Transparency/VariableOpacity';
import { ComponentStyleSheet } from '../utils/ComponentStyleSheet';
import { ViewTextImgStyle } from '../utils/VTI';

//ICON TYPE CURRENTLY UNKNOWN
export const MainButtonWithIcon = (
	themedView: ViewTextImgStyle,
	_icon: unknown
): ViewTextImgStyle => {
	return ComponentStyleSheet(
		[themedView.view, Fill.view, VariableOpacity(0.9).view],
		[themedView.text, Subtitle.text],
		[themedView.image]
	);
};
