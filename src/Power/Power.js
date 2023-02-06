import React from 'react';

const Power = (context) => {
	const { state: { brawlStars }} = context;

	return <div>
		<label
			className="powerName"
		>POWER</label>
		<label
			className="powerValue"
		>{brawlStars.powers}</label>
	</div>;
};

export default Power;
