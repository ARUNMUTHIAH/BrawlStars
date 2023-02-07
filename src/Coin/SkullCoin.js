import React from 'react';

const BrawlerCoin = (context) => {
	const { data: { brawlStar }} = context;

	return <span className="skullCoin">
		<img
			style={ { borderRadius: '50%' } }
			src="/img/SKULLCOIN.jpeg"
			alt="noImage"
			width="40px"
			height="40px"
		/><span className="coinValue">{brawlStar.coins}</span>
	</span>;
};

export default BrawlerCoin;
