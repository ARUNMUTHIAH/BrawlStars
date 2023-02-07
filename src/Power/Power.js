import React from 'react';

const Power = (context) => {
	const { data: { brawlStar }} = context;

	return <div>
		<label
			className="powerName"
		>POWER</label>
		<label
			className="powerValue"
		>{brawlStar.powers}</label>
	</div>;
};

export default Power;
