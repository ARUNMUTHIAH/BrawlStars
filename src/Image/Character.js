/* eslint-disable no-magic-numbers */
import React from 'react';
import Coins from '../Coin/Coins';
import Rank from '../components/Table/Rank/Rank';
import Power from '../Power/Power';
import Trophy from '../Trophy/Trophy';
import Image from './Image';
import BrawlersName from '../components/Table/BrawlersName/BrawlersName';
import SortingFunction from '../services/SortingFunction';

const Character = (context) =>
	<div
		className="character"
		style={ SortingFunction.getSquare(context) }
	>
		<BrawlersName { ...context }/>
		<Trophy { ...context }/>
		<Image { ...context }/>
		<Rank { ...context }/>
		<Power { ...context }/>
		<Coins { ...context }/>
	</div>;

export default Character;