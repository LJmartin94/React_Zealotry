import React from 'react';
import {
	ImageBackground,
	Text,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';

import { FillGravity, Title } from '#ui/Styles';

export type DayPartProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

export const DayPartButton = ({ title, backgroundImage }: DayPartProps) => {
	return (
		<TouchableOpacity style={FillGravity.viewStyle}>
			<ImageBackground source={backgroundImage} resizeMode='cover' style={FillGravity.imageStyle}>
				<Text style={Title.textStyle}>{title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};