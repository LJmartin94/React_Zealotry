import React from 'react';

import { HomeScreen } from '#ui/HomeScreen';
import { Localiser } from '#features/Localiser';

Localiser.init();


const App = () => {
	return <HomeScreen />;
};

export default App;
