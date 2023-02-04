import { React, useState } from 'react';
import './App.scss';
import TableIndex from './components/Table/TableIndex';
import Button from './Button/Button';
import SortingFunction from './services/SortingFunction';

const getInitialState = (context) => ({
	brawlStars: SortingFunction.getCharacters(context),
	indexValue: 1,
	sortModes: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Button { ...extendedContext }/>
		<TableIndex { ...extendedContext }/>
	</div>;
};

export default App;
