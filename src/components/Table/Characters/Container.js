import React from 'react';
import Character from '../../../Image/Character';

const Container = (context) => {
	const { state: { brawlStars }} = context;

	return brawlStars.map((brawlStar, key) =>
		<Character
			key={ key }
			{ ...{ ...context, data: { brawlStar, key }} }
		/>);
};

export default Container;
