import React from 'react';

import { Localiser } from '#features/Localiser';
// import { HomeScreen } from '#ui/HomeScreen';
import { ThemeTestScreen } from '#ui/ColourScheme';

Localiser.init();

const App = () => {
	//TODO: get this from state
	return (
		<ThemeTestScreen
			// eslint-disable-next-line quotes
			title={"Wodan's day, 40th day of Winter"}
			backgroundImage={require('#assets/img/winter.jpg')}
		/>
	);
};

export default App;
