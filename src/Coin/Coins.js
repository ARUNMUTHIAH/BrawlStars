import React from 'react';
import PowerPoint from './PowerPoint';
import SkullCoin from './SkullCoin';

const Coins = (context) => <div className="rectangle">
	<PowerPoint { ...context }/>
	<SkullCoin { ...context }/>
</div>;

export default Coins;
