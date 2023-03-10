import React from 'react';
import PowerPoint from './PowerPoint';
import BrawlerCoin from './BrawlerCoin';

const Coins = (context) => <div className="rectangle">
	<PowerPoint { ...context }/>
	<span className="plusOperator"> + </span>
	<BrawlerCoin { ...context }/>
</div>;

export default Coins;
