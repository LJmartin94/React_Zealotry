import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export const BacklightText = ({
	children,
	style,
	...properties
}: React.PropsWithChildren<TextProps>) => {
	return (
		<>
			<Text
				style={[style, shadows.NorthWest, shadows.Backlight]}
				{...properties}
			>
				{children}
			</Text>
			<Text
				style={[style, shadows.SouthEast, shadows.Backlight]}
				{...properties}
			>
				{children}
			</Text>
		</>
	);
};

const shadows = StyleSheet.create({
	NorthWest: {
		position: 'absolute',
		textShadowOffset: { width: -1, height: -1 },
	},
	SouthEast: {
		position: 'absolute',
		textShadowOffset: { width: 1, height: 1 },
	},
	Backlight: {
		textShadowRadius: 8,
	},
});
