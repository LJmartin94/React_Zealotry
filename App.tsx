import React from 'react';

import { Localiser } from '#features/Localiser';
import { HomeScreen } from '#ui/HomeScreen';

Localiser.init();

const App = () => {
	//TODO: get this from state
	return (
		<HomeScreen
			// eslint-disable-next-line quotes
			title={"Wodan's day"}
			backgroundImage={require('#assets/img/winter.jpg')}
		/>
	);
};

export default App;
