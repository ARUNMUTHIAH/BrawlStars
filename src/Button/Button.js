import React from 'react';
import SortingFunction from '../services/SortingFunction';

const types = {
	LeastTrophies: (context) =>
		SortingFunction.getLeastTrophies(context),
	MostTrophies: (context) =>
		SortingFunction.getMostTrophies(context),
	POWERLEVEL: (context) =>
		SortingFunction.getPowerLevel(context),
	ByRarity: (context) =>
		SortingFunction.getRarity(context),
	ByRarityDescending: (context) =>
		SortingFunction.getRarityDescending(context),
	ClosestToNextRank: (context) =>
		SortingFunction.getClosestNextRank(context),
};

const Button = (context) => {
	const { state, setState,
		state: { indexValue, sortModes }} = context;
	const { config: { sorting }} = context;

	return (
		<button onClick={ () => setState({
			...state,
			indexValue: indexValue + 1,
			sortModes: sorting[indexValue % sorting.length],
			brawlStars: types[sortModes](context),
		}) }
		>{sortModes}</button>
	);
};

export default Button;
