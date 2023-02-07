/* eslint-disable no-magic-numbers */

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powers: 7,
		powerPoints: 5,
		coins: 5,
	}));

const getSquare = ({ data: { key }, config: { size, multiplier, margin }}) => ({
	height: 280 * size,
	width: 350 * size,
	left: (((key % 3) * multiplier) + margin) * size,
	top: (Math.floor(key / 3) * 340) + 200,
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
	getSquare,
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByRarity,
	sortByPowerLevel,
	sortByRarityDescending,
	sortByClosestNextRank,
};

export default SortingFunction;
