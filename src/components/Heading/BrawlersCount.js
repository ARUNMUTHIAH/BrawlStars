import React from 'react';

const BrawlersCount = (context) => {
	const { state: { brawlStars }} = context;

	return (
		<div className="brawlerCount">BrawlStars {brawlStars.length}/64</div>);
};

export default BrawlersCount;
