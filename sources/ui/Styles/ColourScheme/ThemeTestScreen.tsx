import React from 'react';
import {
	ImageBackground,
	ImageSourcePropType,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import {
	BACKGROUND_COLOUR,
	CreateThemedView,
	ERROR_COLOUR,
	PRIMARY_COLOUR,
	PRIMARY_VARIANT,
	SECONDARY_COLOUR,
} from './CreateThemedView';
import { MaterialGrey } from './MaterialGrey';

import {
	BasicRoundButton,
	Body,
	ComponentStyleSheet,
	DEFAULT_PADDING,
	Fill,
	Float,
	Gravity,
	PushLeft,
	PushRight,
	SlightTransparency,
	Subtitle,
	Title,
} from '#ui/Styles';

export type HomeScreenProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

//The main screen of the app
export const ThemeTestScreen = ({
	title,
	backgroundImage,
}: HomeScreenProps) => {
	const theme = new MaterialGrey(); //TODO: get theme from state

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
						<View style={widgetBodyText.view}>
							<Text style={[widgetBodyStyle.text, background.text]}>
								{'Lorem ipsum etc etc'}
							</Text>
						</View>
						<View style={[widgetBodyText.view, errorColour.view]}>
							<Text style={[widgetBodyStyle.text, errorColour.text]}>
								{'ERROR!! OH NO'}
							</Text>
						</View>
						<View style={widgetBodyButton.view}>
							<TouchableOpacity
								style={[BasicRoundButton.view, secondaryColour.view]}
							>
								<Text style={[widgetBodyButton.text, secondaryColour.text]}>
									{'+'}
								</Text>
							</TouchableOpacity>
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
	[Fill.view, Gravity.view, weights.title],
	[Title.text, PushLeft.text],
	[]
);
const widgetContainerStyle = ComponentStyleSheet([
	Fill.view,
	SlightTransparency.view,
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
const widgetBodyText = ComponentStyleSheet([Fill.view, Float.view]);
const widgetBodyButton = ComponentStyleSheet(
	[Fill.view, Gravity.view, PushRight.view],
	[Title.image]
);
