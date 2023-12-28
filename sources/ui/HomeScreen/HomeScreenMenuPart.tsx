import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Localiser } from '#features/Localiser';
import {
	BACKGROUND_COLOUR,
	CreateThemedView,
	MaterialGrey,
	PRIMARY_VARIANT,
} from '#ui/ColourScheme';
import { DayMenu } from '#ui/DayMenu';
import { SettingsMenu } from '#ui/SettingsMenu';
import {
	Body,
	ComponentStyleSheet,
	Fill,
	Float,
	Subtitle,
	VariableOpacity,
} from '#ui/Styles';
import { DOUBLE_PADDING } from '#ui/Styles/GlobalStyle';

const enum MenuWidgets {
	dayMenu = 'dayMenu',
	settings = 'settings',
}

export const HomeScreenMenuPart = () => {
	const theme = new MaterialGrey();

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

	let activeWidget: MenuWidgets;
	// eslint-disable-next-line prefer-const
	activeWidget = MenuWidgets.dayMenu;

	const primaryVariant = CreateThemedView(theme, PRIMARY_VARIANT, true);
	const background = CreateThemedView(theme, BACKGROUND_COLOUR, true);
	return (
		<>
			<View style={[titleStyle.view, primaryVariant.view]}>
				<Text style={[titleStyle.text, primaryVariant.text]}>
					{titleStrings[activeWidget]}
				</Text>
			</View>

			<View style={[menuStyle.view, background.view]}>
				<View
					style={[
						menuText.view,
						VariableOpacity(0.8).view,
						{ padding: DOUBLE_PADDING },
					]}
				>
					{displayableComponents[activeWidget]}
				</View>
			</View>
		</>
	);
};

const weights = StyleSheet.create({
	title: {
		flex: 4,
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
const menuText = ComponentStyleSheet([Fill.view, Float.view]);
