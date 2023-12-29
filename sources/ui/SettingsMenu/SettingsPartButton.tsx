import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {
	CreateThemedView,
	MaterialGrey,
	PRIMARY_COLOUR,
} from '#ui/ColourScheme';
import { MainButtonWithIcon } from '#ui/Styles/ComponentStyles/MainButtonWithIcon';

export type SettingsPartProps = {
	title: string;
	icon: unknown;
};

export const SettingsPartButton = ({ title, icon }: SettingsPartProps) => {
	const style = CreateThemedView(new MaterialGrey(), PRIMARY_COLOUR, true); //TODO: get theme from state

	return (
		<TouchableOpacity style={MainButtonWithIcon(style, icon).view}>
			<Text style={MainButtonWithIcon(style, icon).text}>{title}</Text>
		</TouchableOpacity>
	);
};
