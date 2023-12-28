import React from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import { HomeScreenMenuPart } from './HomeScreenMenuPart';

import {
	ComponentStyleSheet,
	DEFAULT_PADDING,
	Fill,
	Gravity,
	PushLeft,
	SlightTransparency,
	Title,
} from '#ui/Styles';

export type HomeScreenProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

//The main screen of the app
export const HomeScreen = ({ title, backgroundImage }: HomeScreenProps) => {
	return (
		<>
			<ImageBackground style={Fill.image} source={backgroundImage}>
				<View style={floatingTitleStyle.view}>
					<Text style={floatingTitleStyle.text}>{title}</Text>
				</View>
				<View style={widgetContainerStyle.view}>
					<HomeScreenMenuPart />
				</View>
			</ImageBackground>
		</>
	);
};

const weights = StyleSheet.create({
	title: {
		flex: 1,
	},
	menu: {
		flex: 3,
		padding: DEFAULT_PADDING,
	},
});

const floatingTitleStyle = ComponentStyleSheet(
	[Fill.view, Gravity.view, weights.title],
	[Title.text, PushLeft.text],
	[]
);
const widgetContainerStyle = ComponentStyleSheet([
	Fill.view,
	SlightTransparency.view,
	weights.menu,
]);
