import React from 'react';

const Trophy = (context) => {
	const { data: { brawlStar }} = context;

	return <div className="bar">
		<div className="cup">
			<img
				style={ { borderRadius: '50%' } }
				src="/img/CUP.jpeg"
				alt="noImage"
				width="30px"
				height="30px"
			/>
			<label>{brawlStar.rank}</label>
		</div>
	</div>;
};

export default Trophy;
