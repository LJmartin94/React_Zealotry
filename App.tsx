import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Localiser } from '#features/Localiser';
import { HomeScreen } from '#ui/HomeScreen';
import { Fill } from '#ui/Styles';

Localiser.init();

const App = () => {
	//TODO: get this from state
	return (
		<GestureHandlerRootView style={Fill.view}>
			<HomeScreen
				title={`${Localiser.getString('wednesday')}, \n23rd day of Winter`}
				backgroundImage={require('#assets/img/winter.jpg')}
			/>
		</GestureHandlerRootView>
	);
};

export default App;
