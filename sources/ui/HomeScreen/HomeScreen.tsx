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
	MaterialGrey,
	PRIMARY_VARIANT,
} from '#ui/ColourScheme';
import { DayMenu } from '#ui/DayMenu';
import {
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
	VariableOpacity,
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

	const primaryVariant = CreateThemedView(theme, PRIMARY_VARIANT, true);
	const background = CreateThemedView(theme, BACKGROUND_COLOUR, true);
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
						<View
							style={[
								widgetBodyText.view,
								VariableOpacity(0.8).view,
								{ padding: 24 },
							]}
						>
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
