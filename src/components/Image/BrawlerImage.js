import React from 'react';

const BrawlerImage = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<img
			className="img"
			src={ brawlStar.image }
			alt="noImage"
		/>);
};

export default BrawlerImage;
