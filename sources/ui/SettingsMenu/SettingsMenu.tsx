import React from 'react';
import { View } from 'react-native';

import { SettingsPartButton } from './SettingsPartButton';

import { Localiser } from '#features/Localiser';
import { Fill } from '#ui/Styles';
import { HALF_PADDING } from '#ui/Styles/GlobalStyle';

export const SettingsMenu = () => {
	return (
		<View style={[Fill.view, { gap: HALF_PADDING }]}>
			<SettingsPartButton
				title={Localiser.getString('morning_menu_title')}
				backgroundImage={require('#assets/img/morning_button.png')}
			/>
			<SettingsPartButton
				title={Localiser.getString('day_menu_title')}
				backgroundImage={require('#assets/img/day_button.png')}
			/>
			<SettingsPartButton
				title={Localiser.getString('evening_menu_title')}
				backgroundImage={require('#assets/img/evening_button.png')}
			/>
		</View>
	);
};
