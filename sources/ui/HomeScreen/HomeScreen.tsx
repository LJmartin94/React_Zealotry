import React from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import {
	BACKGROUND_COLOUR,
	CreateThemedView,
	ERROR_COLOUR,
	MaterialGrey,
	PRIMARY_COLOUR,
	PRIMARY_VARIANT,
	SECONDARY_COLOUR,
} from '#ui/ColourScheme';
import { DayMenu } from '#ui/DayMenu';
import {
	Body,
	ComponentStyleSheet,
	DEFAULT_PADDING,
	Fill,
	FillFloat,
	FillGravity,
	PushLeft,
	PushRight,
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
	const secondaryColour = CreateThemedView(theme, SECONDARY_COLOUR, true);
	const errorColour = CreateThemedView(theme, ERROR_COLOUR, true);
	return (
		<>
			<ImageBackground style={Fill.image} source={backgroundImage}>
				<View style={floatingTitleStyle.view}>
					<Text style={floatingTitleStyle.text}>{title}</Text>
				</View>

				<View style={widgetContainerStyle.view}>
					<View style={[widgetTitleStyle.view, primaryVariant.view]}>
						<Text style={[widgetTitleStyle.text, primaryVariant.text]}>
							{'DAILY RITUALS'}
						</Text>
					</View>

					<View style={[widgetBodyStyle.view, background.view]}>
						<View style={[widgetBodyText.view, { opacity: 0.7 }]}>
							<DayMenu />
						</View>
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
	[Subtitle.text]
);
const widgetSubtitleStyle = ComponentStyleSheet(
	[Fill.view, weights.widgetSubtitle],
	[Subtitle.text]
);
const widgetBodyStyle = ComponentStyleSheet(
	[Fill.view, weights.widgetBody, Body.view],
	[Body.text]
);
const widgetBodyText = ComponentStyleSheet([FillFloat.view]);
const widgetBodyButton = ComponentStyleSheet(
	[FillGravity.view, PushRight.view],
	[Title.image]
);
