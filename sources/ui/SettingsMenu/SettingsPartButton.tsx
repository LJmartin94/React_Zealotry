import React from 'react';
import {
	ImageBackground,
	Text,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';

import { Fill, Gravity, Title } from '#ui/Styles';

export type SettingsPartProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

export const SettingsPartButton = ({
	title,
	backgroundImage,
}: SettingsPartProps) => {
	return (
		<TouchableOpacity style={[Fill.view, Gravity.view]}>
			<ImageBackground
				source={backgroundImage}
				resizeMode='cover'
				style={[Fill.view, Gravity.image]}
			>
				<Text style={Title.text}>{'setting title'}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};
