import { React, useState } from 'react';
import './App.scss';
import Button from './Button/Button';
import BrawlersCount from './components/Table/Heading/BrawlersCount';
import SortingFunction from './services/SortingFunction';
import Container from './components/Table/Container';

const getInitialState = (context) => ({
	brawlStars: SortingFunction.getCharacters(context),
	indexValue: 1,
	sortModes: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlersCount { ...extendedContext }/>
		<Button { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</div>;
};

export default App;
