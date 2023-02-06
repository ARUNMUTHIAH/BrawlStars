import React from 'react';

const PowerPoint = (context) => {
	const { state: { brawlStars }} = context;

	return <span className="powerPoint">
		<img
			src="/img/POWERPOINT.jpeg"
			alt="noImage"
			width="40px"
			height="40px"
		/><label className="coinValue">{brawlStars.powerPoints}</label>
	</span>;
};

export default PowerPoint;
