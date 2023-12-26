import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DayMenu } from '#ui/DayMenu';
import { Fill } from '#ui/Styles';

//The main screen of the app
export const HomeScreen = () => {
	return (
		<>
			<View style={StyleSheet.compose(Fill.viewStyle, styles.title)}>
				<Text>{'Test'}</Text>
			</View>
			<View style={StyleSheet.compose(Fill.viewStyle, styles.menu)}>
				<DayMenu />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		flex: 1,
	},
	menu: {
		flex: 3,
	},
});
