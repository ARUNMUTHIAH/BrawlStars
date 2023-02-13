import React from 'react';
import Character from './Character';

const Container = (context) => {
	const { state: { brawlStars }} = context;

	return (
		<div className="container">
			{	brawlStars.map((brawlStar, key) =>
				<Character
					key={ key }
					{ ...{ ...context, data: { brawlStar, key }} }
				/>)}
		</div>);
};

export default Container;
