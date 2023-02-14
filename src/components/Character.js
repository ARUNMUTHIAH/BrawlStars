import React from 'react';
import Coins from './Coin/Coins';
import Rank from './Rank/Rank';
import Power from './Power/Power';
import Trophy from './Trophy/Trophy';
import BrawlerImage from './Image/BrawlerImage';
import BrawlersName from './BrawlersName/BrawlersName';

const Character = (context) =>
	<div
		className="character"
	>
		<BrawlerImage { ...context }/>
		<Power { ...context }/>
		<Coins { ...context }/>
		<BrawlersName { ...context }/>
		<Trophy { ...context }/>
		<Rank { ...context }/>
	</div>;

export default Character;
