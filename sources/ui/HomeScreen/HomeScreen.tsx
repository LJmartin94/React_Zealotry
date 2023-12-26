import React from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
} from 'react-native';

// import { DayMenu } from '#ui/DayMenu';
import {
	CreateThemedView,
	MaterialGrey,
	ThemeColourElement,
} from '#ui/ColourScheme';
import {
	Fill,
	FillGravity,
	PushLeft,
	StyleComposer,
	Title,
	DEFAULT_PADDING,
} from '#ui/Styles';

export type HomeScreenProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

//The main screen of the app
export const HomeScreen = ({ title, backgroundImage }: HomeScreenProps) => {
	const themeClass = new MaterialGrey();
	return (
		<>
			<ImageBackground style={Fill.imageStyle} source={backgroundImage}>
				<View style={
					StyleComposer([FillGravity.viewStyle, styles.title])}>
					<Text style={
						StyleComposer([Title.textStyle, PushLeft.textStyle])}>
						{title}
					</Text>
				</View>
				<View style={StyleComposer([Fill.viewStyle, styles.menu])}>
					<View
						style={StyleComposer([
							styles.widgetTitle,
							CreateThemedView(
								themeClass,
								ThemeColourElement.primaryColour,
								true
							).viewStyle,
						])}
					>
						<Text>{'lol'}</Text>
					</View>
					{/* <View style={[styles.widgetTitle, {backgroundColor: themeClass.primaryColourLight}]}>
						<Text style={StyleComposer([Title.textStyle, [styles.empty, {color: themeClass.onPrimaryColourLight}]])}>{'Header'}</Text>
					</View>
					<View style={[styles.widgetSubtitle, {backgroundColor: themeClass.primaryVariantLight}]} />
					<View style={[styles.widgetBody, {backgroundColor: themeClass.backgroundColourLight}]} /> */
					}
					{/* <DayMenu /> */}
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
	widgetTitle: {
		flex: 3,
		alignItems: 'stretch',
		justifyContent: 'center',
		// backgroundColor: themeClass.primaryColourLight,
	},
	// widgetSubtitle: {
	// 	flex: 1,
	// 	// backgroundColor: themeClass.primaryVariantLight,
	// 	alignItems: 'stretch',
	// 	justifyContent: 'center',
	// },
	// widgetBody: {
	// 	flex:17,
	// 	// backgroundColor: themeClass.backgroundColourLight,
	// 	alignItems: 'stretch',
	// 	justifyContent: 'center',
	// }
});
