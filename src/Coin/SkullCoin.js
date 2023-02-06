import React from 'react';

const SkullCoin = (context) => {
	const { state: { brawlStars }} = context;

	return <span className="skullCoin">
		<img
			src="/img/SKULLCOIN.jpeg"
			alt="noImage"
			width="40px"
			height="40px"
		/><label className="coinValue">{brawlStars.coins}</label>
	</span>;
};

export default SkullCoin;
