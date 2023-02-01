import { React, useState } from 'react';
import './App.scss';
import Table from './components/Table';
import characters from './data/characters';

const initialState = {
	brawlStars: characters,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Table { ...extendedContext }/>
	</div>;
};

export default App;
