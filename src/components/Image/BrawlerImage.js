import React from 'react';

const BrawlerImage = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<div>
			<img
				className="img"
				src={ brawlStar.image }
				alt="noImage"
				height="100%"
				width="100%"
			/>
		</div>);
};

export default BrawlerImage;
