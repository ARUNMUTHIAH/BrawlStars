import React from 'react';
import Coins from '../Coin/Coins';
import Power from '../Power/Power';
import Image from './Image';

const Square = (context) => {
	const { state: { brawlStars }} = context;

	return <div className="square">
		<label className="name">{brawlStars.name}</label>
		<Image { ...context }/>
		<Power { ...context }/>
		<Coins { ...context }/>
	</div>;
};

export default Square;
