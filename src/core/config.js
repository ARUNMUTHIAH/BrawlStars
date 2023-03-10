/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const config = {
	characters: [
		{
			name: 'SHELLY',
			rank: 1,
			trophies: rndBetween(1, 50),
			rarity: 'COMMON',
			image: '/img/SHELLY.jpeg',
		},
		{
			name: 'ELPRIMO',
			rank: 2,
			trophies: rndBetween(1, 50),
			rarity: 'RARE',
			image: '/img/EL PRIMO.jpeg',
		},
		{
			name: 'BO',
			rank: 3,
			trophies: rndBetween(1, 50),
			rarity: 'EPIC',
			image: '/img/BO.jpeg',
		},
		{
			name: 'BROCK',
			rank: 4,
			trophies: rndBetween(1, 50),
			rarity: 'RARE',
			image: '/img/BROCK.jpeg',
		},
		{
			name: 'COLT',
			rank: 5,
			trophies: rndBetween(1, 50),
			rarity: 'MYTHIC',
			image: '/img/COLT.jpeg',
		},
		{
			name: 'TARA',
			rank: 6,
			trophies: 6,
			rarity: 'MYTHIC',
			image: '/img/TARA.jpeg',
		},

	],
	multiplier: 50,
	margin: 50,

	headings: [
		'name',
		'powers',
		'rank',
		'trophies',
		'powerPoints',
		'coins',
		'rarity',
		'image',
	],
	sorting: [
		'Least Trophies',
		'Most Trophies',
		'POWER LEVEL',
		'By Rarity',
		'By Rarity Descending',
		'Closest To Next Rank',
	],
	rarityLevel: {
		COMMON: 1,
		RARE: 2,
		SUPERRARE: 3,
		EPIC: 4,
		MYTHIC: 5,
		LEGENDRY: 6,
		CHROMATIC: 7,
	},
	rankTrophies: {
		1: 5,
		2: 10,
		3: 20,
		4: 30,
		5: 40,
		6: 60,
		7: 80,
		8: 100,
		9: 120,
		10: 140,
		11: 160,
		12: 180,
		13: 200,
		14: 220,
		15: 240,
		16: 260,
		17: 280,
		18: 300,
	},
};

export default config;
