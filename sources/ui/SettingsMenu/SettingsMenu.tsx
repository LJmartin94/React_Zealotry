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
				title={Localiser.getString('settings_menu_stats')}
				icon={null}
			/>
			<SettingsPartButton
				title={Localiser.getString('settings_menu_data')}
				icon={null}
			/>
			<SettingsPartButton
				title={Localiser.getString('settings_menu_weather')}
				icon={null}
			/>
		</View>
	);
};
