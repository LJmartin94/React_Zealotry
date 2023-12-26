import React from 'react';

import { Localiser } from '#features/Localiser';
import { HomeScreen } from '#ui/HomeScreen';

Localiser.init();


const App = () => {
	//TODO: get this from state
	return <HomeScreen title={'Test'} backgroundImage={require('#assets/img/winter.jpg')} />;
};

export default App;
