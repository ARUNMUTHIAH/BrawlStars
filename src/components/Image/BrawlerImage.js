import React from 'react';

const BrawlerImage = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<div>
			<img
				className="img"
				src={ brawlStar.image }
				alt="noImage"
			/>
		</div>);
};

export default BrawlerImage;
