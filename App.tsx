import React from 'react';

import { Localiser } from '#features/Localiser';
import { HomeScreen } from '#ui/HomeScreen';

Localiser.init();


const App = () => {
	return <HomeScreen />;
};

export default App;
