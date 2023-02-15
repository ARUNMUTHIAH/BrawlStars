import React from 'react';

const Power = (context) => {
	const { data: { brawlStar }, state: { powerSymbol }} = context;

	return <div>
		<span className="powerSymbol">
			<img
				className={ powerSymbol ? 'powerTop' : 'powerBottom' }
				src="/img/POWERSYMBOL.jpeg"
				alt="noImage"
				width="38px"
				height="28px"
			/>
		</span>
		<span className="powerName">POWER</span>
		<span className="powerValue">{brawlStar.powers}</span>
	</div>;
};

export default Power;
