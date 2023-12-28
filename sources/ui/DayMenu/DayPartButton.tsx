import React from 'react';
import {
	ImageBackground,
	Text,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';

import { Fill, Gravity, Title } from '#ui/Styles';

export type DayPartProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

export const DayPartButton = ({
	title,
	backgroundImage,
}: DayPartProps) => {
	return (
		<TouchableOpacity style={[Fill.view, Gravity.view]}>
			<ImageBackground
				source={backgroundImage}
				resizeMode='cover'
				style={[Fill.view, Gravity.image]}
			>
				<Text style={Title.text}>{title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};
