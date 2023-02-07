import React from 'react';

const SkullCoin = (context) => {
	const { data: { brawlStar }} = context;

	return <span className="skullCoin">
		<img
			style={ { borderRadius: '50%' } }
			src="/img/SKULLCOIN.jpeg"
			alt="noImage"
			width="40px"
			height="40px"
		/><label className="coinValue">{brawlStar.coins}</label>
	</span>;
};

export default SkullCoin;
