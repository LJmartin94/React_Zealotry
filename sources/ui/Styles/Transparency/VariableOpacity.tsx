import { StyleSheet } from 'react-native';

import { ViewTextImgStyle } from '../utils/VTI';

export const VariableOpacity = (opacity: number): ViewTextImgStyle => {
	return StyleSheet.create({
		view: { opacity: opacity },
		text: { opacity: opacity },
		image: { opacity: opacity },
	});
};
