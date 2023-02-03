/* eslint-disable no-magic-numbers */
const getLeastTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => a.trophies - b.trophies);

const getMostTrophies = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.trophies - a.trophies);

const getPowerLevel = ({ state: { brawlStars }}) =>
	brawlStars.sort((a, b) => b.powers - a.powers);

const getRarity = ({ state: { brawlStars }, config: { rarityLevel }})	=>
	brawlStars.sort((a, b) => rarityLevel[a.rarity] - rarityLevel[b.rarity]);

const getRarityDescending = ({ state: { brawlStars },
	config: { rarityLevel }})	=>
	brawlStars.sort((a, b) => rarityLevel[b.rarity] - rarityLevel[a.rarity]);

const getClosestNextRank = ({ state: { brawlStars },
	config: { rankTrophies }}) =>
	brawlStars.sort((a, b) => (rankTrophies[a.rank] - a.trophies)
 - rankTrophies[b.rank] - b.trophies);

const SortingFunction = {
	getLeastTrophies,
	getMostTrophies,
	getRarity,
	getPowerLevel,
	getRarityDescending,
	getClosestNextRank,
};

export default SortingFunction;
