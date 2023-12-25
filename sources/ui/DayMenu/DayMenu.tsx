import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DayPartButton } from './DayPartButton';
import { Localiser } from '#features/Localiser';

export const DayMenu = () => {
	return (
		<View style={styles.container}>
			<DayPartButton title={Localiser.getString('morning_menu_title')} backgroundImage={require('#assets/img/morning_button.png')} />
			<DayPartButton title={Localiser.getString('day_menu_title')} backgroundImage={require('#assets/img/day_button.png')} />
			<DayPartButton title={Localiser.getString('evening_menu_title')} backgroundImage={require('#assets/img/evening_button.png')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
});
