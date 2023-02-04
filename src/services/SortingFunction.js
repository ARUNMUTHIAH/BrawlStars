/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powers: rndBetween(1, 10),
		powerPoints: rndBetween(1, 100),
		coins: rndBetween(1, 100),
	}));

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
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByRarity,
	sortByPowerLevel,
	sortByRarityDescending,
	sortByClosestNextRank,
};

export default SortingFunction;
