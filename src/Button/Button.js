import React from 'react';
import SortingFunction from '../services/SortingFunction';

const types = {
	'Least Trophies': (context) =>
		SortingFunction.sortByLeastTrophies(context),
	'Most Trophies': (context) =>
		SortingFunction.sortByMostTrophies(context),
	'POWER LEVEL': (context) =>
		SortingFunction.sortByPowerLevel(context),
	'By Rarity': (context) =>
		SortingFunction.sortByRarity(context),
	'By Rarity Descending': (context) =>
		SortingFunction.sortByRarityDescending(context),
	'Closest To Next Rank': (context) =>
		SortingFunction.sortByClosestNextRank(context),
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
