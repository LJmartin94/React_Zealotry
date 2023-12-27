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
	BACKGROUND_COLOUR,
	CreateThemedView,
	MaterialGrey,
	PRIMARY_COLOUR,
	PRIMARY_VARIANT,
} from '#ui/ColourScheme';
import { DayMenu } from '#ui/DayMenu';
import {
	Body,
	ComponentStyleSheet,
	DEFAULT_PADDING,
	Fill,
	FillGravity,
	PushLeft,
	SlightOpacity,
	Subtitle,
	Title,
} from '#ui/Styles';

export type HomeScreenProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

//The main screen of the app
export const HomeScreen = ({
	title,
	backgroundImage,
}: HomeScreenProps) => {
	const theme = new MaterialGrey();

	const primaryColour = CreateThemedView(theme, PRIMARY_COLOUR, true);
	const primaryVariant = CreateThemedView(theme, PRIMARY_VARIANT, true);
	const background = CreateThemedView(theme, BACKGROUND_COLOUR, true);
	return (
		<>
			<ImageBackground style={Fill.image} source={backgroundImage}>
				<View style={floatingTitleStyle.view}>
					<Text style={floatingTitleStyle.text}>{title}</Text>
				</View>

				<View style={widgetContainerStyle.view}>
					<View style={[widgetTitleStyle.view, primaryColour.view]}>
						<Text style={[widgetTitleStyle.text, primaryColour.text]}>
							{'Header'}
						</Text>
					</View>
					<View style={[widgetSubtitleStyle.view, primaryVariant.view]}>
						<Text style={[widgetSubtitleStyle.text, primaryVariant.text]}>
							{'Subtitle'}
						</Text>
					</View>
					<View style={[widgetBodyStyle.view, background.view]}>
						<Text style={[widgetBodyStyle.text, background.text]}>
							{'Lorem ipsum etc etc'}
						</Text>
						<DayMenu />
					</View>
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
	widgetTitle: {
		flex: 4,
	},
	widgetSubtitle: {
		flex: 2,
	},
	widgetBody: {
		flex: 17,
	},
});

const floatingTitleStyle = ComponentStyleSheet(
	[FillGravity.view, weights.title],
	[Title.text, PushLeft.text],
	[]
);
const widgetContainerStyle = ComponentStyleSheet([
	Fill.view,
	SlightOpacity.view,
	weights.menu,
]);
const widgetTitleStyle = ComponentStyleSheet(
	[Fill.view, weights.widgetTitle],
	[Title.text]
);
const widgetSubtitleStyle = ComponentStyleSheet(
	[Fill.view, weights.widgetSubtitle],
	[Subtitle.text]
);
const widgetBodyStyle = ComponentStyleSheet(
	[Fill.view, weights.widgetBody, Body.view],
	[Body.text]
);
