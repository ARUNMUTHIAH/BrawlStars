import React from 'react';
import SortingFunction from '../services/SortingFunction';

const types = {
	'Least Trophies': (context) =>
		SortingFunction.getLeastTrophies(context),
	'Most Trophies': (context) =>
		SortingFunction.getMostTrophies(context),
	'POWER LEVEL': (context) =>
		SortingFunction.getPowerLevel(context),
	'By Rarity': (context) =>
		SortingFunction.getRarity(context),
	'By Rarity Descending': (context) =>
		SortingFunction.getRarityDescending(context),
	'Closest To Next Rank': (context) =>
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
