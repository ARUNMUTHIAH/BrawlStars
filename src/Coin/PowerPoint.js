import React from 'react';

const PowerPoint = (context) => {
	const { data: { brawlStar }} = context;

	return <span className="powerPoint">
		<img
			style={ { borderRadius: '50%' } }
			src="/img/POWERPOINT.jpeg"
			alt="noImage"
			width="40px"
			height="40px"
		/><label className="coinValue">{brawlStar.powerPoints}</label>
	</span>;
};

export default PowerPoint;
