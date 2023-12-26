import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { DayMenu } from '#ui/DayMenu';
import { Fill, FillGravity, PushLeft, StyleComposer, Title , DEFAULT_PADDING } from '#ui/Styles';

export type HomeScreenProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

//The main screen of the app
export const HomeScreen = ({title, backgroundImage}: HomeScreenProps) => {
	return (
		<>
			<ImageBackground style={Fill.imageStyle} source={backgroundImage}>
				<View style={StyleComposer([FillGravity.viewStyle, styles.title])}>
					<Text style={StyleComposer([Title.textStyle, PushLeft.textStyle])}>{title}</Text>
				</View>
				<View style={StyleComposer([Fill.viewStyle, styles.menu])}>
					<DayMenu />
				</View>
			</ImageBackground>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		flex: 1,
	},
	menu: {
		flex: 3,
		padding: DEFAULT_PADDING,
	},
});
