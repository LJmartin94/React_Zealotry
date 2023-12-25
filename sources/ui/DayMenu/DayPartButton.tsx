import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	ImageSourcePropType,
} from 'react-native';

export type DayPartProps = {
	title: string;
	backgroundImage: ImageSourcePropType;
};

export const DayPartButton = ({ title, backgroundImage }: DayPartProps) => {
	return (
		<TouchableOpacity style={styles.container}>
			<ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
				<Text style={styles.title}>{title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: { flex: 1, alignItems: 'stretch', justifyContent: 'flex-end' },
	title: {
		alignSelf: 'center',
		fontFamily: 'quaver',
		fontSize: 42,
		lineHeight: 60, //works a bit like padding, and prevents the text being cut off vertically
		padding: 0,
		color: 'black',
	},
});
