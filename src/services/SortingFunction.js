/* eslint-disable no-magic-numbers */

const getPowerLevel = (context) => {
	const { setState } = context;

	return setInterval(() => setState((prevState) =>
		({ ...prevState,
			power: !prevState.power })), 1000);
};

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powers: 7,
		powerPoints: 5,
		coins: 5,
	}));

const getSquare = ({ data: { key }, config: { multiplier, margin }}) => ({
	left: (key % 3 * multiplier) + margin,
	top: Math.floor(key / 3) * multiplier + 200,
});

const sortByLeastTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => a.trophies - b.trophies);

const sortByMostTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.trophies - a.trophies);

const sortByPowerLevel = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.powers - a.powers);

const sortByRarity = ({ state: { brawlStars }, config: { rarityLevel }})	=>
	brawlStars.sort((a, b) => rarityLevel[a.rarity] - rarityLevel[b.rarity]);

const sortByRarityDescending = ({ state: { brawlStars },
	config: { rarityLevel }})	=>
	brawlStars.sort((a, b) => rarityLevel[b.rarity] - rarityLevel[a.rarity]);

const sortByClosestNextRank = ({ state: { brawlStars },
	config: { rankTrophies }}) =>
	brawlStars.sort((a, b) => (rankTrophies[a.rank] - a.trophies)
 - rankTrophies[b.rank] - b.trophies);

const SortingFunction = {
	getCharacters,
	getPowerLevel,
	getSquare,
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByRarity,
	sortByPowerLevel,
	sortByRarityDescending,
	sortByClosestNextRank,
};

export default SortingFunction;
