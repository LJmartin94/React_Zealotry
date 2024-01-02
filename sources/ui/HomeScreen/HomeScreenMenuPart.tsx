import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Localiser } from '#features/Localiser';
import { DayMenu } from '#ui/DayMenu';
import { SettingsMenu } from '#ui/SettingsMenu';
import {
	BACKGROUND_COLOUR,
	Body,
	ComponentStyleSheet,
	CreateThemedView,
	DOUBLE_PADDING,
	Fill,
	Float,
	MaterialGrey,
	PRIMARY_VARIANT,
	Subtitle,
	VariableOpacity,
} from '#ui/Styles';

const enum MenuWidgets {
	dayMenu = 'dayMenu',
	settings = 'settings',
}

export const HomeScreenMenuPart = () => {
	const theme = new MaterialGrey(); //TODO: get theme from state
	const [getActiveWidget, setActiveWidget] = useState(MenuWidgets.dayMenu);

	const titleStrings: Record<MenuWidgets, string> = {
		dayMenu: Localiser.getString(
			'homescreen_daymenu_title'
		).toLocaleUpperCase(),
		settings: Localiser.getString(
			'homescreen_settings_title'
		).toLocaleUpperCase(),
	};

	const displayableComponents: Record<MenuWidgets, React.JSX.Element> = {
		dayMenu: <DayMenu />,
		settings: <SettingsMenu />,
	};

	const primaryVariant = CreateThemedView(theme, PRIMARY_VARIANT, true);
	const background = CreateThemedView(theme, BACKGROUND_COLOUR, true);

	const pan = Gesture.Pan().onFinalize(() => {
		console.log('Panning at the disco!');
		if (getActiveWidget === MenuWidgets.dayMenu) {
			setActiveWidget(MenuWidgets.settings);
		} else {
			setActiveWidget(MenuWidgets.dayMenu);
		}
		console.log(getActiveWidget);
	});
	return (
		<GestureDetector gesture={pan}>
			<View style={Fill.view}>
				<View style={[titleStyle.view, primaryVariant.view]}>
					<Icon
						name='caret-left'
						style={[
							titleStyle.text,
							primaryVariant.text,
							VariableOpacity(0.5).text,
							{ padding: DOUBLE_PADDING },
						]}
					/>
					<Text style={[titleStyle.text, primaryVariant.text]}>
						{titleStrings[getActiveWidget]}
					</Text>
					<Icon
						name='caret-right'
						style={[
							titleStyle.text,
							primaryVariant.text,
							VariableOpacity(0.5).text,
							{ padding: DOUBLE_PADDING },
						]}
					/>
				</View>
				<View style={[menuStyle.view, background.view]}>
					<View
						style={[
							innerMenuContainerStyle.view,
							VariableOpacity(0.8).view,
							{ padding: DOUBLE_PADDING },
						]}
					>
						{displayableComponents[getActiveWidget]}
					</View>
				</View>
			</View>
		</GestureDetector>
	);
};

const weights = StyleSheet.create({
	title: {
		flex: 4,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	menu: {
		flex: 17,
	},
});

const titleStyle = ComponentStyleSheet(
	[Fill.view, weights.title],
	[Subtitle.text]
);
const menuStyle = ComponentStyleSheet(
	[Fill.view, weights.menu, Body.view],
	[Body.text]
);
const innerMenuContainerStyle = ComponentStyleSheet([Fill.view, Float.view]);
