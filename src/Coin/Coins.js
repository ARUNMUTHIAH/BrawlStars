import React from 'react';
import PowerPoint from './PowerPoint';
import SkullCoin from './SkullCoin';

const Coins = (context) => <div className="rectangle">
	<PowerPoint { ...context }/>
	<label className="plusOperator"> + </label>
	<SkullCoin { ...context }/>
</div>;

export default Coins;
