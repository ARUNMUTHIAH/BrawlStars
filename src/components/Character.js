import React from 'react';
import Coins from './Coin/Coins';
import Rank from './Rank/Rank';
import Power from '../Power/Power';
import Trophy from '../Trophy/Trophy';
import BrawlerImage from '../Image/BrawlerImage';
import BrawlersName from './BrawlersName/BrawlersName';
import SortingFunction from '../services/SortingFunction';

const Character = (context) =>
	<div
		className="character"
		style={ SortingFunction.getSquare(context) }
	>
		<BrawlersName { ...context }/>
		<Trophy { ...context }/>
		<BrawlerImage { ...context }/>
		<Rank { ...context }/>
		<Power { ...context }/>
		<Coins { ...context }/>
	</div>;

export default Character;
