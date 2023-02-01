/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const characters = [
	{
		name: 'SHELLY',
		powers: rndBetween(1, 10),
		rank: 1,
		trophies: rndBetween(1, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'STARTING BRAWLER',
	},
	{
		name: 'EL PRIMO',
		powers: rndBetween(1, 10),
		rank: 2,
		trophies: rndBetween(0, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'RARE',
	},
	{
		name: 'NITA',
		powers: rndBetween(1, 10),
		rank: 3,
		trophies: rndBetween(1, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'RARE',
	},
	{
		name: 'JESSIE',
		powers: rndBetween(1, 10),
		rank: 4,
		trophies: rndBetween(1, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'SUPER RARE',
	},
	{
		name: 'PENNY',
		powers: rndBetween(1, 10),
		rank: 5,
		trophies: rndBetween(1, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'SUPER RARE',
	},
	{
		name: 'BARLEY',
		powers: rndBetween(1, 10),
		rank: 6,
		trophies: rndBetween(1, 10),
		powerPoints: rndBetween(1, 10),
		coins: rndBetween(1, 10),
		rarity: 'RARE',
	},
];

export default characters;
