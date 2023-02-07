import React from 'react';

const Power = (context) => {
	const { data: { brawlStar }} = context;

	return <div>
		<span
			className="powerName"
		>POWER</span>
		<span
			className="powerValue"
		>{brawlStar.powers}</span>
	</div>;
};

export default Power;
