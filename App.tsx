import React from 'react';

import { Localiser } from '#features/Localiser';
import { HomeScreen } from '#ui/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

Localiser.init();

const App = () => {
	//TODO: get this from state
	return (
		<GestureHandlerRootView
			style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
		>
			<HomeScreen
				title={Localiser.getString('wednesday')}
				backgroundImage={require('#assets/img/winter.jpg')}
			/>
		</GestureHandlerRootView>
	);
};

export default App;
