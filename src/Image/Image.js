import React from 'react';

const Image = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<div style={ {
			backgroundColor: 'blue',
		} }
		>
			<img
				src={ brawlStar.image }
				alt="noImage"
				height="200px"
				width="200px"
			/>
		</div>);
};

export default Image;
