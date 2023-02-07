import React from 'react';
import Container from '../../../Image/Container';

const Characters = (context) => {
	const { state: { brawlStars }} = context;

	return brawlStars.map((brawlStar, key) =>
		<Container
			key={ key }
			{ ...{ ...context, data: { brawlStar, key }} }
		/>);
};

export default Characters;
