import { React, useState } from 'react';
import './App.scss';
import Square from './Image/Square';

const getInitialState = () => ({
	brawlStars: {
		name: 'SHELLY',
		rank: 1,
		trophies: 1,
		rarity: 'COMMON',
		image: '/img/SHELLY.jpeg',
		powers: 7,
		powerPoints: 5,
		coins: 7,
	},
	indexValue: 1,
	sortModes: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Square { ...extendedContext }/>
	</div>;
};

export default App;
