/* eslint-disable no-magic-numbers */
import React from 'react';
import Coins from '../Coin/Coins';
import Rank from '../components/Table/Rank/Rank';
import Power from '../Power/Power';
import Trophy from '../Trophy/Trophy';
import Image from './Image';
import BrawlersName from '../components/Table/BrawlersName/BrawlersName';

const multiplier = 390;
const margin = 800;

const getSquare = ({ data: { key }, config: { size }}) => ({
	height: 280 * size,
	width: 350 * size,
	left: (((key % 3) * multiplier) + margin) * size,
	top: (Math.floor(key / 3) * 340) + 150,
});
const Container = (context) =>
	<div
		className="square"
		style={ getSquare(context) }
	>
		<BrawlersName { ...context }/>
		<Trophy { ...context }/>
		<Image { ...context }/>
		<Rank { ...context }/>
		<Power { ...context }/>
		<Coins { ...context }/>
	</div>;

export default Container;
