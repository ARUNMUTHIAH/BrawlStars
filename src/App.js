import { React, useState } from 'react';
import './App.scss';
import TableIndex from './components/Table/TableIndex';
import characters from './data/characters';
import Button from './Button/Button';

const initialState = {
	brawlStars: characters,
	indexValue: 1,
	sortModes: 'Least Trophies',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<TableIndex { ...extendedContext }/>
		<Button { ...extendedContext }/>
	</div>;
};

export default App;
