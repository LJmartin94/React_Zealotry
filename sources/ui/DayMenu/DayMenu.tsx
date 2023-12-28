import React from 'react';
import { View } from 'react-native';

import { DayPartButton } from './DayPartButton';

import { Localiser } from '#features/Localiser';
import { Fill } from '#ui/Styles';
import { HALF_PADDING } from '#ui/Styles/GlobalStyle';

export const DayMenu = () => {
	return (
		<View style={[Fill.view, { gap: HALF_PADDING }]}>
			<DayPartButton
				title={Localiser.getString('morning_menu_title')}
				backgroundImage={require('#assets/img/morning_button.png')}
			/>
			<DayPartButton
				title={Localiser.getString('day_menu_title')}
				backgroundImage={require('#assets/img/day_button.png')}
			/>
			<DayPartButton
				title={Localiser.getString('evening_menu_title')}
				backgroundImage={require('#assets/img/evening_button.png')}
			/>
		</View>
	);
};
