import { StyleSheet } from 'react-native';

export function VariableOpacity(opacity: number) {
	return StyleSheet.create({
		view: { opacity: opacity },
		text: { opacity: opacity },
		image: { opacity: opacity },
	});
}
