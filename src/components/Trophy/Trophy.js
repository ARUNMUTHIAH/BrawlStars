/* eslint-disable max-lines-per-function */
import React from 'react';

const Trophy = (context) => {
	const { data: { brawlStar }} = context;

	return (
		<div className="header">
			<div
				className="bar"
				style={ { width: `${ brawlStar.trophies }px` } }
			>
				<span className="cup">
					<img
						style={ { borderRadius: '50%' } }
						src="/img/CUP.jpeg"
						alt="noImage"
						width="30px"
						height="30px"
					/>
					<span className="trophyStyle">{brawlStar.trophies}</span>
				</span>
			</div>
		</div>);
};

export default Trophy;
