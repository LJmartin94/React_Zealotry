import React from 'react';

import { HomeScreen } from '#UI/HomeScreen';
import { Localiser } from '#Features/Localiser';

Localiser.init();


const App = () => {
	return <HomeScreen />;
};

export default App;
