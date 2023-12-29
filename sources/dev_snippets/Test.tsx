import {
	Body,
	CreateThemedView,
	MaterialGrey,
	SECONDARY_COLOUR,
	Title,
} from '#ui/Styles';
import { MainButtonWithIcon } from '#ui/Styles/ComponentStyles/MainButtonWithIcon';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const renderLeftActions = (progress, dragX) => {
	const theme = CreateThemedView(new MaterialGrey(), SECONDARY_COLOUR, true);
	const trans = dragX.interpolate({
		inputRange: [0, 50, 100, 101],
		outputRange: [-20, 0, 0, 1],
	});
	return (
		<RectButton style={MainButtonWithIcon(theme, null).view} onPress={null}>
			<Animated.Text
				style={[
					Title.text,
					{
						transform: [{ translateX: trans }],
					},
				]}
			>
				Archive
			</Animated.Text>
		</RectButton>
	);
};

export class AppleStyleSwipeableRow extends Component {
	render() {
		return (
			<Swipeable renderLeftActions={renderLeftActions}>
				<Text style={Title.text}>"hello"</Text>
			</Swipeable>
		);
	}
}
